"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../.env" });
const { MONGO_URI } = process.env;
const { v4: uuidv4 } = require("uuid");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
const database = client.db("brainstorm");
const brainstormDB = database.collection("users");
// const ObjectId = require("mongodb").ObjectId;

const addTournament = async (req, res) => {
  try {
    await client.connect();
    let newTournament = req.body;

    const tournamentMetaData = newTournament.tournamentMetaData;

    console.log(newTournament);

    // Ensure tournamentId is provided in the metadata from the frontend
    if (!newTournament.tournamentMetaData.tournamentId) {
      // Generate a unique UUID for the tournament if it is null
      newTournament = {
        tournamentResults: newTournament.tournamentResults,
        tournamentMetaData: { ...tournamentMetaData, tournamentId: uuidv4() },
      };
      // newTournament.tournamentMetaData.tournamentId = uuidv4();
    }
    const currentUser = await brainstormDB.findOne({
      userEmail: req.body.userEmail,
    });

    if (!currentUser) {
      return res.status(404).json({
        status: 404,
        message: "User not found, please log in.",
      });
    }

    // Update the array with the new tournament
    const updatedTournament = [...currentUser.tournaments, newTournament];

    // Update the user document with the new array of tournaments
    const updatedUser = await brainstormDB.updateOne(
      { userEmail: req.body.userEmail },
      { $set: { tournaments: updatedTournament } }
    );

    if (!updatedUser) {
      return res.status(500).json({
        status: 500,
        message: "Error uploading new tournament",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Success",
    });
  } catch (error) {
    console.error(
      `${new Date().toISOString()} - Error in addTournament: ${error.message}`
    );
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  } finally {
    client.close();
  }
};

const getTournaments = async (req, res) => {
  const userEmail = req.params.email;
  try {
    await client.connect();
    const findUser = await brainstormDB.findOne({ userEmail: userEmail });
    if (!findUser) {
      return res.status(404).json({
        status: 404,
        message: "User not found, can't get tournament information",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Successfully fetched tournament information",
        data: findUser.tournaments,
      });
    }
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    client.close();
  }
  // try {
  //   await client.connect();
  //   const tournamentData = await tournamentCollection.find().toArray();
  //   if (!tournamentData) {
  //     return res.status(404).json({
  //       status: 404,
  //       message: "No tournaments found.",
  //     });
  //   } else {
  //     return res.status(200).json({
  //       status: 200,
  //       message: "Success",
  //       data: tournamentData,
  //     });
  //   }
  // } catch (error) {
  //   console.error("Error: ", error);
  // }
};

module.exports = { addTournament, getTournaments };

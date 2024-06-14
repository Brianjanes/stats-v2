import React from "react";
import "../styles/ContentPage.css";
import TournamentDisplayTable from "../components/TournamentDisplayTable";

const Dashboard = () => {
  // this is "dummy data" for getting my table component (TournamentDisplayTable) to render
  const data = require("../test-data.json");
  const parsedData = JSON.parse(JSON.stringify(data));
  let tournamentResults = parsedData.tournaments;
  // this will eventually be a useEffect that fetches data from the DB
  return (
    <div className="container">
      <div className="dashboard-layout">
        <div className="top-dashboard">
          <div className="dashboard-box"></div>
          <div className="dashboard-box"></div>
        </div>

        <div className="dashboard-box-full-width">
          <TournamentDisplayTable pastTournaments={tournamentResults} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

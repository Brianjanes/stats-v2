import React, { useState } from "react";
import "../styles/TournamentDisplayTable.css";

const determineBackgroundColor = (result) => {
  if (result.wins >= 2) {
    return "#80ff80";
  } else if (result.losses >= 2) {
    return "#ff8080";
  } else if (result.draws > 0) {
    return "#ffff99";
  } else {
    return "inherit";
  }
};

const TournamentResultsTable = ({ tournamentResults }) => {
  const handleNotesModal = (notes) => {
    alert(`Notes: ${notes}`);
  };

  return (
    <table className="results-table">
      <thead>
        <tr className="table-header">
          <th style={{ width: "5%" }}>Round</th>
          <th style={{ width: "20%" }}>Matchup</th>
          <th style={{ width: "10%" }}>Wins</th>
          <th style={{ width: "10%" }}>Losses</th>
          <th style={{ width: "10%" }}>Draws</th>
          <th style={{ width: "5%" }}>Notes</th>
        </tr>
      </thead>
      <tbody>
        {tournamentResults.map((result, index) => (
          <tr key={index} className="result-row">
            <td style={{ fontWeight: "bold" }}>{result.round}</td>
            <td style={{ textAlign: "left" }}>{result.matchup}</td>
            <td
              style={{
                backgroundColor: determineBackgroundColor(result),
                opacity: 0.75,
              }}
            >
              <span style={{ fontWeight: "bold" }}>Wins</span>: {result.wins}
            </td>
            <td
              style={{
                backgroundColor: determineBackgroundColor(result),
                opacity: 0.75,
              }}
            >
              <span style={{ fontWeight: "bold" }}>Losses</span>:{" "}
              {result.losses}
            </td>
            <td
              style={{
                backgroundColor: determineBackgroundColor(result),
                opacity: 0.75,
                width: "2rem",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Draws</span>: {result.draws}
            </td>
            <td>
              <button
                className="notes-button"
                onClick={() => handleNotesModal(result.notes)}
              >
                NOTES
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TournamentRow = ({ tournament }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr className="tournament-header" onClick={() => setOpen(!open)}>
        <td className="toggle-icon">{open ? "-" : "+"}</td>
        <td>{tournament.tournamentMetaData.tournamentName}</td>
        <td>{tournament.tournamentMetaData.tournamentDate}</td>
        <td>{tournament.tournamentMetaData.tournamentLocation}</td>
        <td>{tournament.tournamentMetaData.deckName}</td>
      </tr>
      {open && (
        <tr>
          <td colSpan="5">
            <div className="tournament-results">
              <TournamentResultsTable
                tournamentResults={tournament.tournamentResults}
              />
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

const TournamentDisplayTable = ({ pastTournaments }) => {
  return (
    <div className="table-container">
      <h2 className="table-header">Tournament Results</h2>
      <table className="tournament-table">
        <thead>
          <tr>
            <th></th>
            <th>Tournament Name</th>
            <th>Tournament Date</th>
            <th>Tournament Location</th>
            <th>Deck Name</th>
          </tr>
        </thead>
        <tbody>
          {pastTournaments.map((tournament, index) => (
            <TournamentRow key={index} tournament={tournament} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TournamentDisplayTable;

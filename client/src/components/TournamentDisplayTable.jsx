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
      <tbody>
        {tournamentResults.map((result, index) => (
          <tr
            key={index}
            style={{
              backgroundColor: determineBackgroundColor(result),
              opacity: 0.75,
            }}
          >
            <td>
              Round {result.round}: {result.matchup}
              <button
                className="notes-button"
                onClick={() => handleNotesModal(result.notes)}
              >
                NOTES
              </button>
            </td>
            <td>Wins: {result.wins}</td>
            <td>Losses: {result.losses}</td>
            <td>Draws: {result.draws}</td>
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

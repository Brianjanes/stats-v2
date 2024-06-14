// import React, { useState, useEffect, useCallback } from "react";
// import "../styles/RoundResultsTable.css"; // Assuming CSS file location
// import AddNotesModal from "./AddNotesModal"; // Ensure this is also converted/created

// const RoundResultsTable = ({ round, initialData, onRoundDataChange }) => {
//   const [data, setData] = useState(
//     initialData || {
//       matchup: "",
//       wins: 0,
//       losses: 0,
//       draws: 0,
//       notes: "",
//     }
//   );

//   const [isModalOpen, setModalOpen] = useState(false);

//   // Handles input change for matchup
//   const onChangeInput = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]:
//         name === "wins" || name === "losses" || name === "draws"
//           ? Number(value)
//           : value,
//     }));
//   };

//   // Incrementing wins, losses, or draws
//   const incrementNumber = (name) => {
//     if ((name === "wins" || name === "losses") && data[name] < 2) {
//       setData((prevData) => ({
//         ...prevData,
//         [name]: prevData[name] + 1,
//       }));
//     } else if (name === "draws" && data[name] < 1) {
//       setData((prevData) => ({
//         ...prevData,
//         [name]: prevData[name] + 1,
//       }));
//     }
//   };

//   // Decrementing wins, losses, or draws
//   const decrementNumber = (name) => {
//     if (data[name] > 0) {
//       setData((prevData) => ({
//         ...prevData,
//         [name]: prevData[name] - 1,
//       }));
//     }
//   };

//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleSaveNotes = (notes) => {
//     setData((prevData) => ({
//       ...prevData,
//       notes: notes,
//     }));
//     handleCloseModal(); // Close the modal after saving notes
//   };

//   // Memoize onRoundDataChange
//   const memoizedOnRoundDataChange = useCallback(onRoundDataChange, []);

//   // Effect to notify parent component when data changes
//   useEffect(() => {
//     memoizedOnRoundDataChange(round, { ...data });
//   }, [data, memoizedOnRoundDataChange, round]);

//   return (
//     <div className="table-div">
//       <table className="results-table">
//         <thead>
//           <tr>
//             <th>Round</th>
//             <th>Matchup</th>
//             <th>Wins</th>
//             <th>Losses</th>
//             <th>Draws</th>
//             <th>Notes</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{round}</td>
//             <td>
//               <input
//                 className="text-input"
//                 name="matchup"
//                 value={data.matchup}
//                 type="text"
//                 onChange={onChangeInput}
//               />
//             </td>
//             <td>
//               <div className="plus-minus-input-div">
//                 <button
//                   className="minus-button"
//                   onClick={() => decrementNumber("wins")}
//                 >
//                   -
//                 </button>
//                 <div className="number-display">{data.wins}</div>
//                 <button
//                   className="plus-button"
//                   onClick={() => incrementNumber("wins")}
//                 >
//                   +
//                 </button>
//               </div>
//             </td>
//             <td>
//               <div className="plus-minus-input-div">
//                 <button
//                   className="minus-button"
//                   onClick={() => decrementNumber("losses")}
//                 >
//                   -
//                 </button>
//                 <div className="number-display">{data.losses}</div>
//                 <button
//                   className="plus-button"
//                   onClick={() => incrementNumber("losses")}
//                 >
//                   +
//                 </button>
//               </div>
//             </td>
//             <td>
//               <div className="plus-minus-input-div">
//                 <button
//                   className="minus-button"
//                   onClick={() => decrementNumber("draws")}
//                 >
//                   -
//                 </button>
//                 <div className="number-display">{data.draws}</div>
//                 <button
//                   className="plus-button"
//                   onClick={() => incrementNumber("draws")}
//                 >
//                   +
//                 </button>
//               </div>
//             </td>
//             <td>
//               <button className="notes-button" onClick={handleOpenModal}>
//                 Add Notes
//               </button>
//               {isModalOpen && (
//                 <AddNotesModal
//                   onSaveNotes={handleSaveNotes}
//                   onClose={handleCloseModal}
//                 />
//               )}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RoundResultsTable;

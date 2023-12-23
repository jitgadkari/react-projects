import React, { useState } from "react";


export default function GameBoard({ squareClickHandle, gameTurns,gameBoard}) {
  //     const [gameBoard,setGameBoard]=useState(initialBoard);

  //     const squareClickHandle=(rowIndex,colIndex)=>{
  //         setGameBoard((prevGameBoard)=>{
  //               let updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //                 updatedGameBoard[rowIndex][colIndex]=activePlayer;
  //                 return updatedGameBoard;
  //           })
  //           changeActivePlayer()
  //     }
    // console.log(gameTurns);
//   let gameBoard = [...initialBoard.map((innerArray) => [...innerArray])];
//   for (const gameTurn of gameTurns) {
//     let { square, currentPlayer } = gameTurn;
//     let { row, col } = square;
//     gameBoard[row][col] = currentPlayer;
//   }
  return (
    <div className="w-1/2 h-1/2  mx-auto">
      <ol className=" w-[25%] h-[25%] ">
        {gameBoard.map((row, rowIndex) => {
          return (
            <li className="flex justify-evenl text-center " key={rowIndex}>
              {row.map((col, colIndex) => (
                <li
                  key={colIndex}
                  className="w-full h-full border bg-yellow-500 pointer"
                  onClick={() => squareClickHandle(rowIndex, colIndex)}
                >
                  <button
                    className="w-1/2 h-1/2  bg-yellow-500 pointer"
                    disabled={col !== null} 
                  >
                    {col}
                  </button>
                </li>
              ))}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

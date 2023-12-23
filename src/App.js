import logo from './logo.svg';
import './App.css';
import Player from './Components/Player';
import GameBoard from './Components/GameBoard';
import { useState } from 'react';
import Log from './Components/Log';
import { winningCombinations } from '../src/Components/winningCombination';
import GameOver from './Components/GameOver';
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveWinner(gameBoard, players) {
  let winner;
  for (const winningCombo of winningCombinations) {
    let firstSquareCheck = gameBoard[winningCombo[0].row][winningCombo[0].column]
    let secondSquareCheck = gameBoard[winningCombo[1].row][winningCombo[1].column]
    let thirdSquareCheck = gameBoard[winningCombo[2].row][winningCombo[2].column]


    if (firstSquareCheck &&
      firstSquareCheck === secondSquareCheck &&
      firstSquareCheck === thirdSquareCheck) {
      if (firstSquareCheck == players[0].symbol) {
        winner = players[0].playerName;
      } else if (firstSquareCheck == players[1].symbol) {
        winner = players[1].playerName;

      }
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialBoard.map((innerArray) => [...innerArray])];
  for (const gameTurn of gameTurns) {
    let { square, currentPlayer } = gameTurn;
    let { row, col } = square;
    gameBoard[row][col] = currentPlayer;
  }
  return gameBoard;
}

const players = [{
  playerName: "player1",
  symbol: "X"
},
{
  playerName: "player2",
  symbol: "O"
},
]
function App() {
  // const [activePlayer,setActivePlayer]=useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [currentPlayers, setCurrentPlayers] = useState(players)
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = (gameTurns.length == 9 && !winner)


  const handlePlayerNameChange = (name, symbol) => {
    setCurrentPlayers((prevPlayers) => {
      let updatedPlayers = [...prevPlayers];
      let index;
      if (symbol == "X") {
        index = 0;
      } else {
        index = 1
      }
      updatedPlayers[index].playerName = name;
      return updatedPlayers;
    })
  }
  const changeActivePlayer = (rowIndex, colIndex) => {
    // setActivePlayer((prevPlayer)=> prevPlayer=="X"?"O":"X");
    setGameTurns((prevGameTurn) => {
      let activePlayer = "X";
      if (prevGameTurn.length > 0 && prevGameTurn[0].currentPlayer == "X") {
        activePlayer = "O";
      }
      let updatedTurn = [{ square: { row: rowIndex, col: colIndex }, currentPlayer: activePlayer }, ...prevGameTurn]
      return updatedTurn
    })


  }


  return (
    <>
      <div className=''>
        <Player name={currentPlayers[0].playerName} symbol={currentPlayers[0].symbol} handlePlayerNameChange={handlePlayerNameChange} />
        <Player name={currentPlayers[1].playerName} symbol={currentPlayers[1].symbol} handlePlayerNameChange={handlePlayerNameChange} />
      </div>
      {!winner &&
        <div>
          <GameBoard squareClickHandle={changeActivePlayer} gameTurns={gameTurns} gameBoard={gameBoard} />
        </div>
      }
      <div>
        <Log gameTurns={gameTurns} />
      </div>
      <div>
        {winner && <GameOver winner={winner} setGameTurns={setGameTurns}/>}
        {hasDraw && <GameOver hasDraw={hasDraw} setGameTurns={setGameTurns} />}
      </div>
    </>
  );
}

export default App;

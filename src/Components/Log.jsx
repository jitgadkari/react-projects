import React from 'react'

export default function Log({gameTurns}) {
//    for (const gameTurn of gameTurns) {
//        let{square,currentPlayer}=gameTurn;
//        let {row,col}=square;
//    }
console.log(gameTurns)
let gameBoardTurns=[...gameTurns];
  return (
    <div className='w-1/2 h-1/2 mx-auto text-center'>
        {gameBoardTurns.map((gameTurn)=> (<h1 key={`${gameTurn.square.row}${gameTurn.square.col}`}>{gameTurn.currentPlayer} selected {gameTurn.square.row}  {gameTurn.square.col}</h1>))}
    </div>
  )
}

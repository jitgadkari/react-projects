import React from "react";

export default function GameOver({ winner, hasDraw, setGameTurns }) {
  function restartHandler() {
    setGameTurns([]);
  }
  return (
    <>
      <div className="text-center">
        {winner && <div>GameOver the winner is {winner}</div>}
        {hasDraw && <div>GameOver Its a Draw</div>}
        <button onClick={restartHandler}>Restart</button>
      </div>
    </>
  );
}

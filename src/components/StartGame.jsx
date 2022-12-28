import React from "react";

function StartGame({ handleClick }) {
  return (
    <div className="window">
      <div className="start-game">
        <h1>Simple quiz game</h1>
        <p className="description">
          Questions have been taken from an{" "}
          <a href="https://opentdb.com/api_config.php" target="_blank">
            api
          </a>
        </p>
        <button onClick={handleClick}>Start quiz</button>
      </div>
    </div>
  );
}

export default StartGame;

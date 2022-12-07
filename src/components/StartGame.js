import React from "react";  

function StartGame() {

    return (
        <div className="window">
            <h1>Simple quiz game</h1>
            <p className="description">Questions have been taken from an <a href="https://opentdb.com/api_config.php" target="_blank">api</a></p>
            <button>Start quiz</button>
        </div>
    )
};

export default StartGame;
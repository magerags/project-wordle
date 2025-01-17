import React, { useEffect } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  useEffect(() => {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }

    if (guesses.includes(answer)) {
      setGameStatus("won");
    }
  }, [guesses]);

  return (
    <>
      {gameStatus === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {gameStatus === "lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
      <GuessList guesses={guesses} answer={answer} />
      {gameStatus === "running" && <GuessInput setGuesses={setGuesses} />}
    </>
  );
}

export default Game;

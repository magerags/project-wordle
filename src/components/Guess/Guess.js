import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const letters = guess ? guess.split("") : Array(5).fill("");

  const checkedGuess = guess ? checkGuess(guess, answer) : null;

  return (
    <div className="guess">
      {letters.map((letter, index) => (
        <span key={index} className={`cell ${checkedGuess?.[index]?.status}`}>
          {letter}
        </span>
      ))}
    </div>
  );
}

export default Guess;

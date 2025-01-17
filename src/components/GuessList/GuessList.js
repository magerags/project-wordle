import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ guesses, answer }) {
  const range = [...Array(NUM_OF_GUESSES_ALLOWED).keys()];

  return (
    <div className="guess-results">
      {range.map((index) => (
        <Guess key={index} guess={guesses[index]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessList;

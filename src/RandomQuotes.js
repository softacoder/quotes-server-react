import React, { useState } from "react";

const RandomQuotes = ({ data }) => {
  const [randomQuote, setRandomQuote] = useState("");

  const pickRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuoteData = data[randomIndex];
    setRandomQuote(randomQuoteData);
  };

  return (
    <div className="random-div">
      {
        <div className="result-random">
          <h2>{randomQuote.quote}</h2>
          <p>author: {randomQuote.author}</p>
        </div>
      }
      <div>
        <button onClick={pickRandomQuote} className="btn">
          Get Random Quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuotes;

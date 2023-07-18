import React, { useState } from "react";
import RandomQuotes from "./RandomQuotes";

// TESTING 12
const DisplayQuotes = ({ data }) => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState([]);

  const searchForQuotes = () => {
    const searchInput = text.toLowerCase();
    const searchResult = data.filter((quote) => {
      return quote.quote.toLowerCase().includes(searchInput);
    });
    setSearch(searchResult);
  };

  const handelChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h3>
        {search.map((quote, index) => {
          return (
            <div className="search-block">
              <h3 key={index}> {quote.quote}</h3>
              <p key={index}> author: {quote.author}</p>
            </div>
          );
        })}
      </h3>
      <div className="input-search">
        <input
          type="text"
          onChange={handelChange}
          placeholder="Search for Quotes...."
        />
        <button onClick={searchForQuotes} className="btn">
          Search
        </button>
      </div>
      <div className="btn-div">
        <RandomQuotes data={data} />
      </div>
    </div>
  );
};

export default DisplayQuotes;

import React, { useState } from "react";
import RandomQuotes from "./RandomQuotes";

const QuoteItem = ({ quote, author }) => (
  <div className="search-block">
    <h3>{quote}</h3>
    <p>author: {author}</p>
  </div>
);

const DisplayQuotes = ({ data }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchForQuotes = () => {
    const searchInput = searchText.toLowerCase();
    const searchResult = data.filter((quote) => {
      return quote.quote.toLowerCase().includes(searchInput);
    });
    setSearchResults(searchResult);
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <h3>
        {searchResults.map((quote, index) => (
          <QuoteItem key={index} quote={quote.quote} author={quote.author} />
        ))}
      </h3>
      <div className="input-search">
        <input
          type="text"
          value={searchText}
          onChange={handleChange}
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

// The code imports the required modules and components for building the React application.
// The useState hook is imported from React to manage state within the component, and the
// RandomQuotes component is imported, which presumably displays random quotes.

// QuoteItem component: The QuoteItem is a functional component that represents the structure
// of a single quote item. It takes two props, quote and author, and displays them within a
// div element with the class name "search-block". This component is used within the
// DisplayQuotes component to render each quote item.

// DisplayQuotes component: The DisplayQuotes component is a functional component that receives
// data as a prop. This data prop presumably contains an array of quotes with their
// respective authors.

// State variables: The component uses the useState hook to manage state variables: searchText:
// Stores the user input from the search input field. It is initialized as an empty string.
// searchResults: Stores the filtered quotes that match the search input. It is initialized
// as an empty array. searchForQuotes function: This function is responsible for handling the
// search functionality. When the user enters a search query, the searchForQuotes function is
// called. It converts the searchText to lowercase and then filters the data array based on whether the quote (from each element in the array) contains the searchInput. The filtered results are stored in the searchResults state variable.

// handleChange function: This function is called whenever the user types in the search input
// field. It updates the searchText state variable with the current value of the input field.
// Rendering: The component returns JSX elements for rendering: The h3 element displays the
// filtered searchResults. It maps over the searchResults array and renders each quote item
// using the QuoteItem component, passing the quote and author props to it. The input element
// is used for the search input field. It is controlled by the searchText state variable, meaning
// its value is set to searchText, and its onChange event is handled by the handleChange
// function. The button element triggers the search action when clicked. It calls the
// searchForQuotes function on click. The RandomQuotes component is rendered in a div with the
// class name "btn-div" and is passed the original data prop. This component presumably
// displays random quotes.

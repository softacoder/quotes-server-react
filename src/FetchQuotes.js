import React, { useState, useEffect } from "react";
import DisplayQuotes from "./DisplayQuotes";
import axios from "axios";
import Header from "./Header";

const FetchQuotes = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    try {
      const res = await axios.get(
        "https://jan-softa-quote-server.glitch.me/quotes"
      );
      setData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // You can add a loading spinner here
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if there's an error
  }

  return (
    <div>
      <Header />
      <DisplayQuotes data={data} />

      <div className="footer">
        <h1>Life is better in a Ferrari</h1>
      </div>
    </div>
  );
};

export default FetchQuotes;

// The code begins with import statements for various modules and components that are required
// to build the application. React: The primary library for building UI components in React.
// useState: A React hook that allows functional components to have state variables. useEffect:
// Another React hook used for handling side effects, such as API calls or subscriptions.
// DisplayQuotes: A custom component that displays the quotes based on the data passed to it.
// axios: A popular library used for making HTTP requests. Header: A custom component representing
// the header of the application. Function Component FetchQuotes: The FetchQuotes component is
// defined as a functional component. It serves as the main component of the application.

// State Variables: data: This state variable is used to store the quotes data fetched from
//the API. It is initialized with an empty array []. isLoading: This state variable is used to
// manage the loading state. It is set to true initially, indicating that the data is being
//fetched. error: This state variable is used to handle errors that might occur during the
// API request. It is set to null initially. Function fetchApi: This is an asynchronous
// function that makes an API call using the axios.get method to fetch quotes data from a
// specified URL. It uses try-catch to handle any errors that might occur during the API
// request. If the request is successful, the fetched data is stored in the data state
// variable. If there is an error, the error message is stored in the error state variable. Regardless of success or failure, the isLoading state variable is set to false to indicate that the data fetching process is complete.

// useEffect Hook: The useEffect hook is used to trigger the fetchApi function when the
// component is mounted ([] passed as the second argument, so it only runs once on mount).
// This way, the data is fetched as soon as the component is rendered.

// Conditional Rendering: isLoading and error are used for conditional rendering in the
// component. If the isLoading state is true, a loading message or spinner is shown. If there
// is an error, an error message is displayed. If neither isLoading nor error is true, the
// Header component is rendered, followed by the DisplayQuotes component, which receives the
// data state variable as a prop to display the fetched quotes. Footer: Finally, the component
// renders a simple div containing a footer message.

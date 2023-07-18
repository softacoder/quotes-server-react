import React, { useState, useEffect } from "react";
import DisplayQuotes from "./DisplayQuotes";
import axios from "axios";
import Header from "./Header";

const FetchQuotes = () => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    try {
      const res = await axios.get(
        "https://jan-softa-quote-server.glitch.me/quotes"
      );
      setData(res.data);
    } catch (Error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <Header />
      <DisplayQuotes data={data} />

      <div className="footer">
        <h1>
          You can’t fall if you don’t climb. But there’s no joy in living your
          whole life on the ground
        </h1>
      </div>
    </div>
  );
};

export default FetchQuotes;

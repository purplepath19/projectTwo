import React, { useEffect, useState } from "react";
import axios from "axios";

const DictionaryAPI = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}"
      );
      setData(response.data);
    } catch (error) {
      console.log("Error getting data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>

{data ? (
        <div>

            <h3> Dictionary </h3>
          <p>Word: {data.word}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    


    </div>
  );
};

export default DictionaryAPI;

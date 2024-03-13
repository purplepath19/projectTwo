import React, { useEffect, useState } from "react";
import axios from "axios";

const GuardianAPI = () => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("Trump"); //

  const fetchData = async () => {
    try {

      const response = await axios.get(`https://content.guardianapis.com/search?q=${query}&api-key=b2ddd51e-34ae-4690-94c9-ecf15d34e128`)
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
          <p>Guardian: </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GuardianAPI;


// Loop through - input & search 
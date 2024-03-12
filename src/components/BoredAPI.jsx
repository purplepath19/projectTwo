import React, { useEffect, useState } from "react";
import axios from "axios";

const BoredAPI = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://www.boredapi.com/api/activity/");
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
      <h3>Bored API: Let's find something to do</h3>
      {data ? (
        <div>
          <p>Activity: {data.activity}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BoredAPI;

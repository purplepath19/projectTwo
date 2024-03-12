import React, { useEffect, useState } from "react";
import axios from "axios";

const CoffeeAPI = () => {
  const [data1, setData1] = useState(null);

  const fetchData = async () => {
    try {
      const response1 = await axios.get(
        "https://coffee.alexflipnote.dev/random.json"
      );
      setData1(response1.data);
    } catch (error) {
      console.log("Error getting data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

//   return (
// <div> 
// <h3> Coffee API </h3>
// {data ? (
//     <div> 
// <p> Coffee image: {data.file} </p>
// </div>

// )}

//   )
}
export default CoffeeAPI;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticlePreview from "./ArticlePreview";

const GuardianAPI = () => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState(""); //An input for user
  const [inputValue, setInputValue] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://content.guardianapis.com/search?q=${query}&api-key=b2ddd51e-34ae-4690-94c9-ecf15d34e128&show-fields=all`
      );
      setData(response.data.response);
      console.log("Response", response.data);
    } catch (error) {
      console.log("Error getting data", error);
    }
  };

  // Handlers

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    setQuery(inputValue); //must fecth data here from the API
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [query]); //fetch data when input query changes?

  return (
    <>
    <div>
      {/* To be rendered on page */}
      <label htmlFor="queryInput"> What news do you want so see today? </label>

      {/* Search Input */}
      <input
        type="text"
        id="queryInput"
        value={inputValue}
        onChange={handleInputChange}
      />

      {/* Search button */}
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>

    {/* // Display data: MAP and a <li> element  */}

{

data && data.results.length > 0 && 

<>
{
data.results.map((result)=> {
  return (

    <ArticlePreview article={result.fields}/> 


  )
})

}
</>


}



</>

  );
};

export default GuardianAPI;

// Loop through - input & search

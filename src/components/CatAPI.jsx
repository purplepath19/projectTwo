import React, { useEffect, useState } from "react";
import axios from "axios"; 


const CatAPI = ({ isPreview })=> {

    const [data, setData] =  useState(null);
  
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_7hBcOLFMdbXt398OXl4SdLvh7iK1wCldRpDWo0cpg4nsUsQeHsMXget1FtkdRiIF'); 
            setData(response.data); 
        console.log('response', response.data);
        
        }catch (error) {
            console.log('Error getting data', error);
        }
    }

    useEffect(()=> {
        fetchData(); 
    }, []); 

 return (
    <div>
    {data ? (
      <div>
        <p>Random cat image: 
            <img src={data[0].url} className="cat-image" alt="Random cat" /></p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
};

export default CatAPI; 
import React, { useEffect, useState } from "react";
import axios from "axios"; 


const CatAPI = ()=> {

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
    <h3>Cat API: Random cat picture</h3>
    {data ? (
      <div>
        <p>Random cat image: 
            <div></div>
            <img src={data[0].url} className="cat-image" alt="Random cat" /></p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
};

export default CatAPI; 
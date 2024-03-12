// import React, { useEffect, useState } from "react";
// import axios from "axios"; 


// const DataContainer = ()=> {

//     const [data, setData] =  useState(null);
//     const [data2, setData2] = useState(null);
//     const [data3, setData3] = useState(null); 

//     const fetchData = async () => {
//         try {
//             const response1 = await axios.get('http://www.boredapi.com/api/activity/'); 
//             setData(response1.data); 
        
//             const response2 = await axios.get(''); 
//             setData2(response2.data2); 

//             const response3 = await axios.get(''); 
//             setData3(response3.data3); 
//         }catch (error) {
//             console.log('Error getting data', error);
//         }
//     }; 

//     useEffect(()=> {
//         fetchData(); 
//     }, []); 



// return (

//     <div> 
//         {/* Rendered data  */}
//        <h3> Rendered data below:  </h3>
//        {data && <p> Data 1: {data} </p> }

//     </div>
// );
// };

// export default DataContainer;
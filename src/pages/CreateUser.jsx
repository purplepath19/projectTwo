/**
 * @todo
 * - Create useEffect hook for user input submission
 * - use crud crud POST request on endpoint with /user resource
 * - onSuccess new user creation, navigate user to the UserProfile route
 */
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/user.context";
function CreateUser() {
  // state variable that will hold my data
//   const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
// Favorite button 
  const [isFavorite, setIsFavorite] =useState(false); 

  const {setUserName} = useContext(UserContext)
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    // remember to prevent default on form
    event.preventDefault();
    setLoading(true)
    try {
      // Data to be sent?
      const postData = {
        // make first and last names state vars
        username: username,
      };
// Use CrudCrud
      const response = await axios.post( "https://crudcrud.com/api/8c0aff5cc7544c858500321263df310d/user",
        // "http://localhost:5000/user",
        postData
      );
        console.log(response)
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="parent-container">
    <div className="form-container"> 
      <form onSubmit={handleSubmit}>
      <h3 className="hi-container"> HI THERE </h3>
      {/* add onChange event and update the username state */}
      {/* add name, id, placeholder attributes to your inputs */}
      {/* add label tags to the inputs */}
      <input className="input" onChange={handleInputChange} type="text" placeholder="username here" />
      <button className="button" type="submit">
        Submit
      </button>
<button className="fave-star" type="submit" >  </button>

      </form>
    </div>




{/* APIS */}
    <div className="api-container"> 
<Link to="/bored" className="bored">Bored</Link>
<Link to="/cats" className="cats">Cats</Link>
{/* <Link to="/dictionary" className="dictionary"> Dictionary</Link> */}
</div>

    </div>
  );
}

export default CreateUser;

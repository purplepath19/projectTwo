import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { apiMap } from "../utils/apiMapper";
import { USER_PATH } from "../utils/constants";
function CreateUser() {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    if (!event.target.checked) {
      setFavorites(
        favorites.filter((favorite) => favorite !== event.target.value)
      );
      return;
    }

    setFavorites([...favorites, event.target.value]);
  };

  const handleSubmit = async (event) => {
    // remember to prevent default on form
    event.preventDefault();
    setLoading(true);
    try {
      // Data to be sent?
      const postData = {
        username: username,
        favorites: favorites,
      };
      // Use CrudCrud
      const response = await axios.post(
        `${import.meta.env.VITE_CRUDCRUD_ENDPOINT}${USER_PATH}`,
        postData
      );
      console.log("crudcrud create user response", response);
      setUser(response.data);
      setLoading(false);
      navigate("/user-profile");
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
          <h3 className="hi-container"> Login </h3>
          <input
            className="input"
            onChange={handleInputChange}
            type="text"
            placeholder="@USERNAME"
          />
          {Object.entries(apiMap).map(([key, value]) => {
      

            return (
              <div key={key}>
                <label className="check">
                  <input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    className="checkbox"
                    name="option"
                    value={key}
                    checked={favorites.some((item) => item === key)}
                  />
                  {value.label}
                </label>
              </div>
            )
          })}

          <button disabled={username.length < 2} className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* APIS */}
      {/* <div className="api-container">
        <Link to="/apis/bored" className="bored">
          Bored
        </Link>
        <Link to="/apis/cat" className="cats">
          Cats
        </Link>
        <Link to="/apis/guardian" className="guardian">
          Guardian
        </Link>
      </div> */}
    </div>
  );
}

export default CreateUser;



/**
 * @todo
 *  create admin page
 *  make GET request on page load with useEffect to user resource
 * https://crudcrud.com/api/8c0aff5cc7544c858500321263df310d/users
 * print all users in user resource with a delete button on each
 * delete should remove the resource using crudcrud delete action
 * after successfuk delete, reGET the user resources and reprint 
 * updating in react.
 * 
 * 
 */
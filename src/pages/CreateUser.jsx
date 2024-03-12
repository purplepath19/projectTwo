import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { apiMap } from "../utils/apiMapper";
function CreateUser() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
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
        // make first and last names state vars
        username: username,
        favorites: favorites,
      };
      // Use CrudCrud
      const response = await axios.post(
        "https://crudcrud.com/api/8c0aff5cc7544c858500321263df310d/user",
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
          <h3 className="hi-container"> HI THERE </h3>
          <input
            className="input"
            onChange={handleInputChange}
            type="text"
            placeholder="username here"
          />
          {Object.entries(apiMap).map(([key, value]) => {
            // [["cat", {
            //     component: CatAPI,
            //     title: "Welcome to the Cat API.",
            //     description: "Random cat photos on click!",
            //     label: "Cat"
            // }],

            // ["bored", {
            //     component: BoredAPI,
            //     title: "Welcome to the Bored API.",
            //     description: "Random things to do when you get bored.",
            //     label: "Bored"
            // }]]

            return (
              <div key={key}>
                <label>
                  <input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    name="option"
                    value={key}
                  />
                  {value.label}
                </label>
              </div>
            )
          })}

          <button disabled={username.length < 2} className="button" type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* APIS */}
      <div className="api-container">
        <Link to="/apis/bored" className="bored">
          Bored
        </Link>
        <Link to="/apis/cat" className="cats">
          Cats
        </Link>
      </div>
    </div>
  );
}

export default CreateUser;

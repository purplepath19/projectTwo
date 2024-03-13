import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { apiMap } from "../utils/apiMapper";
import axios from "axios";
import { USER_PATH } from "../utils/constants";

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [favorites, setFavorites] = useState(user.favorites);
  //   Update favorites

  const handleCheckboxChange = (event) => {
    if (!event.target.checked) {
      setFavorites(
        favorites.filter((favorite) => favorite !== event.target.value)
      );
      return;
    }

    setFavorites([...favorites, event.target.value]);
  };

  const saveClickHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_CRUDCRUD_ENDPOINT}${USER_PATH}/${user._id}`,
        { username: user.username, favorites }
      );
      const resource = await axios.get(
        `${import.meta.env.VITE_CRUDCRUD_ENDPOINT}${USER_PATH}/${user._id}`
      );

      setUser(resource.data);
    } catch (error) {
      console.log("Error with PUT", error);
    }
  };

  return (
    <div className="api-styles-container">
      <h1 className="header">Welcome {user?.username}</h1>
      <p className="favorites">favorites: {user.favorites}</p>
      <p className="select">Select APIS:</p>

      {/* form */}
      <form onSubmit={saveClickHandler}>
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
{/* <button onClick={() => handleDelete(_id)>delete</button> */}
          return (
            <div key={key}>
              <label>
                <input
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  name="option"
                  value={key}
                  // checked={favorites.includes(key)}
                  checked={favorites.some((item) => item === key)}
                />
                {value.label}
              </label>

              {/* Save Button - Update */}
            </div>
          );
        })}
        <button className="save-button" type="submit">Save</button>
      </form>
      <ul></ul>
    </div>
  );
};

export default UserProfile;

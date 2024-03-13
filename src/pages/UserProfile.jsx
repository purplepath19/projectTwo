import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { apiMap } from "../utils/apiMapper";
import axios from "axios";

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [favorites, setFavorites] = useState(user.favorites);

  const handleCheckboxChange = (event) => {
    if (!event.target.checked) {
      setFavorites(
        favorites.filter((favorite) => favorite !== event.target.value)
      );
      return;
    }

    setFavorites([...favorites, event.target.value]);
  };

  const saveClickHandler = async () => {
    try {
      const response = await axios.put(
        `https://crudcrud.com/api/8c0aff5cc7544c858500321263df310d/user/${user._id}`,
        // { favorites }
      );
      setFavorites([]);
    } catch (error) {
      console.log("Error with PUT", error);
    }
  };

  // create save button and onClickHandler that UPDATES the
  // crud crud object with new favorites
  // user.favorites = favorites;
  // onClickHandler will be a try/catch that updates with the new
  // user favorites.
  // when update response is successful, update the context user
  // with that response. setUser(response.data)

  return (
    <div>
      <h1>Welcome {user?.username}</h1>
      <p>favorites {user.favorites}</p>
      <p>Select APIS:</p>
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
                checked={favorites.some((item) => item === key)}
              />
              {value.label}
            </label>

            {/* Save Button - Update */}
            <button className="save-button" type="submit" onClick={saveClickHandler}>
              SAVE
            </button>
          </div>
        );
      })}
      <ul></ul>
    </div>
  );
};

export default UserProfile;

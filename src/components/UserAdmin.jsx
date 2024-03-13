import { useEffect, useState } from "react";
import axios from "axios";
import { USER_PATH } from "../utils/constants";

const UserAdmin = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_CRUDCRUD_ENDPOINT}${USER_PATH}`
      );
      setData(response.data);
      console.log("GET RESPONSE", response.data);
    } catch (error) {
      console.log("Error with GET request", error);
    }
  };

  //   DELETE USER
  const deleteData = async (userId) => {
    //User ID?
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_CRUDCRUD_ENDPOINT}${USER_PATH}/${userId}`
      );
      console.log("DELETE RESPONSE", response.data);
      // fetch data again without the deleted response??
      fetchData();
    } catch (error) {
      console.log("Error with DELETE request", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="user-admin"> User Admin: </h1>

      {/* DATA to be rendered must be a list - map() */}
      {data && (
        <ul>
          {data.map((user) => {
            return (
              <li className="list-items" key={user._id}>
                <p> User: {user.username} </p>
                <button className="button" onClick={() => deleteData(user._id)}> Delete </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default UserAdmin;

// onClick={() => handleClick("234345345")}

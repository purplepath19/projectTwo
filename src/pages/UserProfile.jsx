import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
    const { user } = useContext(UserContext)
 return (
    <div>
        <h1>Welcome { user?.username }</h1>
        <p>favorites { user.favorites }</p>
        <p>Select APIS:</p>
        <ul>
            {/* 
            Add all apis available in apiMap with checkbox inputs that update 
            the favorites array through onChange event with crudcrud UPDATE request
            and then use that request response to update the UserContext user 
            with the setUser function

            Show checked checkboxes on previously selected apis 
            
            */}
            {/* test code for checked checkboxes <input type="checkbox" value="what" checked={user.favorites.some((item) => item === parentItem)} /> */}
        </ul>
    </div>
 )
}

export default UserProfile; 
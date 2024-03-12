import { createContext, useState } from "react";

export const UserContext = createContext()

export const  UserProvider = ({children}) =>  {
    const [user, setUser] = useState(null)
    
    const setUserName = (name) => {
        setUser(name)
    }

    return (
        <UserContext.Provider value={[user, setUserName]}>
            {children}
        </UserContext.Provider>
    )
}

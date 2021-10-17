import React, {useState, createContext} from "react";

export const UserList = createContext();

export const UserListProvider = props => {

    const [User,setUser] = useState([]);

    return (
        <UserList.Provider value={User, setUser}>
            {props.children}
        </UserList.Provider>
    )
};
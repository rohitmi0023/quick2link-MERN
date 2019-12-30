import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const UserProfileContext = createContext();

export const UserProfileProvider = props => {
    const [userInfo, setUserInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getUserInfo = () => {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": `${token}`
            }
        };
        Axios.get("/api/auth", config).then(res => {
            setUserInfo([res.data]);
        });
    };
    useEffect(() => {
        getUserInfo();
    }, []);
    return (
        <UserProfileContext.Provider
            value={[userInfo, setUserInfo, isLoading, setIsLoading]}
        >
            {props.children}
        </UserProfileContext.Provider>
    );
};

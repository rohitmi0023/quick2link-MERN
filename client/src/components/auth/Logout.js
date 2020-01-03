import React, { useContext, Fragment, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { UserProfileContext } from "./protectedRoutes/Home/UserProfileContext";

const Logout = () => {
    const [setUserInfo] = useContext(UserProfileContext);
    localStorage.removeItem("token");
    const handleSubmit = () => {
        setUserInfo([]);
    };
    return <button onClick={handleSubmit}>Log Out</button>;
};

export default Logout;

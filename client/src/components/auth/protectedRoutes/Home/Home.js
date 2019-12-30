import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import AuthNavBar from "../../../layout/AuthNavBar";
import UserProfile from "./UserProfile";
import { UserProfileProvider } from "./UserProfileContext";
// import Axios from 'axios';

// const jwt_decode = require('jwt-decode')

const Home = props => {
    if (props.isAuth === false) {
        return <Redirect to="/forbidden" />;
    }
    return (
        <UserProfileProvider>
            <Fragment>
                <AuthNavBar />
                <UserProfile />
            </Fragment>
        </UserProfileProvider>
    );
};

export default Home;

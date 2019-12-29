import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import AuthNavBar from "../../../layout/AuthNavBar";
import "./index.css";
import SocialForm from "./SocialForm";
import SocialList from "./SocialList";
import { SocialProvider } from "./SocialContext";

const Social = props => {
    if (props.isAuth === false) {
        return <Redirect to="/forbidden" />;
    }
    return (
        <SocialProvider>
            <Fragment>
                <AuthNavBar />
                <SocialForm />
                <SocialList />
            </Fragment>
        </SocialProvider>
    );
};

export default Social;

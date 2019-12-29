import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import AuthNavBar from "../../../layout/AuthNavBar";
import "./index.css";
import SportsForm from "./SportsForm";
import SportsList from "./SportsList";
import { SportsProvider } from "./SportsContext";

const Sports = props => {
    if (props.isAuth === false) {
        return <Redirect to="/forbidden" />;
    }
    return (
        <SportsProvider>
            <Fragment>
                <AuthNavBar />
                <SportsForm />
                <SportsList />
            </Fragment>
        </SportsProvider>
    );
};

export default Sports;

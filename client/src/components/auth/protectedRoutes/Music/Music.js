import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import AuthNavBar from "../../../layout/AuthNavBar";
import "./index.css";
import MusicForm from "./MusicForm";
import MusicList from "./MusicList";
import { MusicProvider } from "./MusicContext";

const Music = props => {
    if (props.isAuth === false) {
        return <Redirect to="/forbidden" />;
    }
    return (
        <MusicProvider>
            <Fragment>
                <AuthNavBar />
                <MusicForm />
                <MusicList />
            </Fragment>
        </MusicProvider>
    );
};

export default Music;

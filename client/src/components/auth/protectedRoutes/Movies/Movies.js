import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import AuthNavBar from "../../../layout/AuthNavBar";
import "./index.css";
import MoviesForm from "./MoviesForm";
import MoviesList from "./MoviesList";
import { MoviesProvider } from "./MoviesContext";

const Movies = props => {
    if (props.isAuth === false) {
        return <Redirect to="/forbidden" />;
    }
    return (
        <MoviesProvider>
            <Fragment>
                <AuthNavBar />
                <MoviesForm />
                <MoviesList />
            </Fragment>
        </MoviesProvider>
    );
};

export default Movies;

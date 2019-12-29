import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const SportsContext = createContext();

export const SportsProvider = props => {
    const [sportsList, setSportsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getList = async () => {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": `${token}`
            }
        };
        Axios.get("/api/sports", config)
            .then(res =>
                res.data[0].lists.map(list => ({
                    _id: `${list._id}`,
                    link: `${list.link}`,
                    linkName: `${list.linkName}`
                }))
            )
            .then(sportsList => {
                setSportsList(sportsList);
            })
            .then(setIsLoading(false))
            .catch(err => console.log(err.message));
    };
    useEffect(() => {
        getList();
    }, []);
    return (
        <SportsContext.Provider
            value={[sportsList, setSportsList, isLoading, setIsLoading]}
        >
            {props.children}
        </SportsContext.Provider>
    );
};

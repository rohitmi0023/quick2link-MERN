import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const MusicContext = createContext();

export const MusicProvider = props => {
    const [musicList, setMusicList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getList = async () => {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": `${token}`
            }
        };
        Axios.get("/api/music", config)
            .then(res => {
                if (Boolean(res)) {
                    setIsLoading(false);
                }
                return res.data[0].lists.map(list => ({
                    _id: `${list._id}`,
                    link: `${list.link}`,
                    linkName: `${list.linkName}`
                }));
            })
            .then(musicList => {
                setMusicList(musicList);
            });
        // .catch(err => console.log(err.message));
    };
    useEffect(() => {
        getList();
    }, []);
    return (
        <MusicContext.Provider
            value={[musicList, setMusicList, isLoading, setIsLoading]}
        >
            {props.children}
        </MusicContext.Provider>
    );
};

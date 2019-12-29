import React, { Fragment, useContext } from "react";
import "./musicList.css";
import { Card, CardImg, CardDeck, CardLink, Spinner } from "reactstrap";
import { MusicContext } from "./MusicContext";

const MusicList = () => {
    const [musicList, setMusicList, isLoading, setIsLoading] = useContext(
        MusicContext
    );
    return (
        <Fragment>
            <h2 className="heading">Music Lists</h2>
            {isLoading ? (
                <Spinner
                    color="primary"
                    style={{
                        width: "4rem",
                        height: "4rem",
                        display: "block",
                        margin: "0 auto"
                    }}
                />
            ) : musicList.length ? (
                musicList.map(list => {
                    const { _id, link, linkName } = list;
                    return (
                        <CardDeck key={_id} className="musicListClass">
                            <Card
                                href={link}
                                style={{
                                    backgroundColor: "#333",
                                    borderColor: "#333"
                                }}
                            >
                                <CardImg
                                    className="musicListWord"
                                    width="100px"
                                    src={link + "/faviconn.ico"}
                                    alt={linkName.charAt(0).toUpperCase()}
                                />
                                <CardLink
                                    href={link}
                                    target="_blank"
                                    className="musicListLink"
                                >
                                    {linkName.length > 10
                                        ? linkName.slice(0, 8) + "..."
                                        : linkName}
                                </CardLink>
                            </Card>
                        </CardDeck>
                    );
                })
            ) : (
                <p
                    style={{
                        paddingTop: "30px",
                        textAlign: "center",
                        fontSize: "25px"
                    }}
                >
                    Nothing Added...
                </p>
            )}
        </Fragment>
    );
};

export default MusicList;

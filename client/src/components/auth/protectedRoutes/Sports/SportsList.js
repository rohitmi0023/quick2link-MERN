import React, { Fragment, useContext } from "react";
import "./sportsList.css";
import { Card, CardImg, CardDeck, CardLink, Spinner } from "reactstrap";
import { SportsContext } from "./SportsContext";

const SportsList = () => {
    const [sportsList, setSportsList, isLoading, setIsLoading] = useContext(
        SportsContext
    );
    return (
        <Fragment>
            <h2 className="heading">Sports Lists</h2>
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
            ) : sportsList.length ? (
                sportsList.map(list => {
                    const { _id, link, linkName } = list;
                    return (
                        <CardDeck key={_id} className="sportsListClass">
                            <Card
                                href={link}
                                style={{
                                    backgroundColor: "#333",
                                    borderColor: "#333"
                                }}
                            >
                                <CardImg
                                    className="sportsListWord"
                                    width="100px"
                                    src={link + "/faviconn.ico"}
                                    alt={linkName.charAt(0).toUpperCase()}
                                />
                                <CardLink
                                    href={link}
                                    target="_blank"
                                    className="sportsListLink"
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

export default SportsList;

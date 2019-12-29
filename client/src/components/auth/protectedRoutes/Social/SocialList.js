import React, { Fragment, useContext } from "react";
import "./socialList.css";
import { Card, CardImg, CardDeck, CardLink, Spinner } from "reactstrap";
import { SocialContext } from "./SocialContext";

const SocialList = () => {
    const [socialList, setSocialList, isLoading, setIsLoading] = useContext(
        SocialContext
    );
    return (
        <Fragment>
            <h2 className="heading">Social Lists</h2>
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
            ) : socialList.length ? (
                socialList.map(list => {
                    const { _id, link, linkName } = list;
                    return (
                        <CardDeck key={_id} className="socialListClass">
                            <Card
                                href={link}
                                style={{
                                    backgroundColor: "#333",
                                    borderColor: "#333"
                                }}
                            >
                                <CardImg
                                    className="socialListWord"
                                    width="100px"
                                    src={link + "/faviconn.ico"}
                                    alt={linkName.charAt(0).toUpperCase()}
                                />
                                <CardLink
                                    href={link}
                                    target="_blank"
                                    className="socialListLink"
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

export default SocialList;

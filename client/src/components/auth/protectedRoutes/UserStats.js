import React, { useContext, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { UserProfileContext } from "./Home/UserProfileContext";
import { Card, CardDeck, CardSubtitle } from "reactstrap";
import "./userStats.css";
import AuthNavBar from "../../layout/AuthNavBar";

const UserStats = props => {
    const [userInfo] = useContext(UserProfileContext);
    if (props.isAuth === false) {
        return <Redirect to="/forbidden" />;
    }
    return (
        <Fragment>
            <AuthNavBar />
            {userInfo.map(list => {
                const {
                    _id,
                    socialList,
                    moviesList,
                    sportsList,
                    musicList
                } = list;
                return (
                    <div key={_id}>
                        <br />
                        <h3
                            style={{
                                textAlign: "center",
                                borderBottom: "2px solid darkgrey",
                                paddingBottom: "10px"
                            }}
                        >
                            Facts regarding your links usage:
                        </h3>
                        <br />
                        <p style={{ fontSize: "20px", paddingLeft: "20px" }}>
                            Total no. of links saved : (before current log in)
                        </p>
                        <CardDeck className="dataInfoListClass">
                            <Card
                                style={{
                                    backgroundColor: "#333",
                                    borderColor: "#333"
                                }}
                            >
                                <CardSubtitle
                                    style={{
                                        fontSize: "70px",
                                        fontFamily: "Archivo Black",
                                        minWidth: "100px"
                                    }}
                                >
                                    {socialList.length}
                                </CardSubtitle>
                                Social
                            </Card>
                        </CardDeck>
                        <CardDeck className="dataInfoListClass">
                            <Card
                                style={{
                                    backgroundColor: "#333",
                                    borderColor: "#333"
                                }}
                            >
                                <CardSubtitle
                                    style={{
                                        fontSize: "70px",
                                        fontFamily: "Archivo Black",
                                        minWidth: "100px"
                                    }}
                                >
                                    {moviesList.length}
                                </CardSubtitle>
                                Movies
                            </Card>
                        </CardDeck>
                        <CardDeck className="dataInfoListClass">
                            <Card
                                style={{
                                    backgroundColor: "#333",
                                    borderColor: "#333"
                                }}
                            >
                                <CardSubtitle
                                    style={{
                                        fontSize: "70px",
                                        fontFamily: "Archivo Black",
                                        minWidth: "100px"
                                    }}
                                >
                                    {sportsList.length
                                        ? sportsList.length
                                        : `0`}
                                </CardSubtitle>
                                Sports
                            </Card>
                        </CardDeck>
                        <CardDeck className="dataInfoListClass">
                            <Card
                                style={{
                                    backgroundColor: "#333",
                                    borderColor: "#333"
                                }}
                            >
                                <CardSubtitle
                                    style={{
                                        fontSize: "70px",
                                        fontFamily: "Archivo Black",
                                        minWidth: "100px"
                                    }}
                                >
                                    {musicList.length}
                                </CardSubtitle>
                                Music
                            </Card>
                        </CardDeck>
                    </div>
                );
            })}
        </Fragment>
    );
};

export default UserStats;

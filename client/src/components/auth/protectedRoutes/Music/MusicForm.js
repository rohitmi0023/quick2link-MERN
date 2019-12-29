import React, { Fragment, useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import Axios from "axios";
import { MusicContext } from "./MusicContext";

const MusicForm = () => {
    const [formData, setFormData] = useState({
        linkName: "",
        link: ""
    });
    const [musicList, setMusicList] = useContext(MusicContext);
    const { linkName, link } = formData;
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    const token = localStorage.getItem("token");
    const handleSubmit = e => {
        e.preventDefault();
        const musicList = {
            linkName,
            link
        };
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`
                }
            };
            const body = JSON.stringify(musicList);
            Axios.post("/api/music", body, config)
                .then(
                    setMusicList(prev => [
                        ...prev,
                        { _id: Math.random(), link, linkName }
                    ])
                )
                .then(setFormData({ link: "", linkName: "" }));
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <Fragment>
            <br />
            <Form onSubmit={e => handleSubmit(e)} className="musicForm">
                <Row form>
                    <Col md={5}>
                        <FormGroup>
                            <Label for="LinkName">LinkName</Label>
                            <Input
                                type="text"
                                name="linkName"
                                placeholder="Ex. Spotify"
                                onChange={e => onChange(e)}
                                value={linkName}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <Label for="Link">Link</Label>
                            <Input
                                type="text"
                                name="link"
                                placeholder="Ex. https://www.spotify.com/"
                                onChange={e => onChange(e)}
                                value={link}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Button>Add</Button>
            </Form>
        </Fragment>
    );
};

export default MusicForm;

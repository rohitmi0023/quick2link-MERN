import React, { Fragment, useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import Axios from "axios";
import { SportsContext } from "./SportsContext";

const SportsForm = () => {
    const [formData, setFormData] = useState({
        linkName: "",
        link: ""
    });
    const [sportsList, setSportsList] = useContext(SportsContext);
    const { linkName, link } = formData;
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    const token = localStorage.getItem("token");
    const handleSubmit = e => {
        e.preventDefault();
        const sportsList = {
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
            const body = JSON.stringify(sportsList);
            Axios.post("/api/sports", body, config)
                .then(res => {
                    console.log(res.data.lists[res.data.lists.length - 1]._id);
                    const newId = res.data.lists[res.data.lists.length - 1]._id;
                    setSportsList(prev => [
                        ...prev,
                        { _id: newId, link, linkName }
                    ]);
                })
                .then(setFormData({ link: "", linkName: "" }));
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <Fragment>
            <br />
            <Form onSubmit={e => handleSubmit(e)} className="sportsForm">
                <Row form>
                    <Col md={5}>
                        <FormGroup>
                            <Label for="LinkName">LinkName</Label>
                            <Input
                                type="text"
                                name="linkName"
                                placeholder="Ex. Star Sports"
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
                                placeholder="Ex. http://www.foxsportsasia.com/"
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

export default SportsForm;

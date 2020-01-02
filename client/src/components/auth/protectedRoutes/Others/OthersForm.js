import React, { useState, useContext } from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Alert
} from "reactstrap";
import Axios from "axios";
import { OthersContext } from "./OthersContext";

const OthersForm = () => {
    const [formData, setFormData] = useState({
        linkName: "",
        link: ""
    });
    const [handleErrors, setHandleErrors] = useState([]);
    const [othersList, setOthersList] = useContext(OthersContext);
    const { linkName, link } = formData;
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    const token = localStorage.getItem("token");
    const handleSubmit = e => {
        e.preventDefault();
        const othersListForm = {
            linkName,
            link
        };
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": `${token}`
            }
        };
        const body = JSON.stringify(othersListForm);
        Axios.post("/api/others", body, config)
            .then(res => {
                console.log(res.data.lists[res.data.lists.length - 1]._id);
                const newId = res.data.lists[res.data.lists.length - 1]._id;
                setOthersList([...othersList, { _id: newId, link, linkName }]);
            })
            .then(setFormData({ link: "", linkName: "" }))
            .catch(err => {
                console.log(err);
                if ((err.response.status = 400)) {
                    const { data } = err.response;
                    const errorMsgs = data.map(list => {
                        const { errors } = list;
                        return errors;
                    });
                    console.log(errorMsgs[0][0]);
                    setHandleErrors([errorMsgs[0][0].msg]);
                }
            });
    };
    return (
        <div className="container">
            <br />
            <br />
            <Alert
                color="warning"
                style={{
                    maxWidth: "350px",
                    backgroundColor: "black",
                    color: "white"
                }}
            >
                {handleErrors.length
                    ? handleErrors
                    : `Invalid credentials will be displayed here`}
            </Alert>
            <Form onSubmit={e => handleSubmit(e)} className="socialForm">
                <Row form>
                    <Col md={5}>
                        <FormGroup>
                            <Label for="LinkName">LinkName</Label>
                            <Input
                                type="text"
                                name="linkName"
                                placeholder="Ex. XYZ"
                                onChange={e => onChange(e)}
                                value={linkName}
                                style={{
                                    backgroundColor: "black",
                                    color: "white"
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <Label for="Link">Link</Label>
                            <Input
                                type="text"
                                name="link"
                                placeholder="Ex. https://www.XYZ.com/"
                                onChange={e => onChange(e)}
                                value={link}
                                style={{
                                    backgroundColor: "black",
                                    color: "white"
                                }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Button>Add</Button>
            </Form>
        </div>
    );
};

export default OthersForm;

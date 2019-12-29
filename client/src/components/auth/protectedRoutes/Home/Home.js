import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import AuthNavBar from "../../../layout/AuthNavBar";
// import Axios from 'axios';

// const jwt_decode = require('jwt-decode')

const Home = props => {
    // const [details, setDetails] = useState({
    // name: null
    // })
    if (props.isAuth === false) {
        return <Redirect to="/forbidden" />;
    }
    // const onRender = () => {
    // const token = localStorage.getItem('token')
    // const userToken = jwt_decode(token)
    // console.log(userToken)
    // try {
    // 	const config = {
    // 		headers: {
    // 			'Content-Type': 'application/json',
    // 			'x-auth-token': `${token}`
    // 		}
    // 	}
    // 	Axios.get('/api/auth', config).then((res) => {
    // 		setDetails.name = res.data.name
    // 	})
    // } catch (err) {
    // 	console.log(err)
    // }

    return (
        <Fragment>
            <AuthNavBar />
            {/* <h2>Hello {details.map(nam => <h2>{nam.name}</h2>)}</h2> */}
            <h2>This page will be accessed by registered users only! </h2>
        </Fragment>
    );
};

export default Home;

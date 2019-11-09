import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AuthNavBar from '../../layout/AuthNavBar';
import '../../styles/social/index.css'
import Axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const Social = props => {
	const [formData, setFormData] = useState({
		linkName: '',
		link: ''
  });
  const [socialList, setSocialList] = useState({
    listLinkName: '',
    listLink: ''
  })
	if (props.isAuth === false) {
		return <Redirect to='/forbidden' />;
	}
  const {linkName, link} = formData
  const token = localStorage.getItem('token')
  const onChange = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = async e => {
    e.preventDefault()
    const socialList = {
      linkName,
      link
    }
    try {
      const config = {
				headers: {
          'Content-Type': 'application/json',
          'x-auth-token': `${token}`
				}
			};
      const body = JSON.stringify(socialList)
      const res = await Axios.post('/api/social', body, config)
      // setFormData({...setSocialList, listLinkName: list.[list]})
      console.log(res)
    } catch (err) {
      console.error(err);
    }
  }
  // useEffect(() => {
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-auth-token": `${token}`
  //       }
  //     }
  //     const socialList = await Axios.get('/api/social', config)
  //     const parseSocialList = JSON.parse(socialList)
  //     console.log(parseSocialList)
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).send('Server Error')
  //   }
  //   })
  // const getList = async e => {
    
  // }
	return (
		<Fragment>
		<AuthNavBar />
		<Form onSubmit={e => handleSubmit(e)} className='socialForm'>
       	<Row form>
            <Col md ={5}>
            <FormGroup>
           <Label for='LinkName'>LinkName</Label>
           <Input type='text' name='linkName' placeholder='Ex. Facebook' onChange={e => onChange(e)}/>
         </FormGroup>
         </Col>
         <Col md ={5}>
         <FormGroup>
           <Label for='Link'>Link</Label>
           <Input type='text' name='link' placeholder='Ex. https://www.facebook.com/' onChange={e => onChange(e)} />
         </FormGroup>
            </Col>
         </Row>
         <Button>Add</Button>
     	</Form>
       	<h2 className='heading'>Social Lists</h2>
      <ul>
        <li>
         </li>
      </ul>
		</Fragment>
)
};

export default Social;

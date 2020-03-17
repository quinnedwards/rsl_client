import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import Jumbotron from '../home/frontPage';

const Auth = (props) => {
    return(
        <Container className="auth-container">
            <br />
            <br />
            <br />
            <Jumbotron />

            <h3>A website built for finding local record stores around Indiana.</h3>
            <hr />
            <Row>
                <Col md="6">
                    <Signup updateToken={props.updateToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;
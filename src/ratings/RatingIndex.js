import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import RatingCreate from './RatingCreate'
import RatingTable from './RatingTable';

const RatingIndex = (props) => {
    const [ratings, setRatings] = useState([]);

    const fetchRatings = () => {
        fetch('http://localhost:3003/user/rating', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then( (res) => res.json())
        .then((logData) => {
            setRatings(logData)
        })
    }

    useEffect(() => {
        fetchRatings();
    }, [])


    return(
        <Container>
            <Row>
                <Col md="3">
                    <RatingCreate fetchRatings={fetchRatings} token={props.token}/>
                </Col>
                <Col md="9">
                    <RatingTable ratings={ratings} fetchRatings={fetchRatings}
                    token={props.token}/>
                </Col>
            </Row>
        </Container>
    )
}

export default RatingIndex;
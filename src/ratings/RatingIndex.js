import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import RatingCreate from './RatingCreate'
import RatingTable from './RatingTable';
import RatingEdit from './RatingEdit';
import APIURL from '../helpers/environment';


const RatingIndex = (props) => {
    const [ratings, setRatings] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [ratingToUpdate, setRatingToUpdate] = useState({});

    const fetchRatings = () => {
        fetch(`${APIURL}/api/rating/`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then( res => res.json())
        .then((logData) => {
            setRatings(logData.ratings)
        })
    }

    
    const editUpdateRating = (rating) => {
        setRatingToUpdate(rating);
        console.log(rating);
    }
    
    const updateOn = () => {
        setUpdateActive(true);
    }
    
    const updateOff = () => {
        setUpdateActive(false);
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
                    <RatingTable ratings={ratings} editUpdateRating={editUpdateRating} 
                    updateOn={updateOn} fetchRatings={fetchRatings} token={props.token}/>
                </Col>
                {updateActive ? <RatingEdit ratingToUpdate={ratingToUpdate}
                updateOff={updateOff} token={props.token} fetchRatings={fetchRatings}/> : <></>}
            </Row>
        </Container>
    )
}

export default RatingIndex;
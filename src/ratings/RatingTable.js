import React from 'react';
import {Table, Button} from 'reactstrap';
import APIURL from '../helpers/environment';

const RatingTable = (props) => {
    const deleteRating = (rating) => {
        fetch(`${APIURL}/api/rating/${rating.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchRatings())
    }

    const ratingMapper = () => {
        console.log(props.ratings);
        return props.ratings.map((rating, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{rating.id}</th>
                    <td>{rating.name}</td>
                    <td>{rating.description}</td>
                    <td>{rating.location}</td>
                    <td>
                        <Button color="success" onClick={() => {props.editUpdateRating(rating); props.updateOn()}}>Update</Button>
                        <Button color="secondary" onClick={() => {deleteRating(rating)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <>
        <h3>Stores</h3>
        <hr />
        <Table hover striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Store Name</th>
                    <th>Description</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {ratingMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default RatingTable;
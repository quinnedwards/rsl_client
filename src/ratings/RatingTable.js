import React from 'react';
import {Table, Button} from 'reactstrap';

const RatingTable = (props) => {
    const deleteRating = (rating) => {
        fetch(`http://localhost:3003/user/rating/${rating.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchRatings())
    }

    const ratingMapper = () => {
        return props.ratings.map((rating, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{rating.id}</th>
                    <td>{rating.user}</td>
                    <td>{rating.description}</td>
                    <td>{rating.location}</td>
                    <td>
                        <Button color="warning">Update</Button>
                        <Button color="danger">Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <>
        <h3>Rating Table</h3>
        <hr />
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>User</th>
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
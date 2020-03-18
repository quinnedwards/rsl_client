import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../helpers/environment';

const RatingEdit = (props) => {
    const [editDesc, setEditDesc] = useState(props.ratingToUpdate.description);
    const [editLoc, setEditLoc] = useState(props.ratingToUpdate.location);
    const [editName, setEditName] = useState(props.ratingToUpdate.name);

    const ratingUpdate = (event, rating) => {
        event.preventDefault();
        fetch(`${APIURL}/api/rating/${props.ratingToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({description: editDesc, location: editLoc, name: editName}),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: props.token
            })
        }) .then((res) => {
            props.fetchRatings();
            props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Log a Rating</ModalHeader>
            <ModalBody>
                <Form onSubmit={ratingUpdate} autoComplete="off">
                    <FormGroup>
                        <Label htmlFor="description">Edit Description:</Label>
                        <Input name="description" value={editDesc} onChange={(e) => setEditDesc(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="location">Edit Location:</Label>
                        <Input name="location" value={editLoc} onChange={(e) => setEditLoc(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="name">Edit Name:</Label>
                        <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Update the rating!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default RatingEdit;
import React from 'react';
import {Table} from 'reactstrap';
import APIURL from '../helpers/environment';

const StoreTable = (props) => {
    const deleteStore = (store) => {
        fetch(`${APIURL}/api/store/${store.id}`, {
            // method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: props.token
            })
        }).then( () => props.fetchStores())
    }

    const storeMapper = () => {
        console.log(props.stores);
        return props.stores.map((store, index) => {
             return(
                <tr key={index}>
                    <th scope="row">{store.id}</th>
                    <td>{store.storeName}</td>
                    <td>{store.address}</td>
                    <td>{store.location}</td>
                    <td>{store.phoneNumber}</td>
                    <td>{store.website}</td>
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
                    <th>Address</th>
                    <th>Location</th>
                    <th>Phone Number</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {storeMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default StoreTable;
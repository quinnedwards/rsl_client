import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import StoreTable from './StoreTable';
import APIURL from '../helpers/environment';

const StoreIndex = (props) => {
    const [stores, setStores] = useState('');

    const fetchStores = () => {
        fetch(`${APIURL}/api/store/`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                Authorization: props.token
            })
        }) .then( res => res.json())
        .then((storeData) => {
            setStores(storeData.stores)
        })
    }

    useEffect(() => {
        fetchStores();
    }, [])

    return(
        <Container>
            <Row>
                <Col md="12">
                    <StoreTable
                    stores={stores}
                    fetchStores={fetchStores}
                    token={props.token}/>
                    Hello
                </Col>
            </Row>
        </Container>
    )
}

export default StoreIndex;
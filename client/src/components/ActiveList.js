import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import ActiveItem from './ActiveItem';

const ActiveList = ({ activeRequests }) => {

    if (activeRequests.length === 0)
        return <p className="lead">No Requests</p>

    return <div className='collection'>
        {activeRequests.map(({ _id, name }) => <Link style={{ padding: '2rem' }} className="collection-item" to={`/request/${_id}`} key={_id}>{name}</Link>)}
    </div>
}


export default ActiveList

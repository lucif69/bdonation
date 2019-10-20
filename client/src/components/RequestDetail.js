import React from 'react';
import { connect } from 'react-redux';
import { changeShowForm } from '../actions/blood';

const RequestDetail = ({ request, changeShowForm }) => {
    const renderContent = () => {

        if (request) {
            const { _id, name, email, bloodgrp, address: { city, state, country }, status } = request;
            return (
                <div style={{
                    marginTop: '15px',
                    marginBottom: '15px',
                }}>

                    <div className="row">
                        <div className="col s3"><strong>Patient Name</strong>:</div>
                        <div className="col s3">{name}</div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col s3"><strong>Request ID</strong>:</div>
                        <div className="col s3">{_id}</div>




                        <small>Please store this ID track your request.</small>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col s3"><strong>Patient Email</strong>: </div>
                        <div className="col s3">{email}</div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col s3"><strong>Patient Blood Group</strong>: </div>
                        <div className="col s3">{bloodgrp}</div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col s3"><strong>Patient Address</strong>: </div>
                        <div className="col s3">{city}, {state}, {country}</div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col s3"><strong>Status</strong>: </div>
                        <div className="col s3">{status ? 'Donation Successful' : 'Awaiting Donation'}</div>
                    </div>

                </div>
            );
        }
        else return <div>Nothing here</div>
    }

    const btnStyles = {
        marginTop: '15px',
        marginBottom: '15px',
        padding: '0.2rem 2rem'
    };

    return (
        <div>
            <button
                style={btnStyles}
                className='btn red darken-4 '
                onClick={changeShowForm}
            >
                Back
      </button>

            <h4>Request Details</h4>

            {renderContent()}
        </div>
    );
};

export default connect(
    null,
    { changeShowForm }
)(RequestDetail);

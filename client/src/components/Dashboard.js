import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ActiveList from './ActiveList';
import { getActiveRequests } from '../actions/blood';

const Dashboard = ({ getActiveRequests, requests }) => {

  useEffect(() => {
    getActiveRequests();
  }, [])

  return (
    <div>
      <h4>Active Requests</h4>

      <ActiveList activeRequests={requests} />

    </div>
  );
};

const mapStateToProps = ({ blood: { requests } }) => ({ requests });

export default connect(mapStateToProps, { getActiveRequests })(Dashboard);

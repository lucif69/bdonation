import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeShowForm } from '../actions/blood';

import SearchForm from './SearchForm';
import Donors from './Donors';

const Search = ({ changeShowForm, blood: { donors, showForm } }) => {
  useEffect(() => {
    return () => {
      changeShowForm();
    };
  }, []);

  return showForm ? <SearchForm /> : <Donors donors={donors} />;
};

const mapStateToProps = ({ blood }) => ({ blood });

export default connect(
  mapStateToProps,
  { changeShowForm }
)(Search);

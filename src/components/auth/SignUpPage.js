import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';
import { signUpRequest, isUserExists } from '../../actions/auth';

class SignUpPage extends Component {
  render () {
    const { signUpRequest, isUserExists } = this.props;
    return (
      <Grid textAlign='left' centered>
        <Grid.Column width={ 8 }>
          <SignUpForm
            signUpRequest={ signUpRequest }
            isUserExists={ isUserExists }
            />
        </Grid.Column>
      </Grid>
    );
  }
}

SignUpPage.propTypes = {
  signUpRequest: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
}

export default connect (null,
  { signUpRequest, isUserExists }
)(SignUpPage);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import SignInForm from './SignInForm';
import { signInRequest, isUserExists } from '../../actions/auth';

class SignIn extends Component {
  render () {
    const { signInRequest, isUserExists } = this.props;
    return (
      <Grid textAlign='left' centered>
        <Grid.Column width={ 8 }>
          <SignInForm
            signInRequest={ signInRequest }
            isUserExists={ isUserExists }
          />
        </Grid.Column>
      </Grid>
    );
  }
}

SignIn.propTypes = {
  signInRequest: PropTypes.func.isRequired,
  isUserExists: PropTypes.func
}

export default connect(null, { signInRequest, isUserExists })(SignIn);

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import SignUpForm from './SignUpForm';

class SignUpPage extends Component {
  render () {
    return (
      <Grid textAlign='left' centered>
        <Grid.Column width={ 8 }>
          <SignUpForm />
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignUpPage;

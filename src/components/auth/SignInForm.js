import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Segment, Header, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { validateSignIn } from '../../lib/validateAuth';

class SignInForm extends Component {

  state={
    email: '',
    password: '',
    errors: '',
    isUserExists: false,
    redirect: false
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      errors: ''
    });
  }

  checkUserExists = event => {
    const email = event.target.value.trim();
    if (email !== '') {
      this.setState({ isUserExists: true })
      this.props.isUserExists(email)
        .then(() => (this.setState({ isUserExists: false })));
    }
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password, errors, valid } = validateSignIn(this.state.email, this.state.password);
    if (valid) {
      this.props.signInRequest({ email, password })
        .then((res) => {
          this.setState({ redirect: true });
        })
        .catch(error => {
          this.setState({ password: ''});
        });
    } else {
      this.setState({ errors });
    }
  }

  render () {
    const { errors, isUserExists, redirect, email, password } = this.state;

    const renderForm = (
      <Segment>
        <Form onSubmit={ this.onSubmit }>
        <Header size='large'>Sign In</Header>

        <Form.Field error={ !!errors.invalidEmail || isUserExists }>
          <label>Email{ !!errors.invalidEmail ? errors.invalidEmail : '' || isUserExists ? ' wasn\'t found' : '' }</label>
          <input
            onChange={ this.handleOnChange }
            onBlur={ this.checkUserExists }
            value={ email }
            name='email'
            type='text'
            placeholder='your email'
          />
        </Form.Field>
        <Form.Field error={ !!errors.passwordPresent }>
          <label>Password { errors.passwordPresent ? errors.passwordPresent : ''}</label>
          <input
            onChange={ this.handleOnChange }
            value={ password }
            name='password'
            type='password'
            placeholder='your password'
          />
        </Form.Field>

        <Button fluid disabled={ errors !== '' || isUserExists }>Sign In</Button>
      </Form>
      </Segment>
    );

    return (
      <div>
        { redirect ? <Redirect to='/products' /> : renderForm }
      </div>
    );
  }
}

SignInForm.propTypes={
  signInRequest: PropTypes.func.isRequired,
  isUserExists: PropTypes.func
}

export default SignInForm;

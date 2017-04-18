import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Form, Segment, Header, Button } from 'semantic-ui-react';
import { validateSignUp } from '../../lib/validateAuth';

class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: '',
    redirect: false,
    isUserExists: false
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
      this.setState({ isUserExists: false });
      this.props.isUserExists(email)
        .then(res => {
          this.setState({ isUserExists: true });
      });
    }
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password, errors, valid } = validateSignUp(this.state.email, this.state.password, this.state.passwordConfirmation)

    if (valid) {
      this.props.signUpRequest({ email, password });
      this.setState({ redirect: true });
    } else {
      this.setState({ errors });
    }
  }

  render () {
    const { isUserExists, errors, redirect, email, password, passwordConfirmation } = this.state;
    const renderForm = (
      <Segment>
        <Form success error onSubmit={ this.onSubmit }>
          <Header size='large'>Sign Up</Header>
          <Form.Field error={ !!errors.invalidEmail || isUserExists }>
            <label>Email { isUserExists ? ' is already in use' : '' || errors.invalidEmail ? ' must be valid' : '' }</label>
            <input
              onChange={ this.handleOnChange }
              onBlur={ this.checkUserExists }
              value={ email }
              name='email'
              type='text'
              placeholder='email@example.com'
              />
          </Form.Field>
          <Form.Field error={ !!errors.passwordLength }>
            <label>Password { !!errors.passwordLength ? ' must contain 8+' : '' }</label>
            <input
              onChange={ this.handleOnChange }
              value={ password }
              name='password'
              type='password'
              placeholder='8 +'
              />
          </Form.Field>

          <Form.Field error={ !!errors.confirmation  }>
            <label>{ errors.confirmation ? 'Passwords must match' : 'Password Confirmation' }</label>
            <input
              onChange={ this.handleOnChange }
              value={ passwordConfirmation }
              name='passwordConfirmation'
              type='password'
              />
          </Form.Field>

          <Button fluid disabled={ errors !== '' || isUserExists }>Sign Up</Button>
        </Form>
      </Segment>
    );

    return (
      <div>
        { redirect ? <Redirect to='/' /> : renderForm }
      </div>
    );
  }
}

SignUpForm.propTypes = {
  signUpRequest: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
}

export default SignUpForm;

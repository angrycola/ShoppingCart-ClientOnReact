import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Segment, Header, Button } from 'semantic-ui-react';

class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;
    this.props.signUpRequiest({ email, password });
  }

  render () {
    const { email, password, passwordConfirmation } = this.state;

    return (
      <Segment>
        <Form onSubmit={ this.onSubmit }>
          <Header size='large'>Sign Up</Header>
          <Form.Field>
            <label>Email</label>
            <input
              onChange={ this.handleOnChange }
              onBlur={ this.checkUserExists }
              value={ email }
              name='email'
              type='text'
              placeholder='email@example.com'
              />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              onChange={ this.handleOnChange }
              value={ password }
              name='password'
              type='password'
              placeholder='8 +'
            />
          </Form.Field>

          <Form.Field>
            <label>Password Confirmation</label>
            <input
              onChange={ this.handleOnChange }
              value={ passwordConfirmation }
              name='passwordConfirmation'
              type='password'
            />
          </Form.Field>

          <Button fluid>Sign Up</Button>
        </Form>
      </Segment>
    );
  }
}

SignUpForm.propTypes = {
  signUpRequiest: PropTypes.func.isRequired
}

export default SignUpForm;

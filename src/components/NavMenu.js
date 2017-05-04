import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signOutUser } from '../actions/auth';
import { Menu } from 'semantic-ui-react';
import SignUpPage from './auth/SignUpPage';
import SignInPage from './auth/SignInPage';

import ProductsPage from './products/ProductsPage';

class NavMenu extends Component {

  state = {}

  handleClick = (event, { name }) => {
    this.setState({ activeItem: name });
  }

  handleSignOut = (event, { name }) => {
    this.setState({ activeItem: name });
    this.props.signOutUser();
  }

  render() {
    const { activeItem } = this.state;
    const { auth } = this.props;

    const authed = (
      <Menu.Menu position='right'>
        <Menu.Item
          as={ Link }
          to='/signout'
          name='signout'
          active={ activeItem === 'signout' }
          onClick={ this.handleSignOut }>
            Sign Out
        </Menu.Item>
      </Menu.Menu>
    );

    const unauthed = (
      <Menu.Menu position='right'>
        <Menu.Item
          as={ Link }
          to='/signin'
          name='signin'
          active={ activeItem === 'signin' }
          onClick={ this.handleClick }>
            Sign In
        </Menu.Item>

        <Menu.Item
          as={ Link }
          to='/signup'
          name='signup'
          active={ activeItem === 'signup' }
          onClick={ this.handleClick }>
            Sign Up
        </Menu.Item>
      </Menu.Menu>
    );

    return (
      <div>
        <Menu>
          <Menu.Item
            as={ Link }
            to='/'
            name='browse'
            active={ activeItem === 'browse' }
            onClick={ this.handleClick }>
              App
        </Menu.Item>
        <Menu.Item
          as={ Link }
          to='/products'
          name='products'
          active={ activeItem === 'products' }
          onClick={ this.handleClick }>
            Products
        </Menu.Item>
        { auth.isAuthenticated ? authed : unauthed }
        </Menu>
        <Route path='/signup' component={ SignUpPage } />
        <Route path='/signin' component={ SignInPage } />
        <Route path='/products' component={ ProductsPage } />
      </div>
    );
  }
}

NavMenu.propTypes = {
  signOutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ auth: state.auth });

export default withRouter(connect(mapStateToProps, { signOutUser })(NavMenu));

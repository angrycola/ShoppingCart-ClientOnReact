import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import SignUpPage from './auth/SignUpPage';


class NavMenu extends Component {

  state = {}

  handleClick = (event, { name }) => {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu>
        <Menu.Item
          as={ Link }
          to='/'
          name='browse'
          active={ activeItem === 'browse' }
          onClick={ this.handleClick }
        >
          App
        </Menu.Item>

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
      </Menu>

      <Route path='/signup' component={ SignUpPage } />
      </div>
    );
  }
}


export default NavMenu;

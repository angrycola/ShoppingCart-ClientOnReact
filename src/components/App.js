import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import NavMenu from './NavMenu';

class App extends Component {
  render() {
    return (
      <Container>
        <NavMenu />
      </Container>
    );
  }
}

export default App;

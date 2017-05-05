import React from 'react';
import CartCard from './CartCard';
import PropTypes from 'prop-types';
import { Grid, Table, Header, Button, Icon } from 'semantic-ui-react';
import { Redirect} from 'react-router-dom';


class CartPage extends React.Component {

  state={
    redirect: false
  }

  toOrder = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.sendOrder({ items: this.props.cart.items, user: this.props.auth.user });
    } else {
      this.setState({ redirect: true });
    }
  }

  render () {
    const { cart } = this.props;
    const renderCart = () => cart.items.map(item => <CartCard key={ item._id } item={ item } />);
    const isEmpty = cart.items.length > 0;
    
    return (
      <div>
        { isEmpty && <Grid centered>
        { this.state.redirect && <Redirect to='/signin' push /> }
        <Grid.Column width={ 12 }>
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Qty</Table.HeaderCell>
                <Table.HeaderCell>Total</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              { renderCart() }
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell />
                <Table.HeaderCell />
                <Table.HeaderCell><Header> { cart.totalPrice }</Header></Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>

          <Button.Group floated='right' size='large'>
            <Button onClick={ () => history.back() }>Back</Button>
            <Button animated='fade' onClick={ () => this.toOrder() }>
              <Button.Content visible>
                Send this order
              </Button.Content>
              <Button.Content hidden>
                <Icon name='right arrow' />
              </Button.Content>
            </Button>
          </Button.Group>

        </Grid.Column>
      </Grid>
        }
      </div>
    );
  }
}

CartPage.propTypes = {
  cart: PropTypes.object.isRequired
}

export default CartPage;

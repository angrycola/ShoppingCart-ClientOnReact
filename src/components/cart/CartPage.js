import React from 'react';
import CartCard from './CartCard';
import PropTypes from 'prop-types';
import { Grid, Table, Header, Button, Icon } from 'semantic-ui-react';


class CartPage extends React.Component {

  render () {
    const { cart } = this.props;
    const renderCart = () => cart.items.map(item => <CartCard key={ item._id } item={ item } />);

    return (
      <Grid centered>
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
        </Grid.Column>
      </Grid>
    );
  }
}

CartPage.propTypes = {
  cart: PropTypes.object.isRequired
}

export default CartPage;

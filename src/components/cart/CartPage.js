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
          <Table stackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Qty</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
              { renderCart() }
            <Table.Body>
              <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell textAlign='right'><Header>Total: { cart.totalPrice }</Header></Table.Cell>
              </Table.Row>
            </Table.Body>
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

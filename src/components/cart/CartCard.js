import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addToCart, decreaseOne } from '../../actions/cart';


class CartCard extends Component {

  render () {
    const { item, addToCart, decreaseOne } = this.props;

    return (
      <Table.Row>
        <Table.Cell>{ item.title }</Table.Cell>
        <Table.Cell>{ item.price }</Table.Cell>
        <Table.Cell textAlign='center'>
          <Button
            size='mini'
            circular
            icon
            onClick={ () => decreaseOne(item) }>
              <Icon name='minus' />
          </Button>
            &nbsp; { item.qty } &nbsp;
          <Button
            size='mini'
            circular
            icon onClick={ () => addToCart(item) }>
              <Icon name='plus' />
          </Button>
        </Table.Cell>
        <Table.Cell>{ item.qty * item.price }</Table.Cell>
      </Table.Row>
    );
  }
}

  CartCard.propTypes = {
    item: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    decreaseOne: PropTypes.func.isRequired
  }


export default connect (null, { addToCart, decreaseOne })(CartCard);

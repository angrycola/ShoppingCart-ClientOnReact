import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

class CartCard extends Component {

  render () {
    const { item } = this.props;

    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell>{ item.title }</Table.Cell>
          <Table.Cell>{ item.price }</Table.Cell>
          <Table.Cell>
            { item.qty }
          </Table.Cell>
          <Table.Cell textAlign='right'>{ item.qty * item.price }</Table.Cell>
        </Table.Row>
      </Table.Body>
    );
  }
}


  CartCard.propTypes = {
    item: PropTypes.object.isRequired
  }


export default CartCard;

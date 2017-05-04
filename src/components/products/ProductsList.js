import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Message, Icon } from 'semantic-ui-react';
import ProductCard from './ProductCard';


const ProductList = ({ products }) => {

  const noProducts = (
    <Grid.Column width={ 12 }>
      <Message icon>
        <Icon name='info'/>
        <Message.Content>
          <Message.Header>There is no products to show.</Message.Header>
        </Message.Content>
      </Message>
    </Grid.Column>
  );

  const productsList = (
    <Grid.Row>
      { products.map(product =>
        <Grid.Column key={ product._id }>
          <ProductCard
            product={ product }
          />
        <p>&nbsp;</p>
        </Grid.Column>
      )}
    </Grid.Row>
  );

  return (
    <Grid textAlign='left' centered stretched columns={ 3 }>
      { products.length === 0 ? noProducts : productsList }
    </Grid>
  );
}

export default ProductList;

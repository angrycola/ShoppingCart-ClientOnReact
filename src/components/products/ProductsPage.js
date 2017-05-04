import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductsList from './ProductsList';
import { indexProducts } from '../../actions/products';
import { addToCart } from '../../actions/cart';



class ProductsPage extends Component {

  componentDidMount() {
    this.props.indexProducts();
  }

  render () {
    const { products, addToCart } = this.props;

    return (
      <div>
        <h1>Products</h1>
        <ProductsList
          products={ products }
          addToCart={ addToCart }
        />
      </div>
    );
  }
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  indexProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({ products: state.products });

export default connect(mapStateToProps, { indexProducts, addToCart })(ProductsPage);

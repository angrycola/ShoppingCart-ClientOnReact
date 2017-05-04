import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { indexProducts } from '../../actions/products';

import ProductsList from './ProductsList';


class ProductsPage extends Component {

  componentDidMount() {
    this.props.indexProducts();
  }

  render () {
    const { products } = this.props;

    return (
      <div>
        <h1>Products</h1>
        <ProductsList
          products={ products }
        />
      </div>
    );
  }
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  indexProducts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({ products: state.products });

export default connect(mapStateToProps, { indexProducts })(ProductsPage);

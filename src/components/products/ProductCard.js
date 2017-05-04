import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'semantic-ui-react';

const ProductCard = ({ product, addToCart }) => {

  return (
    <Card fluid>
      <Image height="250" src={ product.imagePath } />
      <Card.Content>
        <Card.Header>
          { product.title }
        </Card.Header>
        <Card.Meta>
          { product.price }
        </Card.Meta>
        <Card.Meta>
          { product.category }
        </Card.Meta>
        <Card.Description>
          { product.description }
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Button
          fluid
          onClick={ () => addToCart(product) }>
            Add to Cart
        </Button>
      </Card.Content>

    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired
}

export default ProductCard;

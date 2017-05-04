export const toLocalStorage = (data) => {
  localStorage.setItem('cart', JSON.stringify(data));
};


export const setCart = () => {
  const newCart = {
    items: [],
    totalQty: 0,
    totalPrice: 0
  };

  localStorage.setItem('cart', JSON.stringify(newCart));
  toLocalStorage(newCart);
  return newCart;
};


export const addOrIncrease = (products, id, title, price) => {
  const index = products.findIndex(item => item._id === id);
  if (index > -1) {
    // existings
    return [
      ...products.slice(0, index),
      { ...products[index], qty: products[index].qty + 1 },
      ...products.slice(index + 1)
    ];
  } else {
    // new
    return [...products, { title, price, _id: id, qty: 1 } ];
  }
};

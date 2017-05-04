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

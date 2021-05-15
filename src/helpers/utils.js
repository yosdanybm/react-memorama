import { amount_carts, icons } from '../variables/general';

export const InitCarts = () => {
  let carts = [];
  while (carts.length < amount_carts) {
    const index = Math.floor(Math.random() * icons.length);
    const cart = {
      icon: icons.splice(index, 1)[0],
      selected: false,
    };

    carts.push(cart);
    carts.push({ ...cart });
  }

  return carts.sort(() => Math.random() - 0.5);
};

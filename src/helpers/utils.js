import { amount_carts, icons } from '../variables/general';

export const InitCards = () => {
  let cards = [];
  while (cards.length < amount_carts) {
    const index = Math.floor(Math.random() * icons.length);
    const cart = {
      icon: icons.splice(index, 1)[0],
      isFlipped: false,
      selected: false,
    };
    cards.push(cart);
    cards.push({ ...cart });
  }

  return cards.sort(() => Math.random() - 0.5);
};

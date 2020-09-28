const add = (cart, req) => {
    cart.amount += req.body.price;
    cart.countGoods += 1;
  cart.contents.push(req.body);
  return JSON.stringify(cart, null, 4);
};
const change = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  find.quantity += req.body.quantity;
  cart.amount += req.body.quantity*find.price;
  return JSON.stringify(cart, null, 4);
};
const del = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  cart.amount -= find.price;
  if ( find.quantity === 1) {
    cart.contents.splice(cart.contents.indexOf(find), 1);
    cart.countGoods -= 1;
  } else {
    find.quantity -= 1;
  }

  return JSON.stringify(cart, null, 4);
};

module.exports = {
  add,
  change,
  del,
};
//index.js
//path: src/index.js
import createItem from './services/item.js'
import * as cart from './services/cart.js'
const myCart = []
const myWishlist = []

console.log('Welcome to the shopee cart! \n')

const item1 = await createItem('keyboard', 30.65, 2)
const item2 = await createItem('mouse', 15.75, 1)
const item3 = await createItem('monitor', 100.00, 5)

await cart.addItem(myCart, item1)
await cart.addItem(myCart, item2)
await cart.addItem(myCart, item3)



await cart.removeItem(myCart, item1)

await cart.displayCart(myCart)

await cart.getTotal(myCart)
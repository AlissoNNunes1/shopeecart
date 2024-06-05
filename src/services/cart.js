//cart.js
//path: src/services/cart.js

// add an item to the cart

async function addItem(userCart, item) {
    userCart.push(item);
    }

// remove an item from the cart - this will remove one item at a time

async function removeItem(userCart,item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound == -1) {
        console.log('Item not found in cart');
        return;
        }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        } else {
            userCart.splice(indexFound, 1);
            }
    }
async function displayCart(userCart) {
    console.log('Shopee Cart:');
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}| Subtotal: ${item.subtotal()}`);
        });
        
    }

    
// delete a item from the cart

async function deleteItem(userCart , name) {
    const index = userCart.findIndex(item => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
        }
    }
// get the total price of the cart

async function getTotal(userCart) {
    console.log('Total Price:');
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
    }

// get the total number of items in the cart

async function getNumItems(userCart) {
    return cart.length;
    }

export {addItem, removeItem, deleteItem, getTotal, getNumItems, displayCart}
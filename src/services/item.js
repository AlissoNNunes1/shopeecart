//item.js
//path: src/services/item.js

// create a new item with a name , price ,quantity and subtotal

async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    }
}

export default createItem
const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProducts(name);

    }

}

const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    if (!name) {
        return;
    }
    //display in the UI
    displayProducts(name);
    //add to local storage
    addProductToCart(name);

    nameField.value = '';
}
const displayProducts = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart')
        ;
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}
const addProductToCart = name => {
    const cart = getCart();
    if(cart[name]){
        cart[name] = cart[name]+1;
    }
    else{
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

}
const placeOrder=()=>{
    document.getElementById('products').textContent='';
    localStorage.removeItem('cart');
}
displayLocalStorageCart();


//cookies hosse kichu information browser e rakhar jonno shegula ami chaile server e pathaite parbo . Kintu local storage and session storage ke ami server e pathaite parbona egulo shudhumatro browser e thakbe.
 //local storage and session storage er khetre, browser e ashle ami javascript hishebe kono ekta value dite pari abr ekhan theke value niye API er parameter hishebe pathaite pari kintu shorashori local storage ba session storage ke server e pathaite parbona. 
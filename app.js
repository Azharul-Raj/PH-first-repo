const getInputText = (id) => {
    const inputField = document.getElementById(id)
    const inputText = inputField.value 
    inputField.value = ''
    return inputText
}
// get cart from storage function
const getCartFromStorage = () => {
    const savedCart = localStorage.getItem('cart')
    let cart = {}
    if (savedCart) {
        cart = JSON.parse(savedCart)
    }
    return cart
}
// set value to the local storage
const saveStorage = (product, quantity) => {
    const cart = getCartFromStorage()
    cart[product] = quantity
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringify)
}

document.getElementById('add-btn').addEventListener('click', () => {
    const productName = getInputText('name-field')
    const productQuantity = getInputText('quantity-field')
    console.log(productName, productQuantity)
    // product showing container
    const productContainer = document.getElementById('show-product')
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <th></th>
     <th>${productName}</th>
     <th>${productQuantity}</th>
    `
    productContainer.appendChild(tr)
    // localStorage.setItem(productName,productQuantity)
    saveStorage(productName,productQuantity)
})
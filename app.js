const getInputText = (id) => {
    const inputField = document.getElementById(id)
    const inputText = inputField.value 
    inputField.value = ''
    return inputText
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
    localStorage.setItem(productName,productQuantity)
})
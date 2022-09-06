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
    localStorage.setItem(productName,productQuantity)
})
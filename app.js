function getValueByID(textFieldId){
    const textField = document.getElementById(textFieldId);
    const textFieldValueString = textField.innerText;
    const textFieldValue = parseFloat(textFieldValueString);
    return textFieldValue;
};

function setValueById(textFieldId, value){
    const textField = document.getElementById(textFieldId);
    textField.innerText = value;

};
function getCharge(amount){
    let charge;
    if(amount>=0 && amount<=500){
        charge = 0;
    }
    else if(amount>500 && amount<=800){
        charge = 100;
    }
    else if(amount>800 && amount<=1000){
        charge = 150;
    }
    else{
        charge = 200;
    }
    return charge;
};

// console.log(getValueByID('keyboard-price'));
// console.log(getValueByID('airpod-price'));
// console.log(getValueByID('watch-price'));
// console.log(getValueByID('metcon-price'));
// console.log(getValueByID('polaroid-cam-price'));
// console.log(getValueByID('headphone-price'));
// console.log(getValueByID('apple-watch-price'));
// console.log(getValueByID('osmo-price'));
// console.log(getValueByID('wild-price'));
// console.log(getValueByID('king-price'));
// setValueById('product-price',1099);
// setValueById('delivery-price',1099);
// setValueById('shipping-price',1099);
// setValueById('total-price',1099);
// setValueById('tax',1099);
// setValueById('grand-total',1099);
// setValueById('selected-items',1099);
// console.log(getCharge(1001));

let selectedItems = 0;
// added Event listener to the hero section product button
// Apple watch button
document.getElementById('apple-watch-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('apple-watch-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});
// osmo camera button
document.getElementById('osmo-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('osmo-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});
//wild shoe button
document.getElementById('wild-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('wild-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});
// king shoe button
document.getElementById('king-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('king-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});

//Added event lister to the card items

//headphone button
document.getElementById('headphone-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('headphone-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});

//polaroid cam button
document.getElementById('polaroid-cam-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('polaroid-cam-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});

// metcon button
document.getElementById('metcon-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('metcon-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});

// Calendrier button
document.getElementById('watch-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('watch-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});

// Airpod button
document.getElementById('airpod-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('airpod-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});

// AKKO ACR PRO button
document.getElementById('keyboard-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('keyboard-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});

// checkout(modal) button
document.getElementById('checkout-btn').addEventListener('click',()=>{
    const modalTotalPrice = getValueByID('grand-total');
    setValueById('modal-total-price',modalTotalPrice);
})
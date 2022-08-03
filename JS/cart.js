//make sure page is loaded? //
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
//remove item from cart //
function ready() {
var removeCartItemBtns = document.getElementsByClassName('btn-danger');

for (var i = 0; i < removeCartItemBtns.length; i++) {
    var button = removeCartItemBtns[i]
    button.addEventListener('click', removeCartItem) 
        }

    var quantityInputs = document.getElementsByClassName('quant-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    //ADD TO CART SECTION (FROM CART PAGE RN)
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    //PURCHASE BUTTON-- remove all items from cart//
    document.getElementsByClassName('purch-Btn')[0].addEventListener('click', purchaseClicked)
}

//function definitions that were used above/elsewhere//
function purchaseClicked() {
    alert('Thanks you for your gift')
    var cartItems = document.getElementsByClassName('cart-itemsC')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem() {
    var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

// adToCartClicked Function//
function addToCartClicked(event) {
    var button = event.target
    //two parent elements becuase button is inside a div(1) which is inside div(2)- which is the shopItem div //
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    //now we need to add a row to cart with all elements //
    addItemToCart(title, price, imageSrc)
    //new items not changing price, so we add the function to update total again
    updateCartTotal()
}

//function to addItemToCart
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row') //add class list so the style is copied over
    //cart-itemsC is the div where all cart-rows divs are stored
    var cartItems = document.getElementsByClassName('cart-itemsC')[0]

    //iterate through all item names/titles
    var cartItemNames = cartItems.getElementsByClassName('item-title')
    for (i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Item already added to cart')
            return
        }
    }

    //set div from HTML  and after set this equal to cartRow //
    var cartRowContents = `
        <div class="cart-item cart-col">
            <img class= "cartimg" src="${imageSrc}" width="100px">
            <span class="item-title">${title}</span>
        </div>
        <span class="cart-price cart-col">${price}</span>
        <div class="cart-quant cart-col">
            <input class="quant-input" type="number" value="1">
            <button class= "cBtn btn-danger" >REMOVE</button>
        </div>  `
        cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow) //will append cartRow to end of cart items
    //now we need to add another event listener to remove button becuase before it was only listening when page was loaded
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    //same for quantity
    cartRow.getElementsByClassName('quant-input')[0].addEventListener('change', quantityChanged)
}

//update price in cart//

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-itemsC')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElem = cartRow.getElementsByClassName('cart-price')[0]
        var quantElem = cartRow.getElementsByClassName('quant-input')[0]
        var price = parseFloat(priceElem.innerText.replace('$', ''))
        var quantity = quantElem.value
        total = total + (price * quantity)
    }
    //round total to nearest 2 decimal places //
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
function onLoadCart(){
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready()
    }
    
}


function ready() {
    var removeCartItemIcons = document.getElementsByClassName('remove-product')
    for (var i = 0; i <= 3; i++) {
        var icn = removeCartItemIcons[i]
        icn.addEventListener('click', removeItem)
    }

    var iconLike = document.getElementsByClassName('heart')
    for (var i = 0; i <= 3; i++) {
        var icn = iconLike[i]
        icn.addEventListener('click', iconLikeChangeColor)
    }

    var quantityInputs = document.getElementsByClassName('qty')
    for (var i = 0; i <= 3; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var increment = document.getElementsByClassName('cart-qty-plus')
    for (var i = 0; i <= 3; i++) {
        var incr = increment[i]
        incr.addEventListener('click', quantityIncrement)
    }

    var decrement = document.getElementsByClassName('cart-qty-minus')
    for (var i = 0; i <= 3; i++) {
        var decr = decrement[i]
        decr.addEventListener('click', quantityDecrement)
    }



}

function removeItem(event) {
    var iconClicked = event.target;
    iconClicked.parentElement.parentElement.parentElement.parentElement.remove();
    updateTotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 0;
    }
    updateTotal()
}

function quantityIncrement(event) {
    var event = event.target;
    var input = document.getElementsByClassName('qty');
    var inc = input[event.id]
    qty = parseInt(inc.value);
    qty += 1;
    inc.value = qty;
    
    updateTotal()
}


function quantityDecrement(event) {
    var event = event.target;
    var input = document.getElementsByClassName('qty');
    var dec = input[event.id]
    
    if (dec.value <= 0) {
        dec.value = 0;
    }
    else {qty = parseInt(dec.value);
        qty -= 1;
        dec.value = qty;}
    
    updateTotal()
}  

function iconLikeChangeColor(event) {
    var like = event.target;
    like.style.color = 'tomato';
}

function updateTotal() {
    var cartItemContainer = document.getElementsByClassName('product-img')
    var total = 0;
    for (var i = 0; i < cartItemContainer.length; i++) {
        var priceElement = document.getElementsByClassName('price');
        var p = priceElement[i]
        var quantityElement = document.getElementsByClassName('qty');
        var q = quantityElement[i]
        var price = parseInt(p.value);
        var quantity = parseInt(q.value);
        total = total + (price * quantity)
        
    }
    
    document.getElementsByClassName('total')[0].value = total ;
}

onLoadCart()
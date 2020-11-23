const shoppingCart = ["bananas", "milk"];

function addToShoppingCart(groceryitem){
        shoppingCart.push(groceryitem);
        
        if (shoppingCart.length > 3) {
            shoppingCart.shift();
        }
        console.log("You bought " + shoppingCart + "!");
}

addToShoppingCart('chocolate');
addToShoppingCart('waffles');
addToShoppingCart('tea');

       

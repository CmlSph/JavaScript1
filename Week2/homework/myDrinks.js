"use strict";

const drinkTray = [];

const drinkTypes = ['cola', 'lemonade', 'water'];

for (let i = 0; i < 5; i++) {
    let continueAddingDrinks = true;

    while(continueAddingDrinks) {
        const randomDrink = drinkTypes[Math.floor(Math.random() * 3)];
        
        const drinksInTray = drinkTray.filter(function(drink){

            return drink === randomDrink;
        });

        if (drinksInTray.length < 2) {
            drinkTray.push(randomDrink);
            continueAddingDrinks = false;
        }else {
            continuaAddingDrinks = true;
        }
    }
    
}
console.log(drinkTray);
console.log("Hey guys, I brought a " + drinkTray.join(", ") + "!"); 

// drinkTypes.forEach(elements => {
//     for (let i = 0; i < 2; i++) {
//         if (drinkTray.length < 5) {
//             drinkTray.push(elements);
//         }
//     }
// });
// console.log(drinkTray);
// console.log("Hey guys, I brought a " + drinkTray.join(", ") + "!");
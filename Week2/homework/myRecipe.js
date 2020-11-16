"use strict";

const myRecipe = {
    'Meal Name': 'Omelette',
    Serves: 2,
    Ingredients: '4 eggs, 2 strips of bacon, 1 tsp salt/pepper'
    
};

// iterate over the user object
for (const key in myRecipe) {
    console.log(`${key}: ${myRecipe[key]}`);
}
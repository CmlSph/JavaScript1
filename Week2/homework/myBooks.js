"use strict";

const books = [
    { title:'Moby Dick', author:'Herman Merville', alreadyRead : true}, 
    { title:'Lord of the Rings', author:'John Ronald Reuel Tolkien', alreadyRead : false},
    { title:'Great Expectations', author:'Charles Dickens', alreadyRead : true}
]

    books.forEach((element) => {
        console.log(element.title + " by " + element.author);
       if (element.alreadyRead === true) {
          console.log('You already red "' + element.title + '"')
        } else{
        console.log('You still need to read "' + element.title + '"')
    }
});

//Using ternary operators

// books.forEach((element) => {
//     console.log(element.title + " by " + element.author);
//     element.alreadyRead
//       ? console.log('You already read "' + element.title + '"')
//       : console.log('You still need to read "' + element.title + '"');
//   }); 

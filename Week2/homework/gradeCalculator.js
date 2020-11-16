"use strict";

function grades (x, per) {
    let percentage = (x/100)*per //Here, we calculate the percentage of x and assign it to percentage
      if(percentage >= 90) {
        console.log(`You got an A (${percentage+'%'})!`)// a template string, so we can insert variables!
      } else if (89 >= percentage && percentage >= 80){
        console.log('You got a B ' + '('+ percentage + '%' + ')' + '!')
      } else if (79 >= percentage && percentage >= 70){
        console.log('You got a C ' + '('+ percentage + '%' + ')' + '!')
      } else if (69 >= percentage && percentage >= 60){
        console.log('You got a D ' + '('+ percentage + '%' + ')' + '!')
      } else if (59 >= percentage && percentage >= 50){
        console.log('You got an E ' + '('+ percentage + '%' + ')' + '!')
      }else{
        console.log('You got a F ' + '('+ percentage + '%' + ')' + '!')
      }
    }
      (grades(60,100));
    
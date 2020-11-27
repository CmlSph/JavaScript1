const cartForParty = { beers:2.20, chips:3.60, bread : 2.40, cheese:3.75, tomatoes: 1.25}

// function roundNum(num) {//This section is written to round the part after the comma.
//     return Math.round(num*100)/100;
// }
function roundNum (num){// We can use .toFixed(2) to return two digits afterm the comma

  my_float = num.toFixed(2);
  
  return my_float
}

function calculateTotalPrice( cartForParty ) {              
    var sum = 0;
    for( var items in cartForParty ) {
      if( cartForParty.hasOwnProperty( items ) ) {
        sum += parseFloat( cartForParty[items] );
      }
    }
    return sum;
    var summed = roundNum(calculateTotalPrice( cartForParty ));
  console.log( "Total: €"+summed );
      }
      var summed = roundNum(calculateTotalPrice( cartForParty ));
    console.log( "Total: €"+summed );
      calculateTotalPrice( cartForParty )
  

  //This is another way to solve this problem.  

// const cartForParty = { beers:2.20, chips:3.60, bread : 2.40, cheese:3.75, tomatoes: 1.25}

// function roundNum(num) {//This section is written to round the part after the comma.
//     return Math.round(num*100)/100;
// }

// function calculateTotalPrice(cartForParty) {

//     const sumValues = cartForParty => Object.values(cartForParty).reduce((a, b) => a + b);

// const sum = sumValues(cartForParty);

// console.log("Total: €" + roundNum(sum));
// }
// calculateTotalPrice( cartForParty );

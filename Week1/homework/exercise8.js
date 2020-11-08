function isTypeTheSame(x, y) {
    if(typeof(x) === typeof(y)) {
      console.log("SAME TYPE")
    } else  {
      console.log('NOT THE SAME TYPE')
    }
  }
  


//Declare 4 variables: 2 must be strings and 2 must be objects
let a = "nine";
let b = "ninety";
let c = {age:46};
let d = {year:90};


//Check data type
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);


//Check if data type is the same
typea = typeof a;
typeb = typeof b;
typec = typeof c;
typed = typeof d;


//Create 6 conditional statements
if (typea === typeb) {
    console.log("SAME TYPE");
    
} else {
    console.log("NOT THE SAME TYPE");
  }

if (typea === typec) {
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
  }

if (typea === typed) {
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
  }

if (typeb === typec) {
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
  }

if (typeb === typed) {
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
  }

if (typec === typed) {
    console.log("SAME TYPE");
} else {
    console.log("NOT THE SAME TYPE");
  }
//Write 2 console.log statemets
isTypeTheSame(a, c);
isTypeTheSame(b, d);
isTypeTheSame(c, d);


const myFirstArray = ["brother", false, 33, {name: "Cemal"} ];
const mySecondArray = ["Writing", 1 , {age:26}, false, 45.7, "reading", 77];
console.log("The length of the array is " + (myFirstArray.length));
console.log("The length of the array is " + (mySecondArray.length));

if ( (myFirstArray.length)=== mySecondArray.length) {
    console.log("They are the same!");
    
} else {
    console.log("Two different sizes");
}
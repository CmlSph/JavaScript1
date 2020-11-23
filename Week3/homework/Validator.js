function validateLength(creditCardNumber){
    return (creditCardNumber.length === 16) ? true : false
}

function validateAllNumbers(creditCardNumber){
    return isNaN(creditCardNumber) ? false : true
}

function validateDifferentDigits(creditCardNumber){
    const arrOfCreditCardNumber = creditCardNumber.split('');
    const setOfCreditCardNumber = new Set(arrOfCreditCardNumber);

    return (setOfCreditCardNumber.size) > 1 ? true : false
}

function validateLastEvenDigit (creditCardNumber) {
    return creditCardNumber % 2 === 0 ? true : false
}

function validateSumOfNumbers(creditCardNumber){
    const sum = creditCardNumber.split('').reduce(function(acc, elem){
        acc = acc + parseInt(elem, 10);
        return acc
    });
    return sum > 16 ? true : false;
}

function validateCreditNumber(creditCardNumber) {
    if (!validateLength(creditCardNumber)) {
        return 'Invalid! The length of the input ' + creditCardNumber + ' should be equal to 16!';
    } else if (!validateAllNumbers(creditCardNumber)) {
        return 'Invalid! The input ' + creditCardNumber + ' should contain only numbers!';
    } else if (!validateDifferentDigits(creditCardNumber)){
        return 'Invalid! The input ' + creditCardNumber + ' should contain at least 2 different types of numbers!';
    } else if (!validateLastEvenDigit (creditCardNumber)) {
        return 'Invalid! The input ' + creditCardNumber + ' should have an even final number';
    } else if (!validateSumOfNumbers(creditCardNumber)) {
        return 'Invalid! The sum of the input ' + creditCardNumber +' is less than 16';
    } else {
        return 'Success! The input ' + creditCardNumber + ' is a valid credit card number!';
    }
}

console.log(validateCreditNumber('a92332119c011112'));
console.log(validateCreditNumber('4444444444444444')); 
console.log(validateCreditNumber('6666666666661666'));
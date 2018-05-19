// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  var prefix2 = cardNumber.substring(0, 2);
  var prefix3 = cardNumber.substring(0, 3);
  var prefix4 = cardNumber.substring(0, 4);
  var prefix6 = cardNumber.substring(0, 6);

  if(cardNumber.length === 14 && (cardNumber[1] == 8 || cardNumber[1] == 9)){
  	return 'Diner\'s Club';
  }

  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if(cardNumber.length === 15 && (cardNumber[1] == 4 || cardNumber[1] == 7)){
  	return "American Express";
  }

//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
 if(prefix4 === '4903'||prefix4 === '4905'||prefix4 === '4911'||prefix4 === '4936'|| prefix6 === '564182'||prefix6 === '633110'|| prefix4 === '6333'|| prefix4 === '6759'){
  	return "Switch";
  }
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  if(cardNumber[0] == 4){
  	return "Visa";
  }
 // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  if(cardNumber.length === 16 && cardNumber[0] == 5 && cardNumber[1] > 0){
  	return "MasterCard";
  }
  
// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
 if(prefix4 === '6011' || (prefix3 >= '644'&& prefix3 <= '649')|| prefix2 === '65'){
    return "Discover";
  }
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
 if(prefix4 === '5018'||prefix4 === '5020'||prefix4 === '5038'||prefix4 === '6304'){
    return "Maestro";
  }
 // if((cardNumber[0] == 5 && cardNumber[1] == 0) || (cardNumber[0] == 6 && cardNumber[1] == 3) ){
 //  	return "Maestro";
 //  }


//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
 if((prefix6 >= '622126' && prefix6 <= '622925') || (prefix3 >= '624' && prefix3 <= '626')|| (prefix4 >= '6282' && prefix4 <= '6288')){
  	return "China UnionPay";
  }
};



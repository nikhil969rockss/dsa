const prompt = require("prompt-sync")();

// question valid voter or Not

// let age = +prompt( "Enter your age ")
// if (!age)
//   console.log("age is invalid");

// else {
//   if(age >= 18 ) console.log("You can Vote");
//   else console.log("You can not vote");
// }

// question 2 shop discount if User shops for 500 --------> no discount
//                                          >500  <800-------> 5%
//                                           >800 <1000 ------> 10%
//                                            more than 1000 ----> 20%

// const price = +prompt ("Enter your shopping value ")
// if(!price) return console.log("Price should be in number");
// let amount;
// let discount;

// if(price >0 &&price <= 500 ) amount = price
// else if (price > 500 && price <= 800){
//     discount= (price * 5)/100
//    amount = price - discount

//   }
//   else if (price > 800 && price <= 1000){
//     discount = (price * 10)/100
//     amount = price - discount

//   }
//   else if (price> 1000){
//     discount = (price * 20)/100
//     amount = price - discount

//   }
// console.log("your final amount " + amount);

// Question bijli bill : Upto 100 units -----> 4/unit
//                          101 - 200 -------> 6/unit
//                           201- 400 --------> 8/unit
//                          more than 400-----> 13/unit

// let units = +prompt("Enter your unit of electricity ")
// if(!units) console.log("invalid input, should be a number");
// let amount = 0
// if(units > 400){

//   amount =(units - 400)*13 //
//   units = 400

// }
// if(units > 200 && units <= 400){

//   amount += (units - 200) * 8  //
//   units = 200
// }
// if(units >100 && units <= 200){

//   amount += (units - 100)* 6  //
//   units = 100
// }
// if (units <= 100) {

//   amount += (units) * 4 //

// }

// console.log("your total Amount Payable is " + amount);

// Question INR Denomination means notes

// let amount = 5473

// if (amount >= 500){
//   console.log("500 rupee notes are "+ Math.floor(amount/500));
//   amount = amount % 500
// }
// if (amount >= 200) {
//   console.log("200 rupee notes are " + Math.floor(amount / 200));
//   amount = amount % 200
// }
// if (amount >= 100) {
//   console.log("100 rupee notes are " + Math.floor(amount / 100));
//   amount = amount % 100
// }
// if (amount >= 50) {
//   console.log("50 rupee notes are " + Math.floor(amount / 50));
//   amount = amount % 50
// }
// if (amount >= 20) {
//   console.log("20 rupee notes are " + Math.floor(amount / 20));
//   amount = amount % 20
// }
// if (amount >= 10) {
//   console.log("10 rupee notes are " + Math.floor(amount / 10));
//   amount = amount % 10
// }
// if (amount >= 5) {
//   console.log("5 rupee coins are " + Math.floor(amount / 5));
//   amount = amount % 5
// }
// if (amount >= 2) {
//   console.log("2 rupee coins are " + Math.floor(amount / 2));
//   amount = amount % 2
// }
// if(amount === 1 ){
//   console.log("1 rupee coins are " + amount);

// }

// Ternary Operator

// let number = -12
//console.log(number > 0? "positive": "not more than zero" );

// Nested ternary Operator

// console.log(number > 0 ? "positive": number < 0 ? "negative ": "zero");

// Switch cases multiple values

// let day = 5;

// switch (day) {
//   case 1:
//     console.log("monday");

//     break;

//     case 2:
//     console.log("tuesday");
//     break;

//     case 3:
//       console.log("wednesday");
//       break

//   default:
//     console.log("invalid result");
//     break;
// }

// 2

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("monday");
//     break

//   case 4:
//   case 5:
//   case 6:
//     console.log("tuesday");
//     break;

//   default:
//     break;
// }


//console.log(0.1 + 0.2) //=== 0.30000000000000004

// To handle float in switch cases like 0.1 + 0.2

// let num = 0.1 + 0.2
// console.log(num);
// switch (true) {
//   case +num.toFixed(1) === 0.3:
//     console.log("It is 0.3");
    
//     break;
    

//   default: console.log("not matched");
//     break;
// }
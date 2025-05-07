const prompt = require("prompt-sync")();
// pattern 1 : Base Pattern n numbers of rows and columns

// let n = +prompt(" Enter a number  ")
// if(isNaN(n) || n< 0 || n===0){
// console.log("Invalid Input");
// }else{
//   for(let i =1; i<=n; i++){

//     for(let j =1; j<= n; j++){
//       process.stdout.write(" * ")

//     }
//     console.log();

//   }
// }

// Question Right angled star pattern
// let n = +prompt(" Enter a number  ")
// if (isNaN(n) || n < 0 || n === 0) {
//   console.log("Invalid Input");
// } else {
//   for (let i = 1; i <= n; i++) {

//     for (let j = 1; j <= i; j++) {
//       process.stdout.write(String(j))

//     }
//     console.log();

//   }
// }

// Question: Right angled triangle for numbers
// let n = +prompt(" Enter a number  ")
// if (isNaN(n) || n < 0 || n === 0) {
//   console.log("Invalid Input");
// } else {
//   for (let i = 1; i <= n; i++) {

//     for (let j = 1; j <= i; j++) {
//       process.stdout.write(String(j))

//     }
//     console.log();

//   }
// }

// Question: Right angled triangle for ABCD

// let n = +prompt(" Enter a number  ")
// if (isNaN(n) || n < 0 || n === 0) {
//   return console.log("Invalid Input");
// } else {

//   for (let i = 1; i <= n; i++) {
//     let ascii = 65

//     for (let j = 1; j <= i; j++) {

//       process.stdout.write(String.fromCharCode(ascii))
//       ascii++

//     }
//     console.log();

//   }
// }

// Question: Inverted Right angled triangle

// let n = +prompt("Enter a number ")
// if( isNaN(n) || n < 0 || n===0){
//   return console.log('Invalid input, try agian');
// }else{

//   for(let i = 1; i <= n; i++){

//     for (let j =n; j >= i; j-- ){
//       process.stdout.write(" * ")

//     }
//     console.log();

//   }

// }

// Question: Mirror Right angled triangle

// let n = +prompt("Enter a number ");
// if (isNaN(n) || n < 0 || n === 0) {
//   return console.log("Invalid input, try again");
// } else {
//   for (let i = 1; i <= n; i++) {
//     for (let j = n - 1; j >= i; j--) {
//       process.stdout.write("  ");
//     }

//     for (let j = 1; j <= i; j++) {
//       process.stdout.write("* ");
//     }
//     console.log();
//   }
// }

// Question: X shape star pattern only for odd numbers

// let n = +prompt("Enter a number ")
// if(isNaN(n) || n < 0 || n === 0){
//   return console.log("Invalid input, try again");
// }else{

//   for(let i =1; i <= n; i++){
//     for(let j=1; j <=n; j++){
//       if(i===j || i + j === n+1 ){
//         process.stdout.write("*")
//       }
//       process.stdout.write("  ")

//     }
//     console.log();
//   }
  
// }


// Question: V star pattern     

// let n = +prompt(" Enter a number ")
// if(isNaN(n) || n < 0 || n === 0){
//   return console.log("Invalid input, try again");
// }else{
// for(let i = 1; i <= n; i++ ){
//   for(let j = 1; j <= 2*n - 1; j++ ){
//     if(i === j || i + j === 2*n){
//       process.stdout.write("*")
//     }
//     process.stdout.write("  ")

//   }
//   console.log();

// }

// }



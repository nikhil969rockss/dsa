const prompt = require('prompt-sync')();

// Question print n number of hello worlds

// let n = 2000

// for (let i =1; i<=n; i++){
//   console.log("hello world");

// }

//  Question 2 Print  1- n numbers

// let n = 103

// for(let i = 1; i<= n; i++){
//   console.log(i);

// }

// Reverse n to 1 number

// for(let i = n; i>= 1; i--){
//   console.log(i);

// }


// Question: Sum of n natural number

// let n = 20
// let sum =0
// for (let i =1; i<= n; i++){
//   sum+= i
  

// }
// console.log(`sum of ${n} natural number= ` + sum);


// Question: Factorial of a number

// let num = 1
// let fact = 1;
// for(let i =1; i<=num; i++){
//   fact*= i

// }
// console.log('factorial of '+num +" = "+ fact);

// Question : Factors of a number
// let number= 15
// let factorFirst = 1, factorLast = number
// let factors =""

// for(let i =2; i<= number/2; i++){
//   if(number % i === 0){
//     factors = factors+ ", " +i

//   }
    

// }
// console.log(` factors of ${number} are: ${factorFirst}${factors}, ${factorLast}`);



// Question: Prime numbers

// let n = prompt("Enter a number to check whether it is prime or not?: ")

// if (!n){
//   console.log("Empty input register");
//   return
// }
// if(isNaN(n)){
//   console.log("Invalid input");
// }
// else{
//   let number = +n

//   if(number>0){
//     let primeHai = isPrime(number)
//     // for (let i =2; i<= number/2; i++){
//     //   if(number % i === 0) primeHai = false

//     // }
//     console.log(primeHai ? `${number} is a Prime `: `${number} is not a Prime`);
    
//   }
//   else {
//     console.log("number should be positive and more than zero");
//   }
 
// }

// // approach 2nd

// function isPrime (n){
//  if(n<= 1) return false
//  if (n===2) return true
//  if (n%2 === 0) return false
//  for(let i = 3; i<= Math.floor(Math.sqrt(n)); i+=2){
//   if (n % i === 0) return false


//  }
//  return true
// }





// Question: Sum of n digit using while loop

// let n=5
// let sum =0
// let i=0;
// while(i<= n){
//   sum+= i
//   i++
// }
// console.log("sum of "+ n+ " number is "+ sum);


// Question : Sum of the digit using while loop Example input===> 1234 ====> 1+2+3+4 =//10 output


// let number = +prompt("Enter a number ")
// if(!number) return console.log("Entered empty value");
// if(isNaN(number))return console.log("invalid input, type number should be > 0")
// if(number>0){
//   let original = number
//   let sum =0
//   while(number > 0){// 1234
//     let remainder = number % 10
//     sum = sum + remainder

//     number = Math.floor(number/10)



//   }
//   console.log('your number was '+original+" sum of it's digit is "+ sum);

// }else{
//   console.log("should be positive or greater than 0");
// }


// Question: Reverse the number 


// let number = +prompt("Enter a number ")
// if (!number) return console.log("Entered empty value");
// if (isNaN(number)) return console.log("invalid input, type number should be > 0")
// if (number > 0) {
//   let original = number
//   let rev = 0
  
//   while (number > 0) //
//     {// 
//     let remainder = number % 10 // 
//     rev = rev*10 + remainder // 

//     number = Math.floor(number / 10) // 



//   }
//   console.log("Your number was "+ original+ " reverse number is " + rev);

// } else {
//   console.log("should be positive or greater than 0");
// }


// Question: Strong number ----> A strong number is a number in which sum of factorial of it's digit is equal to the number For example: 145 = 1! + 4! + 5! (1+ 24+ 120) =145


// let number = +prompt("Enter a number ")
// if (!number) return console.log("Entered empty value");
// if (isNaN(number)) return console.log("invalid input, type number should be > 0")
// if (number > 0) {
//   let sum = 0 // 
//   let original = number
//   while(number>0){ //
//     let fact =1;
//     let rem =0;
//     rem = number % 10 //
//     for (let i=1; i<= rem; i++){
//       fact = fact * i
//     }
//     sum = sum + fact
//     number = Math.floor(number/10) // 

//   }
//   if(original === sum) console.log(`${original} is a strong number`);
//   else console.log(`${original} is not a strong number`);


// } else {
//   console.log("should be positive or greater than 0");
// }

// Question : Guess the number game

// let random = Math.floor(Math.random()*100+1)

// let guess = 0;
// while ( guess !== random){
//   guess = +prompt(" Guess the number between 1 - 100 ")
//   if (isNaN(guess) || guess < 0 || guess > 100 )
//   {console.log("invalid input, try again");
//          continue
//                          }
  
//   if(guess > random){
//     console.log("Your guess is too high 📈");
//   } else if( guess < random){
//     console.log("Your guess is too low 📉");
//   }else 
//   {
//     console.log('Congrats 🎉🥳 you have guessed it right number was '+guess);
//   }
// }


// Question : Sasta calculator

// let userOption = firstNumber = secondNumber = 0;

// while(true){
//   userOption = +prompt(" Select a number from 1 - 4: 1-addition, 2-subtraction, 3-multiplication, 4- divide ")
//   if (isNaN(userOption) || userOption >4 || userOption<1 ){
//     console.log("Invalid input, kindly try again");
//     continue
//   }else{

//    firstNumber = +prompt(" Enter first number ")
//    if(isNaN(firstNumber)) {console.log("Please enter number ");
//     continue
//    } 

//    secondNumber = +prompt(" Enter second number ")
//     if (isNaN(secondNumber)) { console.log("Please enter number "); 
//       continue
//     } 
//     if(userOption === 1){
//       console.log(`Addition of ${firstNumber}+${secondNumber} = ${firstNumber + secondNumber} `);
//       break;

//     }else if(userOption === 2){
//       console.log(`Subtraction of ${firstNumber}-${secondNumber} = ${firstNumber - secondNumber} `);
//       break;

//     }else if( userOption === 3){
//       console.log(`Multiplication of ${firstNumber}*${secondNumber} = ${firstNumber * secondNumber} `);
//       break;

//     }else if (userOption ===4){
//       console.log(`Division of ${firstNumber}/${secondNumber} = ${firstNumber / secondNumber} `);
//       break;

//     }else {
//       console.log("Invalid operation");
//     }
//   }
// }


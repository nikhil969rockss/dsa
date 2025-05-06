const prompt = require('prompt-sync')();

// question 1 Sum of two integer

// function sum(a,b){
//   return a+b
// }

// console.log(sum(4,6));




// relation between integer and string 
// string ------> "" double quotes k inside , it is shown in black on console
// integer ------> any number other than float , it is shown in blue on console



// Question -2 Sum and message

// function sumTwo (a,b){
//   return console.log(`sum of two number is ${a+b}`);
// }

// sumTwo(7,88)


// type coercion:  + ko chord k -, /, *, % sab me convert kar dunga agar mereko ek string milegi 

// for example :  console.log("1" - 1) // out put will be zero

//                 console.log( "1" + 1) //Output will be 11



// Q3 Accept and print the answer

// const prompt = require('prompt-sync')();
// const message = prompt ("Enter a message")
// console.log(message);


// question 4 Swapping variable by 3 methods

// method 1

// let a = 30;
// let b = 50 ;

// let temp = a;
// a = b;
// b= temp;

// console.log(`swapped variables a= ${a } b= ${b}`);

// method 2

// a = a + b  // 30 + 50 = 80
// b = a - b  // 80 - 50 = 30
// a = a - b 

// console.log(a , b);


// method 3 
// [a,b] = [b,a ]
// console.log("a = "+a, "b = " +b);


// question calculate Area and perimeter of a rectangle

// function area (length, breath){
//   return length * breath

// }
// function perimeter ( length, breath){
//   return 2 * (length + breath)
// }

// console.log("Area ="+ area(4,5) ,"Perimeter = " + perimeter(4,5)  );



// Question Area of triangle by Heron's formula 

// let  a = 10 , b = 20, c = 25

// let s = (a + b + c)/2

// let heronsArea = Math.floor(Math.sqrt(s * (s - a) *(s - b) *(s - c)))
// console.log(heronsArea);



// Question Circumference of Circle

// const radius = +prompt("Enter a radius for a circle ")
// const circumference = 2 * +Math.PI.toFixed(2) * radius

// console.log(circumference);



// Question Generate OTP by Math.random()

// const OTP = Math.trunc((Math.random() * 9000) + 1000)

// console.log(OTP);



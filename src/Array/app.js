const prompt = require("prompt-sync")();

//Question: Accept value from user and assign in the array

// let arr = new Array(5);

// for (let i = 0; i < arr.length; i++) {
//   let values = +prompt(" Enter 5 value in an Array only integers ");
//   if (values===null) {
//     console.log("Empty value entered");
//     i = -1;
//     continue;
//   }
//   if (isNaN(values)) {
//     console.log("Invalid input, try again");
//     i = 0c;
//     continue;
//   }
//   arr[i] = values;
// }
// console.log(arr);

// Question: Sum of array's element

// let arr = [20, 30, 40, 50, 100];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
// sum = sum + arr[i]

// }
// console.log("Total sum in the array "+ arr + " = "+ sum );

// Question: Max and min element from array

// Data entries by the user
// let arr = new Array(5);
// let i = 0,
//   value = 0;
// while (i < arr.length) {
//   value = +prompt(" Enter 5 values in an Array ");
//   if (value === null) {
//     console.log("Entered empty value");
//     i = -1;
//     continue;
//   }
//   if(isNaN(value)) {
//     console.log("Invalid input");
//     i = 0;
//     continue;
//   } else {
//     arr[i] = value;
//     i++;
//   }
// }

// Finding the Max element in the Array

// let max = arr[0]

// for(let i = 1; i < arr.length; i++){
//   if ( arr[i] > max){
//     max = arr[i]
//   }

// }
// console.log(arr);
// console.log("Maximum number in the array is " + max);

// Question : Finding the Minimum element in the Array

// Taking Data from the user

// let arr = new Array(5);
// let i = 0,
//   value = 0;
// while (i < arr.length) {
//   value = +prompt(" Enter 5 values in an Array ");
//   if (value === null) {
//     console.log("Entered empty value");
//     i = -1;
//     continue;
//   }
//   if (isNaN(value)) {
//     console.log("Invalid input");
//     i = 0;
//     continue;
//   } else {
//     arr[i] = value;
//     i++;
//   }
// }

// Finding the minimum value in the Array

// let min = arr[0]
// for(let i = 1; i < arr.length; i++){
//   if ( arr[i]< min)
//     min = arr[i]

// }
// console.log(arr);
// console.log("Minimum value in this Array "+min );

//Second max and second min element from the array

// let arr = [10, 20, 40, 100, 100, 100]

// let firstMax = Math.max(arr[0], arr[1])
// let secondMax = Math.min(arr[0], arr[1])

// for(let i = 2; i < arr.length; i++){
//   if(arr[i] > firstMax){
//     secondMax = firstMax
//     firstMax = arr[i]
//   } else if (arr[i] > secondMax && firstMax !== arr[i] ){
//       secondMax = arr[i]
//   }

// }
// console.log(arr);
// console.log("First Max "+ firstMax + " Second Max "+ secondMax );

// second minimum

// let arr = [120, 50, 80, 99, 56]

// let firstMin = Math.min(arr[0], arr[1])
// let secondMin = Math.max(arr[0], arr[1])

// for(let i = 2; i < arr.length; i ++){
//   if (arr[i]< firstMin){
//     secondMin = firstMin
//     firstMin = arr[i]
//   } else if (arr[i] < secondMin && firstMin !== arr[i]){
//     secondMin = arr[i]
//   }

// }

// console.log(arr);
// console.log("Your First Min "+ firstMin + " Second Min "+secondMin);

//Question: Reverse the array

// METHOD : WITH Extra creating variable (space memory)

// let arr = [10, 20, 50, 90, 150]
// let temp = new Array(arr.length)
// let j = 0

// for(let i = arr.length -1 ; i >= 0; i--){
//   temp[j] = arr[i]
//   j++

// }
// console.log(arr);
// console.log("Revered Array With extra Space "+ temp);

//METHOD: With no Extra Space created in the Memory ( 2 pointers method)

// let arr = [10, 40, 60, 80, 140];

// let i = 0;
// let j = arr.length - 1;

// while (i !== j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);




//All 0's to left and all 1's to right


// let arr =[ 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0,1 , 1, 0]
// let copy = arr
// console.log(copy);
// let j =0

// for(let i =0 ; i < arr.length; i++){
//   if ( arr[i] === 0){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     j++
//   }
// }

// console.log(arr);
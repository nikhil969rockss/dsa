const prompt = require("prompt-sync")();
// Question:1 Left Rotation by 1 step

// let arr = [1, 2, 3, 4, 5 ] // expected Output = [2, 3, 4, 5, 1]
// console.log(arr);
// let copy = arr[0]
// for(let i =0; i < arr.length - 1; i++){
//   arr[i] = arr[i+1]

// }
// arr[arr.length - 1] = copy
// console.log(arr);

// Right Rotation by 1 step

// let arr = [1, 2, 3, 4, 5] // expected output = [5, 1, 2, 3, 4]
// console.log(arr);
// let copy = arr[arr.length - 1]
// for(let i = arr.length - 1; i >= 1; i-- ){
//   arr[i ] = arr[i-1 ]

// }
// arr[0] = copy
// console.log(arr);

// Question: Left and right rotation by k element

// Method: 1  Time complexity is equal to n*n

// let arr = [1, 2, 3, 4, 5]; // let k = 2  output: [3, 4, 5, 1, 2]

// console.log(arr);

// let k = +prompt(" Enter the value of k ");
// k = k % arr.length;
// let count = 0;
// for (let j = 1; j <= k; j++) {
//   let copy = arr[0];

//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
//   count++;
// }
// console.log(arr);
// console.log(count);

// METHOD: 2 By making new Array ( with Extra space in the memory)

// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let k = +prompt("Enter the value of k ");
// k = k % arr.length;

// for (i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }
// console.log(temp);

// Right shifting by k steps

// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let k = +prompt("Enter the value of k ");
// k = k % arr.length;

// for (let i = 0; i < arr.length; i++) {
//   temp[(i + k) % arr.length] = arr[i];
// }

// console.log(temp);

// METHOD 3: By function of temp (most Efficient way) Time complexity is n

// let arr = [1, 2, 3, 4, 5]
// console.log(arr);
// let k = +prompt(" Enter the value of k ")
// let i =j =0
// reverse(i =0, j =k -1)
// reverse(i =k, j =arr.length -1)
// reverse(i =0, j =arr.length -1)
// console.log(arr);
// function reverse(i , j){
//   while(i<j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
//   }
// }

// Question:Merge sorted Array with Extra spaces

// let arr1 = [1, 2, 3, 0, 0, 0]
// let arr2 = [2, 5, 6]
// let m =3
// let n=3
// let i = j = k =0
// let temp = new Array(m + n)

// while(k < temp.length){
//   if ( arr1[i] < arr2[j] && arr1[i]!==0){
//     temp[k++] = arr1[i++]
//   }
//   else if(arr2[j]!==0){
//     temp[k++] = arr2[j++]
//   }
// }
// while (i < m){
//   temp [k++] = arr1[i++]
// }
// while (j < n) {
//   temp[k++] = arr2[j++]
// }
// console.log(temp);

//Question:Best time to buy and sell stocks---leetCode
// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), profit = 6 - 1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// let arr = [7, 1, 5, 3, 6, 4]
// let maxProfit = 0;
// let min = arr[0]
// for(i =0; i < arr.length; i++){
//   if( arr[i] < min) min= arr[i]
//   let profit = arr[i] - min;
//   maxProfit = Math.max(profit, maxProfit)
// }
// console.log(maxProfit);

// Question: sort the colors---leetCode

// let arr = [2, 0, 1]

// let j =0, i = 0
// let k = arr.length - 1

// while(i <= k){
//   if(arr[i] === 0){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     j++
//     i++
//   } else if (arr[i] === 2){
//     let temp = arr[i]
//     arr[i] =  arr[k]
//     arr[k] = temp
//     k--

// }else i++

// }
// console.log(arr);

//Question: Maximum SubArray/ kadane's algorithm---leetCode

// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The subarray[4, -1, 2, 1] has the largest sum 6.

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// let sum = 0;
// let max = -Infinity
// for (i = 0; i< arr.length; i++){
//   sum += arr[i]
//   max = Math.max(sum, max)
//   if (sum < 0) sum = 0
// }
// console.log(max);

//Question: Majority element/ Moore's voting algorithm---leetCode
//Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.You may assume that the majority element always exists in the array.

// Input: nums = [2, 2, 1, 1, 1, 2, 2]
// Output: 2

// let arr = [2, 2, 1, 1, 1, 2, 2]
// let count = 1
// let majority = arr[0]
// for(i =1; i < arr.length; i++){
//   if(count === 0){
//     majority = arr[i]
//     count =1
//   }else if ( arr[i]=== majority) count++
//   else count--
// }
// console.log(majority);

//Question: Trapping Rain water---leetCode
// Given n non - negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Input: height = [4, 2, 0, 3, 2, 5]
// Output: 9

let arr = [4, 2, 0, 3, 2, 5];
let left = new Array(arr.length);
let right = new Array(arr.length);
let maxLeft = arr[0],
  maxRight = arr[arr.length - 1];
(left[0] = maxLeft), (right[right.length - 1] = maxRight);

for (let i = 1; i < arr.length; i++) {
  maxLeft = Math.max(arr[i], maxLeft);
  left[i] = maxLeft;
}

for (let i = arr.length - 2; i >= 0; i--) {
  maxRight = Math.max(arr[i], maxRight);
  right[i] = maxRight;
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += Math.min(right[i], left[i]) - arr[i];
}
console.log(sum);

  // Write a function that takes in an array of numbers and consoles the first four items multiplied by itself and the last two added by 10.Return the array with the new values.
function array(arr){
  const firstFour = arr.slice(0,4).map(item => item*item)
  const lastTwo = arr.slice(-2).map(item=>item+10)
  const newArray = firstFour.cocat(lastTwo)
  console.log(newArray)
}
Array([1,2,3,4,5,6])

// Write a program that takes in the following array and use a while loop to iterate and break when theitem is equal to the fouth index:let num = [1,2,3,4,5,6,7,8,9]
let arrnum = [1,2,3,4,5,6,7,8,9]
let i = 0
while (i<5){
  arrnum += i + "";
  i++
}
console.log(arrnum)

// Write a function  that takes in an array of strings and use a continue statement when an item is at the second insex:let fruits = ["Apple."plum","banana","Stawberries","kiwi"]
let fruits = ["Apple","plum","banana","Strawberries","Kiwi"]
for (let i = 0;i<3;i++){
  if(i===2)continue;
  fruits += "";
}
console.log(fruits)

// Write a function that accepts an array of strings and consoles.logs each element using a for loop
 const names = ["Alice","Ann","Lucy"]
 for (let i =0; i<names.length; i++){
  console.log(names)
 }
//  Write a function that takes a string as input and reverses it using a while loop.The function should return the reversed string

 let  word = "Scalet"
  reversedword = ""

  for(i = 0;i<word.length();i++);{
    reversedword = word.charAt(i)+reversedword;
  }
  console.log("reversedword" + reversedword);
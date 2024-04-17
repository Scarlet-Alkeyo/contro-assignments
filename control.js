  // Write a function that takes in an array of numbers and consoles the first four items multiplied by itself and the last two added by 10.Return the array with the new values.



function numbers(array){
  newArray = []
  const arr = [10,13,1,2,3,4,5,6,7]
  let arr1 = arr.slice(0,4)
  let arr2 = arr.slice(-2)
  
  arr1.forEach(i=>{
    console.log(i * i);
    newArray.push(arr1)

  })
  
  arr2.forEach(i=>{
    console.log(i + 10);
    newArray.push(arr2)

  })
}
numbers()

// // Write a program that takes in the following array and use a while loop to iterate and break when theitem is equal to the fouth index:let num = [1,2,3,4,5,6,7,8,9]
// let arrnum = [1,2,3,4,5,6,7,8,9]


function iterate(){
  let arrnum =[1,2,3,4,5,6,7,8,9];
  const x = arrnum.slice(0,5);
  while (x){
    console.log(x);
    break
  }
}
iterate()

// // Write a function  that takes in an array of strings and use a continue statement when an item is at the second index:let fruits = ["Apple."plum","banana","Stawberries","kiwi"]
// let fruits = ["Apple","plum","banana","Strawberries","Kiwi"]

function count(){
  let fruits = ["Apple","Plum","banana","strawberries","kiwi"];
  let a = 0;
  a++;
  while (a){
    if(a/2===0)
    continue;
    console.log(fruits[a]);
    break;
  }
}
count()


// // Write a function that accepts an array of strings and consoles.logs each element using a for loop

function accepts(){
  let names = ["cow","goat","carmel","donkey","donkey"];
  names.forEach(i=>{
    console.log(i);
  })
}
accepts()

// //  Write a function that takes a string as input and reverses it using a while loop.The function should return the reversed string
function reverse(word){
  while(word){
    break;
  }
  return word.split("").reverse().join("")
}
console.log(reverse("Hello"))


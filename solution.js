1.  
const text = "Hello World's Largest Sea Beach Cox's Bazar";
const textArr = text.split(" ")
let reversedText= "";
let i = textArr.length - 1
for (i; i >= 0; i = i - 1) {
    reversedText =  reversedText + textArr[i]
    if(i !== 0){
         reversedText =  reversedText + " "
    }
    
}
console.log( reversedText);


2. 
const arr = [5,4,5,8,1,3,2,9]
const targetSum = 10
const pair = []
for (let i = 0; i <= arr.length; i++) {
    for (let j = 1; j <= arr.length; j++) {
        let sum = arr[i] + arr[j]
        if (sum == targetSum) {
            pair.push(`${arr[i]} + ${arr[j]}`)
        }
    }
}

console.log("pair", pair);

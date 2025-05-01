// Conditional-function-variables || Material

// 1- Create a variable called carName, assign the value Volvo to it.
var carName = "Volvo"   

// 2- Use comments to describe the correct data type of the following variables

var length = 16;                                //Number

var lastName = "Johnson";                       //String

var scores = [20, 12, 15, 14, 20, 10, 2];       //Array

var person = {
    firstName: "John",                          //String
    lastName: "Doe"
}; 

var isGreaterThan10 = length > 10               //operator      

// 3- Fix the errors in the following functions:

function square1(x) { 
return x * x  
} 

function square2(x) {
return x * x 
}

function  square3(x) { 
return x * x
}

// 4- Write a JavaScript program that accept two integers and display the larger
function largest(x,y) {
if (x>y) return x
else return y
}

// 5- Create a function called 'add'.
function add(number1 , number2){
    return number1 + number2
}

console.log(add(2,3))      

// 6-Create another function named 'subtract',
function subtract(number1 , number2){
    return number2-number1 
}

console.log(subtract(5,1)) 

// 7-
function decide(operator ,number1 , number2){
if (operator=== "+")
return add(number1,number2)
if (operator=== "-"){
return  subtract(number1,number2)}
}

// // 8- Let's create 2 more functions and name them 'divide' and 'multiply'.
function divide(number1 , number2) {
return number1/number2
}
function multiply(number1 , number2) {
return number1 * number2
}

// 9???????????????????????????????????????????

// if (operator==="+") return add(number1,number2)
// }else if  (operator==="-") return subtract(number1,number2)
// }else  if (operator==="/") return divide(number1,number2)                          ???????????????????????????????
// }else  if (operator==="*") return multiply(number1,number2)
// else return "Sorry, we don't know this operator"}

// 10- Implement the previous logic in a function called calculate
function calculate(operator, number1, number2) {
    if (operator=== "+")
    return add(number1,number2)
    if (operator=== "-"){
    return  subtract(number1,number2)
    }
    if (operator=== "/")
    return  divide(number1,number2)
    if (operator=== "*"){
    return  multiply(number1,number2)}}

// 11- write a function that converts temperature from celsius to Farenheit
function convertTemp(x) {
    return x*1.8+32
}

// 12- Create a function called capitalize that takes the name of your favorite foo and returns the same food with the first letter being capitalized.
function capitalize(pizza) {
    return "Pizza"
}
// 13-Create a function called billing that takes 3 item prices and helps you do the following: 

function billing(x,y,z) {
    result= x + y + z
return "your total is" +" " + result + ". thank you for the" + " " + result*(15/100)
}

function billing(x,y,z) {
    var price= x + y + z
    var tip= x+y+z*(15/100).toFixed()
    var result = price+tip.toFixed()
    return "your total is"+" " + (price+tip) +". thank you for the"+ " " + tip + "tip"
}

// 14- Declare a function that takes three variables for each part of the sentence that changes (firstName, interest, and hobby).
// Use your variables and string concatenation to create your own awesome message.
function awesomeMessage(firstName, interest, hobby) {
    var awesomeMessage= firstName+" "+ interest+" " + hobby
    return awesomeMessage
}

// 15-Write a function that returns "even" if the number is even and "odd" if the number is odd
function parity(x) {
    if(x%2===0) 
        return "even"
    else return "odd"
}

// 16-Given an integer number number, return the difference between the product of its digits and the sum of its digits.

function subtractProductAndSum(number) {
    var x=number.toString()
    var sum = 0
    var product = 1
    for (i=1;i<str.length;i++){
        sum=sum+parseInt(str[i])
        product=product*parseInt(str[i])
    }
    return product-sum}






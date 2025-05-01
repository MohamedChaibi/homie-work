// While&For loops, Recursion || Material

// // Write a JavaScript function that will iterate from 0 to n. For each iteration,

function iterateAndLogWithFor(n) {
    for(var i=0; i<n ; i++){
        if (i%2===0) {
            console.log( i + "is even")}
        else {
            console.log( i + "is odd")}
}}
iterateAndLogWithFor(5)

function iterateAndLogWithwhile(n) {
    var i=0
    while (i<n){
        if (i%2===0) {
            console.log( i + "is even")}
        else {
            console.log( i + "is odd")}
        i++
        }
    
}
iterateAndLogWithwhile(5)

// 2-Write a JavaScript function that will iterate from n to 0. For each iteration,
// it will check if the current number is odd or even, and display a message to the screen.

// function reverseIterateAndLogWithwhile(n) {
    var i=n
    while (i>=0){
        if (i%2===0) {
            console.log( i + "is even")}
        else {
            console.log( i + "is odd")}
        i--
        }
    

// // reverseIterateAndLogWithwhile(5)

function reverseIterateAndLogWithFor(n) {
    for (var i=n;i>=0;i--){
        if (i%2===0) {
            console.log( i + "is even")}
        else {
            console.log( i + "is odd")}
        
        }
    
}
reverseIterateAndLogWithFor(5)

//  3-

function weirdDivisionWithFor(n) {
    for(var i =1 ;i<n ;i++){
        if (i%3===0) {
            console.log( "Julia")}
        else if (i%5===0){
            console.log( "James")}
        else if (i%3===0 && i%5===0){
                console.log( "JuliaJames")}
        else 
                {console.log(i)}
    }
}
weirdDivisionWithFor(15)

function weirdDivisionWithwhile(n) {
    var i =1
    while( i<n ){
        if (i%3===0) {
            console.log( "Julia")}
        else if (i%5===0){
            console.log( "James")}
        else if (i%3===0 && i%5===0){
                console.log( "JuliaJames")}
        else 
                {console.log(i)}
                ;i++}
}
weirdDivisionWithwhile(10)
// 5

function factorialRecursively(number){
    if(number===0){
        return 1
    }
    return number*factorialRecursively(number-1)
}

// 6

//for loop//
function rangeFor(min,max){
    var array=[]
    var j=0
    for(var i=min;i<=max;i++){
        array[j]=i
        j=j+1
    }
    return array
}
//while loop//
function rangeWhile(min,max){
    var array=[]
    var i=min
    var j=0
    while(i<=max){
        array[j]=i
        i=i+1
        j=j+1
    }
    return array
}

// 7
//for loop//
function reverseWithFor(str) {
    var str1=''
    for(var i=0;i<str.length;i++){
        str1=str[i]+str1
    }
    str=str1
    return str
}

//while loop//
function reverseWithWhile(str) {
    var str1=''
    var i=0
    while(i<str.length){
        str1=str[i]+str1
        i=i+1
    }
    str=str1
    return str
}

//recusrion//
function reverseRecursively(str) {
    if(str==='' || str.length===0){
        return str
    }
    return reverseRecursively(str)
}
// 8
function addDigits(num) {
    var sum=0
    var str=num.toString()
    for(var i=0;i<=str.length;i++){
        sum=parseInt(i)
    }
    return sum
}

// 9
function fibRecursive(number) {
    if(number===0 || number===1){
        return 1
    }
    return fibRecursive(number-1)+fibRecursive(number-2)
}

// 10
function firstDigit(str) {
    var i=0
    while(i<str.length){
    number=parseInt(str[i])
    if(number >=0 && number<=9){
        return number
    }
    i=i+1
    }
}

// 11
function remove(array,element){
    var arr=[]
    var j=0
    for(var i=0;i<array.length;i++){
        if(array[i]!==element){
            arr[j]=array[i]
            j=j+1
        }
    }
    return arr
}

// 12

function average(arrOfNumbers){
    var sum=0
    for(var i=0;i<arrOfNumbers.length;i++){
        sum=sum+arrOfNumbers[i]
    }
    return sum/arrOfNumbers.length
}

// 13
function findMax(str){
    var max=str[0]
    for(i=1;i<str.length;i++){
        if(str[i]>max){
            max=str[i]
        }
    }
    return max
}

// 14
function evenDigitsOnly(input){
    var i=0
    while(i<input.length){
        number=parseInt(input[i])
        if(number%2!==0){
            return false
        }
        i=i+1
    }
        return true
}

// 15
function palindrome(str){
    var j=str.length-1
    var i=0
    while(i<str.length/2){
    if(str[i]!==str[j]){
        return false
    }
    i=i+1
    j=j-1
    }
    return true
}

// 16
function firstDuplicate(array){
    var dup=0
    var stat=true
    for(var i=0;i<array.length;i++){
        for(var j=0;j<array.length;j++){
            if(array[i]===array[j]&& i!==j){
                return array[i]
            }
            stat=false
        }
        }
    if(stat===false){
        return 'no duplicates'
    } }

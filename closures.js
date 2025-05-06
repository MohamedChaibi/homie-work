// //Basic Requirements
// //0. Our closures is :
function makeAccount(initial) {
    var balance = initial;
    return {
        withdraw: function(amount) {
        if (balance - amount >= 0) {
        balance = balance - amount;
        return 'Here’s your money: $' + amount;
    }
    return 'Insufficient funds.';
},
        deposit: function(amount) {
        balance = balance + amount;
        return 'Your balance is: $' + balance;}
        
    };
}
// //1. Modify the makeAccount function from the lecture so that the returned object contains an additional key called checkBalance, the value of which is a function that takes no arguments and returns a string representing the current balance. You should be able to use it like this:
function makeAccount(initial) {
    var balance = initial;
    return {
        withdraw: function(amount) {
        if (balance - amount >= 0) {
        balance = balance - amount;
        return 'Here’s your money: $' + amount;
    }
    return 'Insufficient funds.';
},
        deposit: function(amount) {
        balance = balance + amount;
        return 'Your balance is: $' + balance;},
        checkBalance:function (){
            return "'Your balance is: $"+balance;}
        }
}
//2. Let's revisit the counter exercise. Currently, makeCounter only allows us to count up -- what if we want to count down too? Modify makeCounter so that it returns an object that contains two keys: up and down, each of which has functions as values. up should make the count increase, and down should make the count decrease
function count(initial){
    var count=initial
    return {
        up:function (){
            count=count+1
            return "this is the new value : "+count
        },
        down:function(){
            count--
            return "this is the new value : "+count
        }
    }
}
var start=count(100)
console.log(start.up())
console.log(start.up())
console.log(start.down())
//3. Give your counter a reset capability as well, that resets the count back to its initial value.
function count(initial){
    var count=initial
    return {
        up:function (){
            count=count+1
            return "this is the new value : "+count
        },
        down:function(){
            count--
            return "this is the new value : "+count
        },
        rest:function(){
            count=initial
            return "this is the initial value : "+count
        }
    }
}
var start=count(100)
console.log(start.up())
console.log(start.up())
console.log(start.up())
console.log(start.rest())
//More Practice
// //1. Remember the guessing game from the first week? When we wrote the first version of the game, we didn't know about closures and stored all of our state (variables) in the global scope. Rewrite the guessing game to take advantage of closures so that you can create multiple games. Here is some starter code:
function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
    }
var upperBound = 5;
function guessMyNumber(n) {
    if (n > upperBound) {
        return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
    } else if (n === randInt(upperBound)) {
        return 'You guessed my number!';
        }
    return "Nope! That wasn t it "
}
function rand(upperbound) {
    var random=Math.floor(Math.random() * (upperbound + 1))
    function guessing(n){
        if (n > upperbound) {
            return 'Out of bounds! Please try a number between 0 and ' + upperbound + '.';
        } 
    else if (n ===random) {
            return 'You guessed my number! exactly '+random
        }
        return "Nope! That wasn t it but it was : "+random  
    }
    return guessing
}
var select=rand(10)
console.log(select(10))
//2. You will need to define a function makeGame, and at the minimum, you should be able to play the game like this
function makeGame(upperbound) {
    var random=Math.floor(Math.random() * (upperbound + 1))
    console.log("the upper bound is "+upperbound)
    var highscore=5
    var chance=0
    return {
        play:function (n){
        if (chance===5) {
            return "you reach the maximum of chances please reset the game"
        }
        if (n > upperbound) {
            return 'Out of bounds! Please try a number between 0 and ' + upperbound + '.'
            
        } 
    else if (n ===random) {
            chance++
            if (chance<highscore){
                highscore=chance
                return "you guessed my number and you set new highscore :"+highscore
            }
            return 'You guessed my number! exactly '+random
            
    }
        chance++
        if (chance===5) {
            console.log("Nope! That wasn t it")
            return "you reach the maximum of chances please reset the game"
        }
        return "Nope! That wasn t it"

        },
        over:function(){
            return "you give up and the random number was :"+random
        },
        numGuesses:function(){
            return"you have now done "+chance+" guesses"
        },
        reset:function(){
            random=Math.floor(Math.random() * (upperbound + 1))
            chance=0
            return "the game is reset and now you have new random number"
        },
        score:function(){
            return "the best score for now is "+highscore
        }

    }
}   
var game=makeGame(10)
console.log(game.play(2))
//3. Write a function someEven that, given an array of numbers as an argument, returns true if at least one of the numbers is even.
function someEven(array){
    for (var i=0;i<array.length;i++){
        if (array[i]%2===0){
            return true
        }
    }
    return false
}
console.log(someEven([1,5,3,8]))
//4. Write the functions someOdd, somePositive, and someNegative that work similarly to someEven.
function someOdd(array){
    for (var i=0;i<array.length;i++){
        if (array[i]%2!==0){
            return true
        }
    }
    return false
}
console.log(someOdd([2,6,10,11]))


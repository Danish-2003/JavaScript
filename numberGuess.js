const prompt = require("prompt-sync")()


let Guess = ((min,max)=>{
    return Math.floor(Math.random()*max-min+1)+min
})
let randomNum = Guess(1,100)

let a  = prompt("Guess a number In between 1 to 100 ");


let count = 1;

while(a!=randomNum){

    if(a<randomNum){
        console.log("Guess Is Less than The Actuall Num")
    }
    else if(a>randomNum){
        console.log("Guess Is Greater than The Actuall Num")
    }
    a = prompt("Guess again ")
    count++

}

let score = (100 - count)
console.log(`YOu Guessed It right:- ${randomNum}`)
console.log(`Your Score is:- ${score}`)
console.log(`Number of guesses:- ${count}`)
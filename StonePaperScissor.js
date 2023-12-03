const prompt = require("prompt-sync")()

let StonePaperScissor = ()=>{
    let guesses = ['stone','paper','scissor']
    let CompGUess =  Math.floor(Math.random()*3)
    return guesses[CompGUess];
} 
let tryAgain = true;

while(tryAgain){
let theGUess = StonePaperScissor();

let userguess = prompt("Guess One = (stone,paper,scissor) ").toLowerCase();
if(userguess==theGUess){
    console.log("Ahh Its a tie !")
}
else if(userguess==='stone'&&theGUess==='scissor'||userguess==='scissor'&&theGUess==='paper'||userguess==='paper'&&theGUess==='stone'){
    console.log("You Win !")
}else if (userguess===theGUess){
    console.log("it's tie")
}else{
    console.log("you loose !")
let playAgainButton = prompt("Want to Play Again ? ").toLowerCase();
if(playAgainButton ==="yes"){
    tryAgain = true;
}else{
    break;
}
}

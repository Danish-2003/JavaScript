const prompt = require("prompt-sync")()

let SnakeWaterGun = ()=>{
    let guesses = ['snake','water','gun']
    let CompGUess =  Math.floor(Math.random()*3)
    return guesses[CompGUess];
} 
let tryAgain = true;

while(tryAgain){
let theGUess = SnakeWaterGun();

let userguess = prompt("Guess One = (Snake,Water,Gun) ").toLowerCase();
if(userguess==theGUess){
    console.log("Ahh Its a tie !")
}
else if(userguess==='snake'&&theGUess==='water'||userguess==='gun'&&theGUess==='snake'||userguess==='water'&&theGUess==='gun'){
    console.log("You Win !")
}else{
    console.log("You Loose!")
}
let playAgainButton = prompt("Want to Play Again ? ").toLowerCase();
if(playAgainButton ==="yes"){
    tryAgain = true;
}else{
    break;
}
}

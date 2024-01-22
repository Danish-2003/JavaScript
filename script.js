let buttons = document.querySelectorAll(".box");
const restartbtn = document.querySelector(".restart");
let newGameBtn = document.querySelector(".newGame");
let messageContaint = document.querySelector(".mssgContainer");
let message = document.querySelector("#mssg");


let turnO = true;
const  winningPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [6,7,8],
];
 

newGameBtn.addEventListener("click",()=>{
  resetButton();
})

restartbtn.addEventListener("click",()=>{
  resetButton();

})

const resetButton = ()=>{
  turnO = true;
  enableButtons();
  messageContaint.classList.add("hide");


} 

buttons.forEach((box)=>{

  box.addEventListener("click",()=>{
    if(turnO){
      box.innerText = "O";
      turnO = false;
    }
    else{
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  })
})

let showWinner = (winner)=>{
  mssg.innerText = `Congratulation,The Winner is ${winner}`
  messageContaint.classList.remove("hide");
  disableButtons();
}

const disableButtons = ()=>{
  for(let box of buttons){
    box.disabled = true;
  }
}

const enableButtons = ()=>{
  for(let box of buttons){
    box.disabled = false;
    box.innerText = "";

  }
}


const checkWinner = ()=>{

  for(let pattern of winningPattern){

    let posi1val =  buttons[pattern[0]].innerText;
    let posi2val =  buttons[pattern[1]].innerText;
    let posi3val =  buttons[pattern[2]].innerText;

    if(posi1val !="" && posi2val != "" && posi3val != ""){
      if(posi1val === posi2val && posi2val === posi3val){
        console.log("Winner is",posi1val)
        showWinner(posi1val);
        break;
      }
    }
  }
}
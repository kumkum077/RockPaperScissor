let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg") //accessing msg so that whoever will win it will print on msg
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);// to generate any random number 0-2 (for array index)
    return options[randIdx];
};

const drawGame=()=>{      //arrow function to print game was draw
    
    msg.innerText="Game was Draw.Play again!";
    msg.style.backgroundcolor="#081b31";
};

const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        
        msg.innerText=`You lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }

}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    //generate computer choice
    const compchoice=genCompChoice();
    console.log("comp choice=",compchoice);

    if(userchoice===compchoice){        //game is draw
        drawGame();}
        else{
            let userWin=true;
            if(userchoice==="rock"){  // here we know that computer choice shouldnot be rock beacuse computer choice is rock which is equal to userchoice then the game will draw, it will not come in this condition.
               // compchoice- scissors,paper
               userWin=compchoice==="paper"? false:true;
            }else if(userchoice==="paper"){
                //compchoice-rock,scissors
                userWin=compchoice==="scissor"? false:true;
            }else{
                //compchoice-rock,paper
                userWin=compchoice==="rock"? false:true;
            }
            showWinner(userWin,userchoice,compchoice);
        }

}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log(userchoice," was clicked");
        playgame(userchoice);

    })
})
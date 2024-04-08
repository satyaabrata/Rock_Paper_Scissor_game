let userscore = 0;
let compscore = 0;
let my_Winscore = document.querySelector("#user-score")
let comp_WinScore = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".box")
const msg = document.querySelector("#msg")
const reset_btn = document.querySelector("#reset-btn")

const genCompChoice = () => {
    // rock paper scissor
    const options = ["rock", "paper", "scissor"]
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx]
}

const drawgame = () => {
    msg.innerText = "Game Draw"
    msg.style.backgroundColor = "Grey";
}


const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        my_Winscore.innerText = userscore;
        msg.innerText = `You Win! ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        comp_WinScore.innerText = compscore;
        msg.innerText = `You Lose ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userchoice) => {
    //Generate computer choice
    const compchoice = genCompChoice();
    if (userchoice === compchoice) {
        // drawgame
        drawgame();
    }
    else {
        if (userchoice === "rock") {
            // scissor, paper
            userWin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            // rock, Scissor
            userWin = compchoice === "scissor" ? false : true;
        }
        else {
            // rock, paper
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});

reset_btn.addEventListener("click", () => {
    // Reset the scores and update the UI
    userscore = 0;
    compscore = 0;
    my_Winscore.innerText = userscore;
    comp_WinScore.innerText = compscore;
    msg.innerText = "Play Your Move";
});


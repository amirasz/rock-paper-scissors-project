const choices = ["rock", "paper", "scissors"];
const userChoice = prompt("Choose rock, paper, scissors");
if (userChoice) {
    console.log(`Your choose: ${userChoice}`);
}else {
    console.log("you cheated!");
};
const randomNumber = Math.floor(Math.random() * 3);
const computerChoice = choices[randomNumber];
console.log(`computer choice: ${computerChoice}`);
if (userChoice === computerChoice) {
    console.log("It's a tie");
}else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
        console.log("You win!")
    }else {
        console.log("You lose!")
    }
}else if (userChoice === "paper") {
    if (computerChoice === "rock") {
        console.log("You win!")
    }else {
        console.log("You lose!")
    }
}else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
        console.log("You win!")
    }else {
        console.log("You lose!")
    }
};

// else if(userChoice === "rock" && computerChoice === "scissors") {
//     console.log("you win!");
// }else if (userChoice === "rock" && computerChoice === "paper") {
//     console.log("You lose!");
// }else if (userChoice === "paper" && computerChoice === "scissors") {
//     console.log("You lose!");
// }else if (userChoice === "paper" && computerChoice === "rock") {
//     console.log("You win!");
// }else if (userChoice === "scissors" && computerChoice === "paper") {
//     console.log("You win!")
// }else if (userChoice === "scissors" && computerChoice === "rock") {
//     console.log("You lose!")
// };
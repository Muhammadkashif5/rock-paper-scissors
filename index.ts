#! /usr/bin/env node

import inquirer from "inquirer"
import { randomInt } from "crypto"; 
import chalk from "chalk";

console.log(chalk.bgAnsi256(255)('_█'.repeat(40)));
console.log(chalk.blue.bold("\n                              ROCK-PAPER-SCISSORS GAME\n"));
console.log(chalk.bgAnsi256(255)('_█'.repeat(40)));

const options = ["rock", "paper", "scissors"];
const attempts = 3; // Maximum attempts allowed

for (let i = 0; i < attempts; i++) {
    const playerInput = await inquirer.prompt([
        {
            message: "Select one of the choice",
            type: "list",
            name: "choice",
            choices: options.concat("QUIT"), // Add "quit" option
        },
    ]);
    if (playerInput.choice === "QUIT") {
        console.log("Thanks for playing!");
        break;
    }    

    const computerChoice = options[randomInt(0, options.length)];

    console.log(chalk.blue(`Player_1 (You chose) : ${playerInput.choice}`));
    console.log(chalk.blue(`Player_2 (Computer chose) : ${computerChoice}`));

    if (playerInput.choice === computerChoice) {
        console.log(chalk.bgRed("It's a tie!"));
    } else if (
        (playerInput.choice === "rock" && computerChoice === "scissors") ||
        (playerInput.choice === "paper" && computerChoice === "rock") ||
        (playerInput.choice === "scissors" && computerChoice === "paper")) {
        console.log(chalk.bgGreen("Congratulation! You win the game!"));
    } else {
        console.log(chalk.bgGrey("Sorry, You lose the game!"));
    }
};
//! NOTE: npm start to run ts-node (will run compilation step AND execute program)
import prompt from "prompt-sync";
const getInput = prompt({ sigint: true });

let input = getInput("What is your name?");

console.log(input);

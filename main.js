#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000; //Dollar
let myPin = 1555;
//print welcome message 
console.log(chalk.blue("\n \tWelcome To Sania's ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellow("enter your pin"),
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("correct pin code!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.yellow("please select one option"),
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.yellow("enter your amount"),
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red("Insufficient Balance"));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log("your remainig balance is:" + myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
}
else {
    console.log(chalk.red("Incorrect Pin Code"));
}

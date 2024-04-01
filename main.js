#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Todo_List = [];
let Conditions = true;
console.log(chalk.yellow.bold("\n \tWellcome to Code-With-Ayan -  Todo_List Application \n"));
while (Conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.magenta("Enter Your New Task\n")
        }
    ]);
    Todo_List.push(addTask.task);
    console.log(chalk.green.bold(`\n${addTask} Task Added in Todo_List Successfully\n`));
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.yellow("Do You want to add more task ?"),
            default: "False"
        }
    ]);
    Conditions = addMoreTask.addmore;
}
console.log(chalk.magenta.bold("Your Updated Todo-List :", Todo_List));

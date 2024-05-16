#! usr/bin/env node
import inquirer from "inquirer"
const counter = (paragraph:string) => paragraph.replace(/\s/g, '').length

async function start(counter:(text:string) => number) {
    do{
        let ans = await inquirer.prompt([ { type: 'input', name: 'answer', message: "Write your paragraph.."} ])
        console.log(counter(ans.answer))}
while(true)
}
start(counter)
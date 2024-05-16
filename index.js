import inquirer from "inquirer";
const counter = (paragraph) => paragraph.replace(/\s/g, '').length;
async function start(counter) {
    do {
        let ans = await inquirer.prompt([{ type: 'input', name: 'answer', message: "Write your paragraph.." }]);
        console.log(counter(ans.answer));
    } while (true);
}
start(counter);

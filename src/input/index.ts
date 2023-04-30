import inquirer from "inquirer";
const log = console.log

function interpreter(input) {
    const deRaw = input.toString();
    switch (deRaw) {
        case '3x+1':
            log('Please enter a number.')
            return inquirer.prompt([{
                name: 'number',
                type: 'number',
                message: 'Enter a number'
            }]).then( answer => {
                console.log(answer.number)
            })
    }
}

export default interpreter;
import inquirer from 'inquirer';
import interpreter from './input/index';


function app() {
    try {
        inquirer
            .prompt([{
                type: 'input',
                name: 'input'
            }])
            .then(async (answer) => {
                console.log(answer.input);
                interpreter(answer.input)
            })
    } catch (error) {
        console.error(error);
    }
}

export default app;
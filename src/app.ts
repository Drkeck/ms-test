import inquirer from 'inquirer';


function app() {
        inquirer
            .prompt([{
                type: 'input',
                name:'input'
            }])
            .then(async (answer) => {
                console.log(answer.input);
            })

}

export default app;
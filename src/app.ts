import express from 'express';
// import inquirer from 'inquirer';

const server = express();
const port = 3000;

function app() {
    server.listen(port, () => {
        console.log(`listening on port ${port}`);
        // inquirer
        //     .prompt([{
        //         type: 'list',
        //         name: 'userInput',
        //         message: 'what example would you like to visit',
        //         choices: ['math', 'misc functions', 'strings']
        //     }])

    })
}

export default app;
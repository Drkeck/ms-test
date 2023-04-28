import express from 'express';

const server = express();
const port = 3000;

function app() {
    server.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
}

export default app;
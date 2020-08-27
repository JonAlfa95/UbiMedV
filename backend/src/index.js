require('dotenv').config()

const app = require('./app');

PORT = 4000

async function main() {
    //INICIANDO SERVIDOR
    await app.listen(PORT, () => {
        console.log('servidor en el puerto', PORT);
    });
}

main();
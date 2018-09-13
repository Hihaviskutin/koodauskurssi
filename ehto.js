const readline = require( "readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("mikä sinun nimesi on?", (nimi) => {
    console.log(`Terve, ${nimi} !`);
    rl.close();
});




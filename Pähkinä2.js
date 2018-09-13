
const readline = require( "readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("mikä sinun nimesi on?", (nimi) => {
rl.question("mistä olet kotoisin?", (kaupunki) => {


    console.log(`Terve, ${nimi} ${kaupunki} !`);
    rl.close();
});
});

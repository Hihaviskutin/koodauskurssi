const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var kysymys = "Pidätkö jäätelöstä "
var oikea_vastaus = "Kyllä?"

rl.question(kysymys, (kayttajan_vastaus) => {
    if (kayttajan_vastaus == oikea_vastaus) {
        console.log (oikea_vastaus + "minä myös!");
    }
    else
    {
        console.log ('Kannattaisiko opetella tykkäämään ')
    }
  rl.close();
    });

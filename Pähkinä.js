const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var kysymys = "Sataako ulkona? "
var oikea_vastaus = "Kyllä"
var oikea_vastaus2 = "kyllä"

rl.question(kysymys, (kayttajan_vastaus) => {
    if (kayttajan_vastaus == oikea_vastaus,oikea_vastaus2) {
        console.log ("Muista ottaa sateenvarjo mukaan!");
    }
    else
    {
        console.log ('Sepä kiva, eiköhän se kohta ala satamaan')
    }
  rl.close();
    });

const fs = require ('fs');
const texto = fs.readFileSync('entrada.txt', 'utf8');
const textoMaiusculo = texto.toUpperCase();

fs.writeFileSync('saida.txt', textoMaiusculo);

console.log('Arquivo convertido com sucesso!');
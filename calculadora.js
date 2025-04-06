const numero1 = parseFloat(process.argv[2]);
const operacao = process.argv[3];
const numero2 = parseFloat(process.argv[4]);
let resultado;

if (operacao === '+'){
    resultado = numero1 + numero2;
} else if (operacao === '-') {
    resultado = numero1 - numero2;
} else if (operacao === '*') {
    resultado = numero1 * numero2;
} else if (operacao === '/') {
    resultado = numero1 / numero2;
} else {
    console.log('Operação inválida.');
    process.exit(1);
}
console.log('Resultado: '+ resultado);
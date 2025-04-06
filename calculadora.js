const numero1 = parseFloat(Process.argv[2]);
const operacao = Process.argv[3];
const numero2 = parseFloat(Process.argv[4]);
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
console.log('Resultado: '+ resultado +'.');
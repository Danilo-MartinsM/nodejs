const http = require('http');
const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain ; charset=utf-8' });
    res.end('Olá, mundo!');
});
const porta = 3000;
servidor.listen(porta, () => {
    console.log('Servidor rodando em http://localhost:'+ porta +'/');
});
const http = require('http');
const fs = require ('fs');
const path = require ('path');

const servidor = http.createServer((req, res) => {
    const caminhoArquivo = path.join(__dirname, 'index.html');

    fs.readFile(caminhoArquivo, (erro, conteudo) => {
        if (erro) {
            res.writeHead(500, {'Content-Type' : 'text/plain ; charset=utf-8'});
            res.end('Erro interno do servidor.');
        } else {
            res.writeHead(200, {'Content-Type' : 'text/html ; charset=utf-8'})
            res.end(conteudo);
        }
    });
});
const porta = 3000;

servidor.listen(porta, () => {
    console.log('Servidor rodando em http://localhost:'+ porta +'/');
});
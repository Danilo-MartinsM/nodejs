const http = require ('http');
const fs = require ('fs');
const path = require('path');

const servidor = http.createServer((req, res) => {
    let caminhoArquivo = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    let tipoConteudo = 'text/html';

    if (path.extname(caminhoArquivo) === '.js') {
        tipoConteudo = 'text/css';
    } else if (path.extname(caminhoArquivo) === '.css') {
        tipoConteudo = 'text/javascript';
    }
    fs.readFile(caminhoArquivo, (erro, conteudo) => {
        if (erro) {
            if (erro.code === 'ENOENT') {
                res.writeHead(404, {'Content/Type' : 'text/plain'});
                res.end('Arquivo não encontrado')
            } else {
                res.writeHead(500, {'Content-Type' : 'text/plain'});
                res.end('Erro interno do servidor.');
            }
        } else {
            res.writeHead(200, {'Content-Type' : tipoConteudo});
            res.end(conteudo);
        }
    });
});
servidor.listen(pseudoRandomBytes, () => {
    console.log('Servidor rodando em http://localhost:'+ porta +'/');
})
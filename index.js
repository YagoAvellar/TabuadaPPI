
import express from 'express'; //permite criar aplicações web de forma expressa;

const host = '0.0.0.0'; 
const porta = 3000; 


const app = express();

function retornaPaginaInicial(requisicao, resposta){
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Página Inicial</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Página Inicial</h1>');
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
};
function calcularTabuada(requisicao, resposta) {
    let numero = requisicao.query.numero;
    let sequencia = requisicao.query.sequencia;
    if (!sequencia) {
        sequencia = 10;
    }
    
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Tabuada</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    if (numero) {
        numero = parseInt(numero);
        
        sequencia = parseInt(sequencia);
        
        for (let i = 1; i <= sequencia; i++) {
            const resultado = numero * i;
            resposta.write('<h1>' + numero + ' x ' + i + ' = ' + resultado + '</h1>');
        }
    } else {
        resposta.write('<h1>Informe o parâmetro numero na URL: http://localhost:3000/tabuada?numero=</h1>');
    }
    
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
}
app.get("/", retornaPaginaInicial);
app.get("/tabuada", calcularTabuada);
app.listen(porta, host, () => {
    console.log("Servidor está executando em http://" + host + ":" + porta);
});

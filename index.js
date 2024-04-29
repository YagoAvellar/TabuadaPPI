//Pediram para nós desenvolver uma aplicação web capaz de converter graus Celcius em Fahrenheit
import express from 'express'; //permite criar aplicações web de forma expressa;

//O ip 0.0.0.0 representa todas as placas de rede do computador que está executando essa aplicação
const host = '0.0.0.0'; 
//A porta identifica o programa  dentre tantos outros programas 
//que estão em execução no computador que esteja executando essa aplicação.
const porta = 3000; 


const app = express();

//requisição vem da Internet
//A resposta é enviada para a Internet para quem fez a requisição
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
    // Extrair da URL da requisição o número para o qual a tabuada será calculada
    let numero = requisicao.query.numero;
    let sequencia = requisicao.query.sequencia;
    
    // Verificar se foi fornecido um parâmetro sequência e definir para 10 se não houver
    if (!sequencia) {
        sequencia = 10;
    }
    
    // Escrever a estrutura básica do HTML na resposta
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Tabuada</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    
    // Verificar se um número foi fornecido na URL
    if (numero) {
        // Converter o número fornecido para um valor inteiro
        numero = parseInt(numero);
        
        // Converter a sequência fornecida para um valor inteiro
        sequencia = parseInt(sequencia);
        
        // Calcular e exibir a tabuada do número fornecido
        for (let i = 1; i <= sequencia; i++) {
            const resultado = numero * i;
            resposta.write('<h1>' + numero + ' x ' + i + ' = ' + resultado + '</h1>');
        }
    } else {
        // Se nenhum número foi fornecido na URL, exibir uma mensagem solicitando que um número seja fornecido
        resposta.write('<h1>Informe o parâmetro numero na URL: http://localhost:3000/tabuada?numero=</h1>');
    }
    
    // Fechar a estrutura HTML na resposta
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
}
//Javascript, além de valores dos tipos: string, decimal, inteiro,booleano
//também permite que funções sejam passadas como parâmetros para outras funções.
app.get("/", retornaPaginaInicial);
app.get("/tabuada", calcularTabuada);
//( ) => {}  = função anônima conhecida como arrow function
app.listen(porta, host, () => {
    console.log("Servidor está executando em http://" + host + ":" + porta);
});

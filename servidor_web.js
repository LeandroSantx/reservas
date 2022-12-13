var http = require('http');
//cria um objeto na variável fs
var fs = require('fs');
var server = http.createServer(function(request, response){

    
//lê o arquivo e se não der erro atribui o arquivo à variavel html
fs.readFile('condominio/index.html', function(err, html){
//escreve o arquivo dentro da variavel html na tela
response.write(html);
response.end();
});
});
server.listen(3000, function(){
console.log('Executando Site Pessoal');
});
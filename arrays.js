let carros = ['Onix', 'Argos', 'Track', 'Polo', 'Sandero','Virtus','Tcross']

carros.forEach(function (carro, indice) {
    console.log(carro,indice)

})

var pos = carros.indexOf('Track');
console.log(pos);

carros.push('Gol');
console.log(carros);

carros.unshift('Onix');
console.log(carros);

carros.shift();
console.log(carros);
carros.pop()

function executar Passo1(nome, callback){
var acao = "Buscar café -> " + nome ;
callback(acao);
}

function executaPasso2(acao){
    console.log(acao);
    console.log("Fazer ligação enquanto toma cafe...");

}

executarPasso1('Pedro ', executaPasso2)
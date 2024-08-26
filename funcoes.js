
//1.Função Callback


// function executarPasso1(nome, outraFuncao){
// var acao = "Buscar café -> " + nome ;
// outraFuncao(acao);
// }

// function executaPasso2(acao){
// console.log(acao);
// console.log("Fazer ligação enquanto toma cafe...");

// }
// executarPasso1('Pedro ', executarPasso2)




// 2.Função Anonima  
// function executarPasso1(nome, outraFuncao){
    // var acao = "Buscar café -> " + nome;
    // outraFuncao(acao)
// }

// function executarPasso1("Pedro" , (acao) => {
    // console.log(acao);
    // console.log("Fazer ligação enquanto toma cafe...");
// }       
// );

// Funcao para executar o tempo setTimeout funcao nativa do javascript

//function verificaServidor() {
//console.log('verificando servidor...')
//}

//setTimeout(verificaServidor, 1000);

// 2.Criando uma funcao Anonima com dois parametros
//  
//setTimeout(() => {
//console.log('verificando servidor...')    
//}, 10000);





//setInterval(() => {

    //console.log('verifica servidor')
// }, 3000);


let carros = ['Gisele', 'Pedro',  'Adriana', 'Pedro',  'Alex', 'Berg', 'Marina', 'Pedro']

alunos.forEach(function (aluno, indice){
    console.log(aluno, indice)
})

const alunosAtualizados = alunos.map((aluno, index) => {
    return aluno + ' -> '+ index;
 });

console.log(alunosAtualizados)

const alunos = alunos.filter(aluno => {
    return aluno !== 'Pedro'
}
);
console.log(alunos)




const { criar, listar, atualizar, remover } = require("./cursos.js");

const prompt = require("prompt-sync")()

console.log("Bem vindo(a) ao cadastro de cursos!");

while(true) {
    
    console.log(`
    '1' para adicionar cursos;
    '2' para listar;
    '3' para atualizar;
    '4' para remover;
    '5' para sair.
    `);
    const op = prompt("Selecione uma opção: ");

    switch(op) {
        case "1": criar();
        break;
        case "2": listar()
        break;
        case "3": atualizar();
        break;
        case "4": remover();
        break;
        case "5": console.log("Até logo!");
        process.exit();
        break;
        default: console.log("Opção inválida.")
        break;
    }
}
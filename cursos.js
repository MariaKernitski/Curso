const prompt = require("prompt-sync")();

const cursos = [];

const modelo = () => {
  const nome = prompt("Digite o nome do curso: ");
  const duracao = prompt("Digite a duração do curso: ");
  const professores = [];

  while (true) {
    const prof = prompt(
      "Digite o nome do professor, ou digite 'fim' para encerrar: "
    );

    if (prof == "fim") {
      break;
    } else {
      professores.push(prof);
    }
  }

  const alunos = [];

  while (true) {
    const aluno = prompt(
      "Digite o nome do aluno, ou digite 'fim' para encerrar: "
    );

    if (aluno == "fim") {
      break;
    } else {
      alunos.push(aluno);
    }
  }

  const materias = [];

  while (true) {
    const materia = prompt(
      "Digite o nome da matéria, ou digite 'fim' para encerrar: "
    );

    if (materia == "fim") {
      break;
    } else {
      materias.push(materia);
    }
  }

  if (
    nome != "" &&
    duracao > 0 &&
    professores.length >= 0 &&
    alunos.length >= 0 &&
    materias.length >= 0
  ) {
    return {
      nome,
      duracao,
      professores,
      alunos,
      materias,
    };
  }
  
  console.log("Dados inválidos");
};

const criar = () => {
  const novo = modelo();

  if (novo) {
    cursos.push(novo);
    console.log("Curso adicionado com sucesso!");
  }
};

const listar = () => {
  cursos.forEach((el, i) => {
    //el de elemento
    console.log(`${i + 1} - 
    Nome: ${el.nome}
    Duração: ${el.duracao}
    Professores: ${el.professores}
    Alunos: ${el.alunos}
    Matérias: ${el.materias}`);
  });
};

const atualizar = () => {
  listar();

  const indice = prompt("Digite o índice do curso que deseja atualizar: ") - 1;

  const novo = modelo();

  if (indice >= 0 && indice < cursos.length) {
    cursos[indice] = novo;
    console.log("Curso atualizado com sucesso!");
  } else {
    console.log("Índice inválido.");
  }
};

const remover = () => {
  listar();

  const indice = prompt("Digite o índice do curso que deseja remover: ") - 1;

  if (indice >= 0 && indice < cursos.length) {
    cursos.splice(indice, 1);
    console.log("Curso removido com sucesso!");
  } else {
    console.log("Índice inválido.");
  }
};

module.exports = {
  criar,
  listar,
  atualizar,
  remover,
};

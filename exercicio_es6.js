const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 7.0 },
    { nome: "Carlos", nota: 4.2 },
    { nome: "Daniela", nota: 5.8 }
];


function filtraAlunosMaiorOuIgualASeis(alunos){
    return alunos.nota >= 6;
}
const alunosAprovados = alunos.filter(filtraAlunosMaiorOuIgualASeis)
console.log(alunosAprovados);
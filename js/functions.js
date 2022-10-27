'use strict'

const getCursos = async () => {

    const url = `http://localhost:8080/cursos/${curso}`

    const response = await fetch(url)
    const listaCursos = await response.json()

    return listaCursos
}

const getStatus = async () => {

    const url = `http://localhost:8080/statos/${statos}`

    const response = await fetch(url)
    const listaStatus= await response.json()

    return listaStatus
}

const getMatricula = async (matricula, curso) => {

    const url = `http://localhost:8080/status/${matricula}/${curso}`

    const response = await fetch(url)
    const aluno = await response.json()

    return aluno
}

const getAlunosCurso = async (curso) => {

    const url = `http://localhost:8080/alunos/${curso}`

    const response = await fetch(url)
    const listaAlunos = await response.json()

    return listaAlunos
}





export {
    getMatricula,getStatus,getCursos,getAlunosCurso
    
}
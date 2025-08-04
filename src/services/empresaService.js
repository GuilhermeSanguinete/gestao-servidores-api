import * as empresaRepository from '../repositories/empresaRepository.js';

export async function listaTodasEmpresas() {
    const empresas = await empresaRepository.getListaEmpresas();
    return empresas;
}

export async function cadastraEmpresa(empresa) {
    const validator = validaEmpresa(empresa);

    console.log(validator.status);

    if(validator.status === false){
        const err = new Error(validator.message);
        err.statusCode = 400;
        throw err;
    }
    
    const resultado = await empresaRepository.postEmpresas(empresa);

    return resultado;
}

export async function alteraEmpresa(empresa) {
    const resultado = await empresaRepository.putEmpresas(empresa);
    return resultado;
}

function validaEmpresa(empresa) {
    const erros = [];

    if (!empresa.nome) erros.push("Nome é obrigatório");
    if (!empresa.setor) erros.push("Setor é obrigatório");
    if (!empresa.cnpj) erros.push("CNPJ é obrigatório");

    return {
        status: erros.length === 0,
        message: erros.join(', ')
    };
}
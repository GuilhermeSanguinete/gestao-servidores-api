import * as empresaRepository from '../repositories/empresaRepository.js';

export async function listaTodasEmpresas() {
    const empresas = await empresaRepository.getListaEmpresas();
    return empresas;
}

export async function getEmpresasPorId(id) {
    const resultado = await empresaRepository.getEmpresasPorId(id);
    return resultado;
}

export async function getEmpresasPorNome(nome) {
    const resultado = await empresaRepository.getEmpresasPorNome(nome);
    return resultado;
}

export async function getEmpresasPorCNPJ(cnpj) {
    const resultado = await empresaRepository.getEmpresasPorCNPJ(cnpj);
    return resultado;
}

export async function getEmpresasPorSetor(setor) {
    const resultado = await empresaRepository.getEmpresasPorSetor(setor);
    return resultado;
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

export async function deletaEmpresa(id) {
    const resultado = await empresaRepository.deleteEmpresas(id);
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
import * as empresaRepository from '../repositories/empresaRepository.js';
import { validarEmpresa } from '../validations/empresaValidation.js';

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}

export async function listarEmpresas() {
  return await empresaRepository.listarEmpresas();
}

export async function buscarEmpresaPorId(id) {
  return await empresaRepository.buscarEmpresaPorId(id);
}

export async function buscarEmpresasPorNome(nome) {
  return await empresaRepository.buscarEmpresasPorNome(nome);
}

export async function buscarEmpresasPorCNPJ(cnpj) {
  return await empresaRepository.buscarEmpresasPorCNPJ(cnpj);
}

export async function buscarEmpresasPorSetor(setor) {
  return await empresaRepository.buscarEmpresasPorSetor(setor);
}

export async function criarEmpresa(empresa) {
  const { status, message } = validarEmpresa(empresa);
  if (!status) {
    throw new ValidationError(message);
  }
  return await empresaRepository.criarEmpresa(empresa);
}

export async function atualizarEmpresa(empresa) {
  const affectedRows = await empresaRepository.atualizarEmpresa(empresa);
  return affectedRows > 0;
}

export async function deletarEmpresa(id) {
  const affectedRows = await empresaRepository.deletarEmpresa(id);
  return affectedRows > 0;
}

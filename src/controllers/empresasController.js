import * as empresaService from '../services/empresaService.js';

export async function listarEmpresas(req, res) {
  try {
    const empresas = await empresaService.listarEmpresas();
    res.json(empresas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar empresas' });
  }
}

export async function buscarEmpresaPorId(req, res) {
  try {
    const id = req.params.id;
    const empresa = await empresaService.buscarEmpresaPorId(id);
    if (!empresa) return res.status(404).json({ error: 'Empresa não encontrada' });
    res.json(empresa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar empresa por id' });
  }
}

export async function buscarEmpresasPorNome(req, res) {
  try {
    const nome = req.params.nome;
    const empresas = await empresaService.buscarEmpresasPorNome(nome);
    res.json(empresas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar empresas por nome' });
  }
}

export async function buscarEmpresasPorCNPJ(req, res) {
  try {
    const cnpj = req.params.cnpj;
    const empresas = await empresaService.buscarEmpresasPorCNPJ(cnpj);
    res.json(empresas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar empresas por cnpj' });
  }
}

export async function buscarEmpresasPorSetor(req, res) {
  try {
    const setor = req.params.setor;
    const empresas = await empresaService.buscarEmpresasPorSetor(setor);
    res.json(empresas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar empresas por setor' });
  }
}

export async function criarEmpresa(req, res) {
  try {
    const empresa = req.body;
    const novaEmpresa = await empresaService.criarEmpresa(empresa);
    res.status(201).json(novaEmpresa);
  } catch (error) {
    if (error.statusCode) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    res.status(500).json({ error: 'Erro ao cadastrar nova empresa' });
  }
}

export async function atualizarEmpresa(req, res) {
  try {
    const id = req.params.id;
    const empresa = { ...req.body, id };
    const atualizado = await empresaService.atualizarEmpresa(empresa);
    if (!atualizado) return res.status(404).json({ error: 'Empresa não encontrada' });
    res.json({ message: 'Empresa atualizada com sucesso!' });
  } catch (error) {
    if (error.statusCode) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    res.status(500).json({ error: 'Erro ao alterar empresa' });
  }
}

export async function deletarEmpresa(req, res) {
  try {
    const id = req.params.id;
    const deletado = await empresaService.deletarEmpresa(id);
    if (!deletado) return res.status(404).json({ error: 'Empresa não encontrada' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar empresa' });
  }
}
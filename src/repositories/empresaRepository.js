import db from '../config/db.js';

export async function listarEmpresas() {
  const [rows] = await db.query('SELECT * FROM empresas');
  return rows;
}

export async function buscarEmpresaPorId(id) {
  const [rows] = await db.query('SELECT * FROM empresas WHERE id = ?', [id]);
  return rows[0] || null;
}

export async function buscarEmpresasPorNome(nome) {
  const [rows] = await db.query('SELECT * FROM empresas WHERE nome LIKE ?', [`${nome}%`]);
  return rows;
}

export async function buscarEmpresasPorCNPJ(cnpj) {
  const [rows] = await db.query('SELECT * FROM empresas WHERE cnpj = ?', [cnpj]);
  return rows;
}

export async function buscarEmpresasPorSetor(setor) {
  const [rows] = await db.query('SELECT * FROM empresas WHERE setor = ?', [setor]);
  return rows;
}

export async function criarEmpresa(empresa) {
  const { nome, setor, cnpj, aparecer_home } = empresa;
  const [result] = await db.query(
    'INSERT INTO empresas (nome, setor, cnpj, aparecer_home) VALUES (?, ?, ?, ?)',
    [nome, setor, cnpj, aparecer_home]
  );
  return { id: result.insertId, ...empresa };
}

export async function atualizarEmpresa(empresa) {
  const { id, nome, setor, cnpj, aparecer_home } = empresa;
  const [result] = await db.query(
    'UPDATE empresas SET nome = ?, setor = ?, cnpj = ?, aparecer_home = ? WHERE id = ?',
    [nome, setor, cnpj, aparecer_home, id]
  );
  return result.affectedRows > 0;
}

export async function deletarEmpresa(id) {
  const [result] = await db.query('DELETE FROM empresas WHERE id = ?', [id]);
  return result.affectedRows > 0;
}
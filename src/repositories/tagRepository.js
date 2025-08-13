import db from '../config/db.js';

export async function listarTags() {
  const [rows] = await db.query('SELECT * FROM tags');
  return rows;
}

export async function criarTag(nome) {
  const [result] = await db.query('INSERT INTO tags (nome) VALUES (?)', [nome]);
  return { id: result.insertId, nome };
}

export async function atualizarTag(id, nome) {
  const [result] = await db.query('UPDATE tags SET nome = ? WHERE id = ?', [nome, id]);
  return result.affectedRows > 0;
}

export async function buscarTagPorId(id) {
  const [rows] = await db.query('SELECT * FROM tags WHERE id = ?', [id]);
  return rows[0] || null;
}

export async function buscarTagPorNome(nome) {
  const [rows] = await db.query('SELECT * FROM tags WHERE nome = ?', [nome]);
  return rows;
}

export async function deletarTag(id) {
  const [result] = await db.query('DELETE FROM tags WHERE id = ?', [id]);
  return result.affectedRows > 0;
}
import db from '../config/db.js';

export async function getTodasTags() {
    const [linhas] = await db.query('SELECT * FROM tags');
    return linhas;
}

export async function createTag(nome) {
    const [resultado] = await db.query('INSERT INTO tags (nome) VALUES (?)', [nome]);
    return { id: resultado.insertId, nome };
}

export async function updateTag(tag) {
    const [resultado] = await db.query('UPDATE tags SET nome = (?) where id = (?)', [tag.nome, tag.id]);
    return resultado.affectedRows;
}

export async function getTagPorId(id) {
    const [linha] = await db.query('SELECT * FROM tags WHERE id = (?)', [id]);
    return linha;
}

export async function getTagPorNome(nome) {
    const [linhas] = await db.query('SELECT * FROM tags WHERE nome = (?)', [nome]);
    return linhas;
}

export async function deleteTag(id) {
    const [resultado] = await db.query('DELETE FROM tags WHERE id = (?)', [id]);
    return resultado.affectedRows;
}
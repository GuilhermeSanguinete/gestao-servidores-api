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
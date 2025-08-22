import db from '../config/db.js';

export async function listarManutencoes() {
    const [rows] = await db.query('SELECT * FROM manutencoes');
    return rows;
}

export async function cadastrarManutencao(manutencao) {
    const { servidor_id, descricao, data } = manutencao;

    const [resultado] = await db.query(
        `INSERT INTO manutencoes (servidor_id, descricao, data) VALUES (?, ?, ?)`,
        [servidor_id, descricao, data]
    );

    return { id: resultado.insertId, ...manutencao };
}
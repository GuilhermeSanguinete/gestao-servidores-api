import db from '../config/db.js';

export async function listarManutencoes() {
    const [rows] = await db.query('SELECT * FROM manutencoes');
    return rows;
}
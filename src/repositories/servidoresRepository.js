import db from '../config/db.js';

export async function getServidores() {
    const [linhas] = await db.query('SELECT * FROM servidores');
    return linhas;
}
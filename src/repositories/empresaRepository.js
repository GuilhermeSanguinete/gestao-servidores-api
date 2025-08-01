import db from '../config/db.js';

export async function getListaEmpresas(params) {
    const [linhas] = await db.query('SELECT * FROM empresas');
    return linhas;
}
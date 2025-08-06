import db from '../config/db.js';

export async function getServidores() {
    const [linhas] = await db.query('SELECT * FROM servidores');
    return linhas;
}

export async function postServidores(servidor) {
    const [resultado] = await db.query(
        'INSERT INTO servidores (especificacoes, localizacao, status, empresa_id) VALUES(?,?,?,?)', 
        [servidor.especificacoes, servidor. localizacao, servidor.status, servidor.empresa_id]);
    return {id: resultado.insertId, servidor};
}
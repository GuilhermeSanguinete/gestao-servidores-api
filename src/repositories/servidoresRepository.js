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

export async function deleteServidores(id) {
    const resultado = await db.query('DELETE FROM servidores WHERE id = ?', [id]);
    return resultado;    
}

export async function putServidores(servidor) {
    const resultado = await db.query(
        'UPDATE servidores SET especificacoes = ?, localizacao = ?, status = ?, empresa_id = ? WHERE id = ?',
        [servidor.especificacoes, servidor.localizacao, servidor.status, servidor.empresa_id, servidor.id]
    );
    return resultado;
}

export async function getServidorById(id) {
    const [linhas] = await db.query(
        'SELECT * FROM servidores WHERE id = ?',
        [id]
    );
    return linhas[0] || null;
}

export async function getServidoresByEmpresa(empresaId) {
    const [linhas] = await db.query(
        'SELECT * FROM servidores WHERE empresa_id = ?',
        [empresaId]
    );
    return linhas;
}
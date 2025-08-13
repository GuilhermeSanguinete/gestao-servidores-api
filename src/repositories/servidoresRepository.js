import db from '../config/db.js';

export async function listarServidores() {
    const [linhas] = await db.query('SELECT * FROM servidores');
    return linhas;
}

export async function cadastrarServidor(servidor) {
    const [resultado] = await db.query(
        'INSERT INTO servidores (especificacoes, localizacao, status, empresa_id) VALUES(?,?,?,?)', 
        [servidor.especificacoes, servidor. localizacao, servidor.status, servidor.empresa_id]);
    return {id: resultado.insertId, servidor};
}

export async function deletarServidor(id) {
    const resultado = await db.query('DELETE FROM servidores WHERE id = ?', [id]);
    return resultado;    
}

export async function atualizarServidor(servidor) {
    const resultado = await db.query(
        'UPDATE servidores SET especificacoes = ?, localizacao = ?, status = ?, empresa_id = ? WHERE id = ?',
        [servidor.especificacoes, servidor.localizacao, servidor.status, servidor.empresa_id, servidor.id]
    );
    return resultado;
}

export async function buscarServidorPorId(id) {
    const [linhas] = await db.query(
        'SELECT * FROM servidores WHERE id = ?',
        [id]
    );
    return linhas[0] || null;
}

export async function buscarServidorPorEmpresa(empresaId) {
    const [linhas] = await db.query(
        'SELECT * FROM servidores WHERE empresa_id = ?',
        [empresaId]
    );
    return linhas;
}
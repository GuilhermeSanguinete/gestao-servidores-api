import db from '../config/db.js';

export async function getListaEmpresas() {
    const [linhas] = await db.query('SELECT * FROM empresas');
    return linhas;
}

export async function getEmpresasPorId(id) {
    const linha = await db.query('SELECT * FROM empresas WHERE id = ?', [id]);
    return linha[0];
}

export async function getEmpresasPorNome(nome) {
    const [resultado] = await db.query('SELECT * FROM empresas WHERE nome like ?', [`${nome}%`]);
    return resultado;
}

export async function getEmpresasPorCNPJ(cnpj) {
    const [resultado] = await db.query('SELECT * FROM empresas WHERE cnpj = ?', [cnpj]);
    return resultado;
}

export async function getEmpresasPorSetor(setor) {
    const [resultado] = await db.query('SELECT * FROM empresas WHERE setor = ?', [setor]);
    return resultado;
}

export async function postEmpresas(empresa) {
    const [resultado] = await db.query(
        'INSERT INTO empresas (nome, setor, cnpj, aparecer_home) VALUES ( ? , ? , ? , ?)',
        [empresa.nome, empresa.setor, empresa.cnpj, empresa.aparecer_home]
    );
    return {id: resultado.insertId, empresa};
}

export async function putEmpresas(empresa) {
    const [resultado] = await db.query(
        'UPDATE empresas SET nome = ?, setor = ?, cnpj = ?, aparecer_home = ? WHERE id = ?',
        [empresa.nome, empresa.setor, empresa.cnpj, empresa.aparecer_home, empresa.id]
    );
    return resultado.affectedRows;
}

export async function deleteEmpresas(id) {
    const [resultado] = await db.query('DELETE FROM empresas WHERE id = ?', [id]);
    return resultado.affectedRows;
}
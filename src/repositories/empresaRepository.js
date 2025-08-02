import db from '../config/db.js';

export async function getListaEmpresas() {
    const [linhas] = await db.query('SELECT * FROM empresas');
    return linhas;
}

export async function postEmpresas(empresa) {
    const [resultado] = await db.query(
        'INSERT INTO empresas (nome, setor, cnpj, aparecer_home) VALUES ( ? , ? , ? , ?)',
        [empresa.nome, empresa.setor, empresa.cnpj, empresa.aparecer_home]
    );
    return {id: resultado.insertId, empresa};
}
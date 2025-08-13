export function validarNomeObrigatorio(nome) {
    if (!nome) {
        throw criarErro(400, 'Nome da tag é obrigatório');
    }
}

function criarErro(statusCode, mensagem) {
    const err = new Error(mensagem);
    err.statusCode = statusCode;
    return err;
}
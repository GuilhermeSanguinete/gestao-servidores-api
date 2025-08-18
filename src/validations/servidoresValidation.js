const STATUS_VALIDOS = ['Online', 'Offline', 'Em manutenção', 'Desativado'];

export async function validarServidor(servidor) {
    if (!servidor) {
        throw new Error('Dados do servidor não fornecidos');
    }

    if (!servidor.especificacoes || servidor.especificacoes.trim() === '') {
        throw new Error('Especificações do servidor são obrigatórias');
    }

    if (!servidor.localizacao || servidor.localizacao.trim() === '') {
        throw new Error('Localização do servidor é obrigatória');
    }

    if (!servidor.status || !STATUS_VALIDOS.includes(servidor.status)) {
        throw new Error(`Status inválido. Valores permitidos: ${STATUS_VALIDOS.join(', ')}`);
    }

    if (servidor.empresa_id !== undefined && isNaN(Number(servidor.empresa_id))) {
        throw new Error('ID da empresa deve ser um número válido');
    }
}
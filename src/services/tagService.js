import * as tagRepository from '../repositories/tagRepository.js';

export async function listaTags() {
    const tags = await tagRepository.getTodasTags();
    return tags;
}

export async function cadastrarTag(nome) {
    if (!nome) {
        const err = new Error('Nome da tag é obrigatório');
        err.statusCode = 400;
        throw err;
    }

    const existente = await tagRepository.getTagPorNome(nome);
    if (existente.length !== 0) {
        const err = new Error('Nome da tag já existente');
        err.statusCode = 400;
        throw err;
    }

    const resultado = await tagRepository.createTag(nome);

    return resultado;
}

export async function alterarTag(tag) {
    if (!tag.nome) return res.status(400).json({ error: 'Nome da tag é obrigatório' })

    const idValido = await tagRepository.getTagPorId(tag.id);
    const existente = await tagRepository.getTagPorNome(tag.nome);

    if (idValido.length === 0) {
        const err = new Error(`Não encontrado tag com id: ${tag.id}`);
        err.statusCode = 404;
        throw err;
    }

    else if (existente.length !== 0) {
        const err = new Error('Nome da tag já existente');
        err.statusCode = 400;
        throw err;
    }

    const resultado = await tagRepository.updateTag(tag);

    return resultado;
}

export async function buscarTagPorId(id) {
    const tag = await tagRepository.getTagPorId(id);
    return tag;
}

export async function listaTagsPorNome(nome) {
    const tag = await tagRepository.getTagPorNome(nome);
    return tag;
}
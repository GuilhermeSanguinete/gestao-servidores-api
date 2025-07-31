import * as tagRepository from '../repositories/tagRepository.js';

export async function listaTags() {
    const tags = await tagRepository.getTodasTags();
    return tags;
}

export async function cadastrarTag(nome) {
    if (!nome) return res.status(400).json({ error: 'Nome da tag é obrigatório' })

    const resultado = await tagRepository.createTag(nome);

    return resultado;
}

export async function alterarTag(tag) {
    if (!tag.nome) return res.status(400).json({ error: 'Nome da tag é obrigatório' })

    const resultado = await tagRepository.updateTag(tag);

    return resultado;
}
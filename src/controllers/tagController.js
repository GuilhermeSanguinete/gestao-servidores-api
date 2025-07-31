import * as tagService from '../services/tagService.js';

export async function listaTags(req, res) {
    try {
        const tags = await tagService.listaTags();
        res.json(tags);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tags' });
    }
}

export async function cadastrarTag(req, res) {
    try {
        const nome = req.body.nome;

        const resultado = await tagService.cadastrarTag(nome);
        res.status(201).json(resultado)
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar nova tag' });
    }
}

export async function alterarTag(req, res) {
    try {
        const tag = req.body;

        const resultado = await tagService.alterarTag(tag);
        res.status(201).json({ message: 'Tag atualizada com sucesso' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao alterar a tag' });
    }
}
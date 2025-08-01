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
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        }
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
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        res.status(500).json({ error: 'Erro ao alterar a tag' });
    }
}

export async function buscaTagPorId(req, res) {
    try {
        const id = req.params.id;
        const tag = await tagService.buscarTagPorId(id);

        if (!tag || tag.length === 0) return res.status(404).json({ error: 'Tag não encontrada' });

        res.json(tag);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tag por Id' });
    }
}

export async function listaTagsPorNome(req, res) {
    try {
        const nome = req.body.nome;
        const tag = await tagService.listaTagsPorNome(nome);

        if (!tag || tag.length === 0) return res.status(404).json({ error: 'Tag com este nome não encontrada' });

        res.json(tag);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tags por Nome' });
    }
}

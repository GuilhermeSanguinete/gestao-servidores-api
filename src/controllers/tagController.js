import * as tagService from '../services/tagService.js';

export async function listarTags(req, res) {
    try {
        const tags = await tagService.listarTags();
        res.json(tags);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tags' });
    }
}

export async function criarTag(req, res) {
    try {
        const { nome } = req.body;
        const resultado = await tagService.criarTag(nome);
        res.status(201).json(resultado);
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        res.status(500).json({ error: 'Erro ao cadastrar nova tag' });
    }
}

export async function atualizarTag(req, res) {
    try {
        const { id } = req.params;
        const nome = req.body.nome;
        await tagService.atualizarTag(id, nome);

        res.status(200).json({ message: 'Tag atualizada com sucesso' });
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        res.status(500).json({ error: 'Erro ao alterar a tag' });
    }
}

export async function buscarTagPorId(req, res) {
    try {
        const { id } = req.params;
        const tag = await tagService.buscarTagPorId(id);

        if (!tag || tag.length === 0) {
            return res.status(404).json({ error: 'Tag não encontrada' });
        }

        res.json(tag);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tag por ID' });
    }
}

export async function buscarTagsPorNome(req, res) {
    try {
        const { nome } = req.params;
        const tag = await tagService.buscarTagPorNome(nome);

        if (!tag || tag.length === 0) {
            return res.status(404).json({ error: 'Tag com este nome não encontrada' });
        }

        res.json(tag);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tags por nome' });
    }
}

export async function deletarTag(req, res) {
    try {
        const { id } = req.params;
        const deletado = await tagService.deletarTag(id);

        if (!deletado) {
            return res.status(404).json({ error: 'Tag não encontrada para exclusão' });
        }

        res.status(200).json({ message: 'Tag excluída com sucesso' });
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        res.status(500).json({ error: 'Erro ao deletar a tag' });
    }
}

import * as tagRepository from '../repositories/tagRepository.js';

export async function listaTags(req, res) {
    try {
        const tags = await tagRepository.getTodasTags();
        res.json(tags);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tags' });
    }
}
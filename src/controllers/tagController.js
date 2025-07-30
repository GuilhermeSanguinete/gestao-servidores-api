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
    try{
        const nome = req.body.nome;
        if (!nome) return res.status(400).json({ error: 'Nome da tag é obrigatório' })
        
        const resultado = await tagService.cadastrarTag(nome);
        res.status(201).json(resultado)
    }
    catch (error){
        res.status(500).json({ error: 'Erro ao cadastrar nova tag'});
    }
}
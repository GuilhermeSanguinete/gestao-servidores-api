import express from 'express';
import * as tagController from '../controllers/tagController.js';

const router = express.Router();

router.get('/', tagController.listaTags);
router.post('/', tagController.cadastrarTag);
router.put('/', tagController.alterarTag)

export default router;
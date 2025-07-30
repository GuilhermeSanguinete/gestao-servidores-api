import express from 'express';
import * as tagController from '../controllers/tagController.js';

const router = express.Router();

router.get('/', tagController.listaTags);
router.post('/', tagController.cadastrarTag);

export default router;
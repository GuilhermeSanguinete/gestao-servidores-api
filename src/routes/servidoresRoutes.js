import express from 'express';
import * as servidoresController from '../controllers/servidoresController.js';

const router = express.Router();

router.get('/', servidoresController.getServidores);
router.post('/', servidoresController.postServidores)

export default router;
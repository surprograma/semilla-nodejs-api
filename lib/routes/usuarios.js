import express from 'express';
import * as userController from '../controllers/usuarioController';

const withErrorHandling = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const router = express.Router();

/* GET all users */
router.get('/', withErrorHandling(userController.index));

export default router;

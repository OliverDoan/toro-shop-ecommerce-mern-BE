import express from 'express';
import authenticationController from '../controllers/authenticationController';

const router = express.Router();

router.post('/auth/register', authenticationController.register);

export default router;

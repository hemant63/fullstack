import express from 'express';
import { getProfile, updateProfile } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile/:id',  getProfile);
router.put('/profile/:id', authMiddleware, updateProfile);

export default router;

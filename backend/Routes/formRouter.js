import express from 'express';
import feedback from '../controllers/feedBackHandler.js';

const router = express.Router();

router.post('/api/feedback',feedback)

export default router;
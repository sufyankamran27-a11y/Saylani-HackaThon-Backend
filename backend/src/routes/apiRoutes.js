import { Router } from 'express';
import { checkApi, getItems, createItem } from '../controllers/checkController.js';

const router = Router();

// Test & Health Check endpoint requested
router.get('/check', checkApi);

// Sample CRUD endpoints for hackathon starter
router.get('/items', getItems);
router.post('/items', createItem);

export default router;

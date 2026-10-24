import { getDBStatus } from '../config/db.js';
import { Item } from '../models/Item.js';

// GET /api/check
export const checkApi = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Backend API is working perfectly! 🚀',
    timestamp: new Date().toISOString(),
    database: {
      status: getDBStatus(),
      note: getDBStatus() === 'connected' 
        ? 'Connected to MongoDB' 
        : 'MongoDB not yet connected. Update MONGO_URI in .env if needed.',
    },
  });
};

// GET /api/items
export const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/items
export const createItem = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    if (!title) {
      return res.status(400).json({ success: false, message: 'Title is required' });
    }
    const newItem = await Item.create({ title, description, status });
    res.status(201).json({ success: true, data: newItem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/hackathon_db';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of hanging
    });
    console.log(` MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(` MongoDB Connection Warning: ${error.message}`);
    console.warn('⚠️  Backend server is still running. If you are using MongoDB Atlas or local MongoDB, check your MONGO_URI in .env');
  }
};

export const getDBStatus = () => {
  const states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };
  return states[mongoose.connection.readyState] || 'unknown';
};

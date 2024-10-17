
import mongoose from 'mongoose';


const MONGODB_URI = process.env.MONGODB_URI!;
console.log('MongoDB URI:', MONGODB_URI);  // Log to verify URI

async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI);
      console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw new Error('Database connection failed');
  }
}

export default connectToDatabase
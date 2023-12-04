import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI not defined');
    }
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if (conn.connection.readyState === 1) console.log('DB connection is successfully!');
    else console.log('DB connecting');
  } catch (error) {
    console.log('DB connection is failed');
    throw new Error(error);
  }
};

export default dbConnect;

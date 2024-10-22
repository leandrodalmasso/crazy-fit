import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the eCommerce API');
});

// MongoDB connection
const mongodbUri = process.env.MONGODB_URI;
if (!mongodbUri) {
  console.error('MongoDB URI is missing');
  process.exit(1);
}
mongoose.connect(mongodbUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('MongoDB connection failed', error);
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

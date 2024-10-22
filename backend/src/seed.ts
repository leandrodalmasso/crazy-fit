import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/product';

dotenv.config();

const seedProducts = async () => {
  const mongodbUri = process.env.MONGODB_URI;
  if (!mongodbUri) {
    throw new Error('MongoDB URI is missing');
  }
  await mongoose.connect(mongodbUri);

  const products = [
    {
      name: 'Product 1',
      price: 29.99,
      description: 'Description for Product 1',
      imageUrl: 'https://placehold.co/400x400',
    },
    {
      name: 'Product 2',
      price: 39.99,
      description: 'Description for Product 2',
      imageUrl: 'https://placehold.co/400x400',
    },
  ];

  await Product.deleteMany({}); // Clear existing products
  await Product.insertMany(products); // Insert new products
  console.log('Database seeded!');
  mongoose.connection.close();
};

seedProducts().catch(err => console.error(err));

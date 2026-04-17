export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality Bluetooth headphones with noise cancellation',
    price: 199.99,
    category: 'Electronics',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor',
    price: 299.99,
    category: 'Electronics',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '3',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with cushioned sole',
    price: 129.99,
    category: 'Sports',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '4',
    name: 'Coffee Maker',
    description: 'Automatic drip coffee maker with timer',
    price: 79.99,
    category: 'Home',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '5',
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand',
    price: 49.99,
    category: 'Office',
    image: 'https://via.placeholder.com/100',
  },
];
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
    name: 'Headphones',
    description: 'Wireless headphones',
    price: 199,
    category: 'Electronics',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    name: 'Watch',
    description: 'Smart watch',
    price: 299,
    category: 'Electronics',
    image: 'https://via.placeholder.com/100',
  },
];
export interface Product{
  _id: string;
  name: string;
  description: string;
  price: number;
  products: [];
  img: string;
  active: boolean;
}

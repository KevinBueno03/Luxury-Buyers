export interface Order{
  _id: string;
  idBuyer: string;
  idBiker: string;
  products: [];
  paid: boolean;
  subtotal: number;
  isv: number;
  commission: number;
  total: number;
  address: string;
  phone: string;
  amountProducts: number;
  taked: boolean;
  nameStatus: string;
  buyerName: string;
  location: Object;
}

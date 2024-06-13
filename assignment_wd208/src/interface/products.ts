export interface Product {
  id?: number|string;
  name: string;
  price:number | string;
  image: string;
  images?: [];
  description: string
  category:string
}

import { Cartitem } from "./cartitem";

export class Cart {
  items:Cartitem[]=[];
  totalprice:number=0;
  totalcount:number=0;
  order_date=new Date();
}

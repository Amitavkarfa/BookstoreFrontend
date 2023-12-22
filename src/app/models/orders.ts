import { User } from "./user";

export class Orders {
  order_id!:number;
  totalcount!:number;
  totalprice!:number;
  order_date=new Date();
  customers!:User;
}

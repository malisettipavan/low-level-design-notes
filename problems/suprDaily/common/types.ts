import { Item } from "../models/Item"

export type ItemRequest = {
    itemId : string;
    itemName : string;
    category : string;
    quantity : number;
}

export type OrderRequest = {
    customerId : string;
    wareHouseId : string;
    deliveryDate : Date;
    items : Array<Item>;
}
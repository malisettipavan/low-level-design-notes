import { OrderRequest } from "../common/types";
import { Item } from "../models/Item";
import { Order } from "../models/Order";

interface OrderService {
    createOrder(orderRequest : OrderRequest) : Order;
    cancelOrder(orderId : string) : Array<Item>;
    confirmOrder(orderId : string) : void;
}

export {OrderService};
import { Item } from "./Item";

enum OrderStatus {
    Created = "Created",
    Confirmed = "Confirmed",
    Cancelled = "Cancelled"
}

class Order {
    orderId : string;
    items : Array<Item>;
    wareHouseId : string;
    deliveryDate : Date;
    customerId : string;
    status : OrderStatus;

    constructor(orderId : string, items : Array<Item>, wareHouseId : string, deliveryDate : Date, customerId : string){
        this.orderId = orderId;
        this.items = items;
        this.wareHouseId = wareHouseId;
        this.deliveryDate = deliveryDate;
        this.customerId = customerId;
        this.status = OrderStatus.Created;
    }

    changeOrderStatus(orderStatus : OrderStatus){
        this.status = orderStatus;
    }

    updateDeliveryDate(deliveryDate : Date){
        this.deliveryDate = deliveryDate;
    }
}

export {Order, OrderStatus};
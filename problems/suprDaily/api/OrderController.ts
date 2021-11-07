import { OrderRequest } from "../common/types";
import { Item } from "../models/Item";
import { Order } from "../models/Order";
import { OrderService } from "../services/OrderService";
import { WareHouseService } from "../services/WareHouseService";
import { OrderFulfilmentService } from "./OrderFulfilmentService";

class OrderController implements OrderFulfilmentService{

    wareHouseService : WareHouseService;
    OrderService : OrderService;

    constructor(wareHouseService : WareHouseService, orderService : OrderService){
        this.wareHouseService = wareHouseService;
        this.OrderService = orderService;
    }
    
    async canFulfilOrder(orderRequest : OrderRequest) : Promise<boolean> {
        // check if the requested items are available Using wareHouseService
        return this.wareHouseService.isAvailable(orderRequest.wareHouseId, orderRequest.items)!;
    }

    async reserveOrder(orderRequest : OrderRequest) : Promise<void> {
        // ask canFulfilOrder()
        await this.canFulfilOrder(orderRequest);

        // If Yes, reduce items quantity from wareHouse
        this.wareHouseService.reduceItemsByQuantity(orderRequest.wareHouseId, orderRequest.items);

        // create an order (In here, lock on items will be placed)
        let curr_order : Order = this.OrderService.createOrder(orderRequest);

        // After order is confirmed(delete lock on items related to OrderId)
        this.OrderService.confirmOrder(curr_order.orderId);

    }

    cancelOrder(orderId : string) : void {
        // cancel Order using orderService (returns all the locked items)
        let items : Array<Item> = this.OrderService.cancelOrder(orderId);

        // add these items back to wareHouse
        this.wareHouseService.addItemsByQuantity(orderId, items);
    }

}

export {OrderController};
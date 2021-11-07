import { randomUUID } from "crypto";
import { OrderRequest } from "../common/types";
import { Item } from "../models/Item";
import { Order, OrderStatus } from "../models/Order";
import { ResourceLockProvider } from "../providers/ResourceLockProvider";
import { OrderService } from "./OrderService";
import { WareHouseService } from "./WareHouseService";

class SuprDailyOrderService implements OrderService {
     
    orders : Map<string, Order>;
    resourceLockProvider : ResourceLockProvider;
    wareHouseService : WareHouseService;

    constructor(resourceLockProvider : ResourceLockProvider, wareHouseService : WareHouseService){
        this.resourceLockProvider = resourceLockProvider;
        this.wareHouseService = wareHouseService;
        this.orders = new Map<string,Order>();
    }

    createOrder(orderRequest : OrderRequest) : Order {

        let orderId : string = randomUUID.toString();

        // place lock on items
        this.resourceLockProvider.lockItems(this.wareHouseService.getWareHouse(orderRequest.wareHouseId), orderRequest.items, orderId);
        
        // create an order and place an entry in orders
        let curr_order : Order = new Order(orderId, orderRequest.items, orderRequest.wareHouseId, orderRequest.deliveryDate, orderRequest.customerId);

        this.orders.set(orderId, curr_order);

        return curr_order;
    }

    cancelOrder(orderId : string) : Array<Item> {
        // Get all locked items related to orderId
        let res : Array<Item> = this.resourceLockProvider.getLockedItems(this.wareHouseService.getWareHouse(this.orders.get(orderId)?.wareHouseId!), orderId);

        // remove locks
        this.resourceLockProvider.unlockItems(this.wareHouseService.getWareHouse(this.orders.get(orderId)?.wareHouseId!), orderId);

        return res;
    }

    confirmOrder(orderId : string) : void {
        this.orders.get(orderId)?.changeOrderStatus(OrderStatus.Confirmed);

        // unlock the items
        this.resourceLockProvider.unlockItems(this.wareHouseService.getWareHouse(this.orders.get(orderId)?.wareHouseId!), orderId);
    }
     
}

export {SuprDailyOrderService};
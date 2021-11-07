import { OrderRequest } from "./common/types";
import { Item } from "./models/Item";
import { WareHouse } from "./models/WareHouse";

interface WareHouseService {
    isAvailable(wareHouseId : string, items : Array<Item>) : boolean;
    addItems(wareHouseId : string, items : Array<Item>) : void;
    reduceItemsByQuantity(wareHouseId : string, items : Array<Item>) : void;
    addCategory(wareHouseId : string, categoryName : string) : void;
    getWareHouse(wareHouseId : string) : WareHouse;
}

interface OrderService {
    createOrder(orderRequest : OrderRequest) : void;
    cancelOrder(orderId : string) : void;
}
import { Category } from "../models/Category";
import { Item } from "../models/Item";
import { WareHouse } from "../models/WareHouse";

interface ResourceLockProvider {
    lockItems(wareHouse : WareHouse, items : Array<Item>, orderId : string) : void;
    unlockItems(wareHouse : WareHouse, orderId : string) : void;
    getLockedItems(wareHouse : WareHouse, orderId : string) : Array<Item>;
    getAllLockedItems(wareHouse : WareHouse) : Array<Item>;
}

export {ResourceLockProvider};
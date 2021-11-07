import { Item } from "../models/Item";
import { WareHouse } from "../models/WareHouse";

interface WareHouseService {
    isAvailable(wareHouseId : string, items : Array<Item>) : boolean;
    addItems(wareHouseId : string, items : Array<Item>) : void;
    reduceItemsByQuantity(wareHouseId : string, items : Array<Item>) : void;
    addItemsByQuantity(wareHouseId : string, items : Array<Item>) : void;
    getWareHouse(wareHouseId : string) : WareHouse;
}

export {WareHouseService};
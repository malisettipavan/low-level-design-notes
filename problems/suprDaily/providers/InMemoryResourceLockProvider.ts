import { Item } from "../models/Item";
import { WareHouse } from "../models/WareHouse";
import { ResourceLockProvider } from "./ResourceLockProvider";

class InMemoryResourceLockProvider implements ResourceLockProvider{
    locks : Map<WareHouse, Map<string, Array<Item>>>;

    lockItems(wareHouse : WareHouse, items : Array<Item>, orderId : string) : void {
        if(!this.locks.has(wareHouse)){
            // there are no locks yet on the given wareHouse
            this.locks.set(wareHouse, new Map<string, Array<Item>>());
        }

        this.locks.get(wareHouse)?.set(orderId, items);
    }

    unlockItems(wareHouse : WareHouse, orderId : string) : void {
        if(!this.locks.has(wareHouse)){
            // throw Exception
        }

        if(!this.locks.get(wareHouse)?.has(orderId)){
            // throw Exception
        }

        this.locks.get(wareHouse)?.delete(orderId);
    }

    getLockedItems(wareHouse : WareHouse, orderId : string) : Array<Item> {
        
        if(!this.locks.has(wareHouse)){
            // throw exception
        }

        if(!this.locks.get(wareHouse)?.has(orderId)){
            // throw Exception
        }

        return this.locks.get(wareHouse)?.get(orderId)!;

    }

    getAllLockedItems(wareHouse : WareHouse) : Array<Item> {
        if(!this.locks.has(wareHouse)){
            // throw exception
        }

        let allLockedItems : Array<Item> = [];

        for(let [key, value] of this.locks.get(wareHouse)!){
            allLockedItems.push(...value);
        }

        return allLockedItems;
    }
}

export {InMemoryResourceLockProvider};
import { randomUUID } from "crypto";
import { Category } from "../models/Category";
import { Item } from "../models/Item";
import { WareHouse } from "../models/WareHouse";
import { WareHouseService } from "./WareHouseService";

class SuprDailyWareHouseService implements WareHouseService {
    wareHouses : Map<string, WareHouse>;

    constructor(){
        this.wareHouses = new Map<string, WareHouse>();
    }

    createWareHouse(wareHouseName : string) : WareHouse{
        let wareHouseId : string = randomUUID.toString();
        let newWareHouse : WareHouse = new WareHouse(wareHouseId, wareHouseName);
        this.wareHouses.set(wareHouseId, newWareHouse);
        return newWareHouse;
    }

    getWareHouse(wareHouseId : string) : WareHouse{
        if(!this.wareHouses.has(wareHouseId)){
            // throw exception
        }

        return this.wareHouses.get(wareHouseId)!;
    }

    isAvailable(wareHouseId : string, items : Array<Item>) : boolean {
        if(!this.wareHouses.has(wareHouseId)){
            return false;
        }

        let itemsByCategory : Map<string, Array<Item>> = new Map<string, Array<Item>>();

        for(let item of items){
            if(!itemsByCategory.has(item.getCategory())){
                // create an entry
                itemsByCategory.set(item.getCategory(), []);
            }

            itemsByCategory.get(item.getCategory())?.push(item);
        }

        this.wareHouses.get(wareHouseId)?.getCategories().forEach((category) => {
            if(itemsByCategory.has(category.getName())){
                
                // compare the quantity of all the given items Vs items in wareHouse
                for(let item1 of itemsByCategory.get(category.getName())!){
                    for(let item2 of category.getItems()){
                        if(item2.getQuantity() < item1.getQuantity()) return false;
                    }
                }

            }
        });

        return true;
    }

    addItem(wareHouseId : string, item : Item) : void {
        for(let category of this.wareHouses.get(wareHouseId)?.getCategories()!){
            if(category.getName()===item.getCategory()){
                category.addItem(item);
            }
        }
    }

    addItems(wareHouseId : string, items : Array<Item>) : void {
        if(!this.wareHouses.has(wareHouseId)){
            // throw exception
        }

        for(let item of items){
            this.addItem(wareHouseId, item);
        }
    }

    reduceItemByQuantity(wareHouseId : string, item : Item) : void {
        for(let category of this.wareHouses.get(wareHouseId)?.getCategories()!){
            if(category.getName()===item.getCategory()){
                category.updateItem(item, "sub");
            }
        }
    }

    reduceItemsByQuantity(wareHouseId : string, items : Array<Item>) : void {
        if(!this.wareHouses.has(wareHouseId)){
            // throw exception
        }

        for(let item of items){
            this.reduceItemByQuantity(wareHouseId, item);
        }
    }

    addItemByQuantity(wareHouseId : string, item : Item) : void {
        for(let category of this.wareHouses.get(wareHouseId)?.getCategories()!){
            if(category.getName()===item.getCategory()){
                category.updateItem(item, "add");
            }
        }
    }

    addItemsByQuantity(wareHouseId : string, items : Array<Item>) : void {
        if(!this.wareHouses.has(wareHouseId)){
            // throw exception
        }

        for(let item of items){
            this.addItemByQuantity(wareHouseId, item);
        }
    }

}

export {SuprDailyWareHouseService};
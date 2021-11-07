import { Category } from "./Category";

class WareHouse {
    
    wareHouseId : string;
    wareHouseName : string;

    categories : Set<Category>;

    constructor(wareHouseId : string, wareHouseName : string){
        this.wareHouseId = wareHouseId;
        this.wareHouseName = wareHouseName;
        this.categories = new Set<Category>();
    }

    getCategories() : Set<Category> {
        return this.categories;
    }

    addCategory(category : Category){
        this.addCategory(category);
    }

    removeCategory(category : Category){
        this.categories.delete(category)!;
    }

}

export { WareHouse }; 
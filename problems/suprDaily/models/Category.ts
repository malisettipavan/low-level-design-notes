import { Item } from "./Item";

class Category {
    categoryName : string;
    items : Array<Item>;
    
    constructor(categoryName : string){
        this.categoryName = categoryName;
        this.items = [];
    }
    
    getName() : string {
        return this.categoryName;
    }

    getItems() : Array<Item> {
        return this.items;
    }

    addItem(item : Item) : void{
        this.items.push(item);
    }

    updateItem(item : Item, operation : string  ) : void {
        this.getItems().map((curr_item) => {
            if(curr_item.getName()===item.getName()){
                if(operation==="add"){
                    curr_item.updateQuantity(curr_item.getQuantity()-item.getQuantity());
                }else{
                    curr_item.updateQuantity(curr_item.getQuantity()-item.getQuantity());
                }
            }
        });
    }

    removeItem(item : Item) : void {
        this.items = this.items.filter((val, idx) => {
            return (val!==item);
        });
    }

}

export {Category};
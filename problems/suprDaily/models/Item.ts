class Item {
    itemId : string;
    itemName : string;
    category : string;
    quantity : number;
    
    constructor(itemId : string, itemName : string, category : string, quantity : number){
        this.itemId = itemId;
        this.itemName = itemName;
        this.category = category;
        this.quantity = quantity;
    }

    getCategory() : string {
        return this.category;
    }

    getName() : string {
        return this.itemName;
    }

    getQuantity() : number {
        return this.quantity;
    }

    updateQuantity(quantity : number) : void{
        this.quantity = quantity;
    }

}

export { Item };
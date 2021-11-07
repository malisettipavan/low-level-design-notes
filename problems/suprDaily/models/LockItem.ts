import { Item } from "./Item";
import { WareHouse } from "./WareHouse";

class LockItem {
    
    item : Item;
    wareHouse : WareHouse;
    lockTime : Date;
    timeOutInSec : number;
    lockedBy : string;

    constructor(item : Item, wareHouse : WareHouse, lockTime : Date, timeOutInSec : number, lockedBy : string){
        this.item = item;
        this.wareHouse = wareHouse;
        this.lockTime = lockTime;
        this.timeOutInSec = timeOutInSec;
        this.lockedBy = lockedBy;
    }

    isLockExpired() : boolean {
        return (this.lockTime.getSeconds() + this.timeOutInSec < new Date().getSeconds());
    }

}

export {LockItem};
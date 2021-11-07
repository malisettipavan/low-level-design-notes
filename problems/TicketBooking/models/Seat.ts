import { Screen } from "./Screen";

class Seat {
    id : string;
    rowId : number;
    seatNo : number;

    constructor(id : string, rowId : number, seatNo : number){
        this.id = id;
        this.rowId = rowId;
        this.seatNo = seatNo;
    }
}

export {Seat};
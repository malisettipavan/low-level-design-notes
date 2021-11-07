import { Screen } from "./Screen";

class Theatre {
    id : string;
    name : string;
    // List of screens
    screens : Array<Screen>;
    
    constructor(id : string, name : string){
        this.id = id;
        this.name = name;
        this.screens = [];
    }

    addScreen(screen : Screen){
        this.screens.push(screen);
    }

}

export {Theatre};
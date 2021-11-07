class Car{
    // A car will have driver, registration number, color
    // => Here, driver is of No use

    registrationNumber : string;
    color : string;

    constructor(registrationNumber : string, color : string){
        this.registrationNumber = registrationNumber;
        this.color = color;
    }

    getRegistrationNumber() : string {
        return this.registrationNumber;
    }

    getColor() : string {
        return this.color;
    }
}

export {Car};
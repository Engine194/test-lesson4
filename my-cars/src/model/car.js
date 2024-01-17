export class Car {
    constructor(props) {
        const {id, name, brand, year, max_velocity, acceleration} = props || {};
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.year = year;
        this.maxVelocity = max_velocity;
        this.acceleration = acceleration;        
    }
}

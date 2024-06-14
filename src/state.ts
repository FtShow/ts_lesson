export type ICar = {
    model: string,
    year: number,
    on: boolean,
    turnOn: () => void,
    rename: (model: string) => void
}


let car: ICar = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true;
    },
    rename(model) {
        this.model = model;
    }
}

type erere= {
    addCar: (car:string)=>void
    logAllCarsNames: ()=>void
    getAllCars: ()=> string[]
}
let createGarage = ():erere  => {
    let _cars:string[] = [];

    return {
        addCar(car) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach((c: any) => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}
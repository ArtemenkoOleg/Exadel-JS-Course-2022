class Zoo{
    constructor(address, area, establishedDate, ticketPrice, workers, animals){
        // this.id = Math.random().toString.slice(2);
        // this.description = description;
        this._address = address;
        this.area = area;
        this.establishedDate = establishedDate;
        this.ticketPrice = ticketPrice;
        this.workers = workers;
        this.animals = animals;
    }
    
    get address() {
        return this._address;
    }
    
    set address(newAddress) {
        newAddress = newAddress.trim();
        if (newAddress === '') {
            throw 'The address cannot be empty';
        }
        this._address = newAddress;
    }
    
    get area() {
        return this._area;
    }
    
    set area(newArea) {
        if (newArea <= 0) {
            throw 'The area should be a positive number';
        }
        this._area = newArea;
    }
    
    get establishedDate() {
        return this._establishedDate;
    }
    
    set establishedDate(newestablishedDate) {
        newestablishedDate = newestablishedDate.trim();
        if (newestablishedDate === '') {
            throw 'The establish date cannot be empty';
        }
        this._establishedDate = newestablishedDate;
    }
    
    get ticketPrice() {
        return this._ticketPrice;
    }
    
    set ticketPrice(newTicketPrice) {
        if (newTicketPrice < 0) {
            throw 'The price should be a non-negative number';
        }
        this._ticketPrice = newTicketPrice;
    }


    //--------------WORKER START---------------//
    addWorker(newWorker){
        this.workers.push(newWorker);
    }
    
    removeWorker(id){
        const index = this.getWorkerIndexById(id);
        if (index == -1) {
            throw 'Worker with this ID is not found';
        }
        this.workers.splice(index, 1);
    }
    
    getWorkerIndexById(id){
        for(let i = 0; i < (this.workers).length; i++) {
            if(this.workers[i].id == id) {
                return i;
            }
        }
        return -1;
    }
    
    editWorkerFirstName(id, newFirstName) {
        newFirstName = newFirstName.trim();
        if (newFirstName === '') {
            throw 'The first name cannot be empty';
        }
        const index = this.getWorkerIndexById(id);
        if (index == -1) {
            throw 'Worker with this ID is not found';
        }
        this.workers[index].firstName = newFirstName;
    }
    
    editWorkerLastName(id, newLastName) {
        newLastName = newLastName.trim();
        if (newLastName === '') {
            throw 'The last name cannot be empty';
        }
        const index = this.getWorkerIndexById(id);
        if (index == -1) {
            throw 'Worker with this ID is not found';
        }
        this.workers[index].lastName = newLastName;
    }
    
    editWorkerPhone(id, newPhone) {
        newPhone = newPhone.trim();
        if (newPhone === '') {
            throw 'The phone cannot be empty';
        }
        const index = this.getWorkerIndexById(id);
        if (index == -1) {
            throw 'Worker with this ID is not found';
        }
        this.workers[index].phone = newPhone;
    }
    
    showAllWorkers() {
        for (const worker of this.workers) {
            console.log(JSON.stringify(worker))
        } 
    }
    
    //--------------WORKER END---------------//
    
    //--------------ANIMAL START---------------//
    
    addAnimal(newAnimal){
        this.animals.push(newAnimal);
    }
    
    removeAnimal(id){
        const index = this.getAnimalIndexById(id);
        if (index == -1) {
            throw 'Animal with this ID is not found';
        }
        this.animals.splice(index, 1);
    }
    
    getAnimalIndexById(id){
        for(let i = 0; i < (this.animals).length; i++) {
            if(this.animals[i].id == id) {
                return i;
            }
        }
        return -1;
    }
    
    editAnimalType(id, newType) {
        newType = newType.trim();
        if (newType === '') {
            throw 'The type cannot be empty';
        }
        const index = this.getAnimalIndexById(id);
        if (index == -1) {
            throw 'Animal with this ID is not found';
        }
        this.animals[index].type = newType;
    }
    
    editAnimalColor(id, newColor) {
        newColor = newColor.trim();
        if (newColor === '') {
            throw 'The color cannot be empty';
        }
        const index = this.getAnimalIndexById(id);
        if (index == -1) {
            throw 'Animal with this ID is not found';
        }
        this.animals[index].color = newColor;
    }
    
    editAnimalWeight(id, newWeight) {
        if (newWeight <= 0) {
            throw 'The weight cannot be negative';
        }
        const index = this.getAnimalIndexById(id);
        if (index == -1) {
            throw 'Animal with this ID is not found';
        }
        this.animals[index].weight = newWeight;
    }
    
    editAnimalHeight(id, newHeight) {
        if (newHeight <= 0) {
            throw 'The weight cannot be negative';
        }
        const index = this.getAnimalIndexById(id);
        if (index == -1) {
            throw 'Animal with this ID is not found';
        }
        this.animals[index].height = newHeight;
    }
    
    editAnimalPlaceOfOrigin(id, newPlaceOfOrigin) {
        newPlaceOfOrigin = newPlaceOfOrigin.trim();
        if (newPlaceOfOrigin === '') {
            throw 'The place of origin cannot be empty';
        }
        const index = this.getAnimalIndexById(id);
        if (index == -1) {
            throw 'Animal with this ID is not found';
        }
        this.animals[index].placeOfOrigin = newPlaceOfOrigin;
    }
    
    showAllAnimals() {
        for (const animal of this.animals) {
            console.log(JSON.stringify(animal))
        } 
    }
    
    showAnimalById(id) {
        const index = this.getAnimalIndexById(id);
        console.log(JSON.stringify(this.animals[index]))
    }
    
    //--------------ANIMAL END---------------//
    
    
}


class Worker {
    constructor(id, firstName, lastName, phone){
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }

}

class Animal {
    constructor(id, type, color, weight, height, placeOfOrigin){
        this.id = id;
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.height = height;
        this.placeOfOrigin = placeOfOrigin;
    }
    
    get weight() {
        return  this._weight;
    }
    
    set weight(newWeight) {
        if (newWeight <= 0) {
            throw 'The weight cannot be negative';
        }
        this._weight = newWeight;
    }
    
    get height() {
        return  this._height;
    }
    
    set height(newHeight) {
        if (newHeight <= 0) {
            throw 'The weight cannot be negative';
        }
        this._height = newHeight;
    }
    
    getAnimalInfo(){
        return JSON.stringify(this);
    }
}


class Snakes extends Animal {
    isPoisonous() {
        return true;
    }
}

class CatLike extends Animal {
    isSafeToPet() {
        return true;
    }
}

class Birds extends Animal {
    isFlying() {
        return true;
    }
}


animal1 = new Animal(1, "1", "1", 1, 1, "1");
animal2 = new Animal(2, "2", "2", 2, 2, "2");
animals = [animal1, animal2]

worker1 = new Worker(1, "1", "1", "1");
worker2 = new Worker(2, "2", "2", "2");
workers = [worker1, worker2]


zoo = new Zoo("address", 100, "establishedDate", 1, workers, animals);

console.log(zoo.address)
zoo.address = "new address"
console.log(zoo.address)

console.log(zoo.area)
zoo.area = 200
console.log(zoo.area)

console.log(zoo.establishedDate)

console.log(zoo.ticketPrice)
zoo.ticketPrice = 2
console.log(zoo.ticketPrice)


console.log("\nShow workers")
zoo.showAllWorkers()
console.log("\nAdd 3d worker")
zoo.addWorker(new Worker(3, "3", "3", "3"))
zoo.showAllWorkers()
console.log("\nEdit first worker")
zoo.editWorkerFirstName(1, "One")
zoo.editWorkerLastName(1, "One")
zoo.editWorkerPhone(1, "One")
zoo.showAllWorkers()
console.log("\nRemove 3d worker")
zoo.removeWorker(3)
zoo.showAllWorkers()

console.log("\nShow animals")
zoo.showAllAnimals()
console.log("\nAdd 3d animal")
zoo.addAnimal(new Animal(3, "3", "3", 3, 3, "3"))
zoo.showAllAnimals()
console.log("\nEdit first animal")
zoo.editAnimalType(1, "One")
zoo.editAnimalColor(1, "One")
zoo.editAnimalWeight(1, 11)
zoo.editAnimalHeight(1, 11)
zoo.editAnimalPlaceOfOrigin(1, "One")
zoo.showAllAnimals()
console.log("\nRemove 3d animal")
zoo.removeAnimal(3)
zoo.showAllAnimals()

console.log("\nShow 1st animal")
zoo.showAnimalById(1)

// ANIMAL METHODS

cat = new Animal(9, "Domestic cat", "Red", 5, 25, "UK");
console.log("\nGet animal info")
console.log(cat.getAnimalInfo())
cat.weight = 111
cat.height = 111
console.log("\nEdit animal info")
console.log(cat.getAnimalInfo())



console.log("\nCreate snake")
snake = new Snakes(9, "snake", "black", 1, 2, "Uzb");
console.log("isPoisonous:" + snake.isPoisonous())

console.log("\nCreate cat-like")
cat = new CatLike(9, "Domestic cat", "Red", 5, 25, "UK");
console.log("isSafeToPet:" + cat.isSafeToPet())

console.log("\nCreate bird")
bird = new Birds(9, "Bird", "Blue", 0.5, 10, "Uganda");
console.log("isFlying:" + bird.isFlying())
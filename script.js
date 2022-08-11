let HAMBURGER = {

    size : {
        small : {
            price : 5,
            calories : 20 
        },
        
        big : {
            price : 10,
            calories : 40
        }
    },

    toppings : {
        cheese : {
            price : 1,
            calories : 20
        },

        salad : {
            price: 2, 
            calories: 5
        },
        potato : {
            price : 1.5,
            calories : 10
        },
    },

    supplements : {
        seasoning : {
            price : 1.5,
            calories : 0
        },
        mayonnaise : {
            price : 2,
            calories : 10
        }
    }

}

class Hamburger {

    constructor (size, toppings, supplements) {
        this.size = size;
        this.toppings = toppings;
        this.supplements = supplements;
    }

    whatSize () {
        return this.size;
    }

    addToppings() {
       return this.toppings;
    }

    addSupplements(){
        return this.supplements;
    }

    getPrice() {
        let sumPrice = this.size.price + this.toppings.price + this.supplements.price;
        return sumPrice;
    }
       

    getCalories() {
        let sumCcal = this.size.calories + this.toppings.calories + this.supplements.calories;
        return sumCcal
    }

};

let burger = new Hamburger (HAMBURGER.size.small, HAMBURGER.toppings.potato, HAMBURGER.supplements.mayonnaise);

console.log(burger.whatSize(HAMBURGER.size.small));
console.log(burger.addToppings(HAMBURGER.toppings.potato));
console.log(burger.addSupplements(HAMBURGER.supplements.mayonnaise));

console.log(`Total sum : ${burger.getPrice()}`);
console.log(`Total calories : ${burger.getCalories()}`);
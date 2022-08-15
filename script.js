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

    topping = [];
    supplement = [];
    

    whatSize (size) {
        this.size = size;
        return size;
    }

    addToppings(topping) {
       this.topping.push(topping);
       return topping;
    }

    addSupplements(supplement){
        this.supplement.push(supplement);
        return supplement;
    }

    getPrice() {
        let priceArray = this.topping.concat(this.supplement).concat(this.size);
        
        let initialValue = 0;
        
        let allPrice = priceArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.price;
        }, initialValue);

        return allPrice;
    }
       

    getCalories() {
        let calArray = this.topping.concat(this.supplement).concat(this.size);
        
        let initialValue = 0;
        
        let allCal = calArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.calories;
        }, initialValue);

        return allCal;
    }

};


let burger = new Hamburger (HAMBURGER.size.small);

burger.addToppings(HAMBURGER.toppings.potato);
burger.addToppings(HAMBURGER.toppings.salad);
burger.addSupplements(HAMBURGER.supplements.mayonnaise);


console.log(`Total sum : ${burger.getPrice()}`);
console.log(`Total calories : ${burger.getCalories()}`);
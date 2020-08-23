const data = {
    size : [{size: 'big' , price: 100 , cal: 40 },
           {size: 'small' , price: 50, cal: 20}],
    top : [{top : 'cheese' , price : 10, cal:20},
           {top : 'potatos' , price : 15, cal:10},
            {top : 'vegetables' , price : 20, cal:5}],
    
    addition : [{addition : 'spices' , price : 15, cal:10},
               {addition : 'mayonaise' , price : 20, cal:5}] 
};

class Hamburger {
    constructor(size, stuffing) {
        this.calories = 0;
        this.price = 0;
        this.#addSize(size);
        this.#addTop(stuffing);
    }
    
    #addSize(size) {
        data.size.forEach(element => {
            if (element.size == size) {
                this.addToPrice(element.price);
                this.addToCalories(element.cal);
            }
        });
    }
    
    #addTop(top) {
        data.top.forEach(element => {
            if (element.top == top) {
                this.addToPrice(element.price);
                this.addToCalories(element.cal);
            }
        });
    }
    
    addAddition(addition) {
        data.addition.forEach(element => {
            if( element.addition == addition) {
                this.addToPrice(element.price);
                this.addToCalories(element.cal);
            }
        })
    }
    
    addToCalories(calories) {
        this.calories += calories;
    }
    
    addToPrice(price) {
        this.price += price;
    }
    
    getTotalPrice() {
        console.log(this.price);
        return this.price;
    }
    
    getCal() {
        console.log(this.calories);
        return this.calories;
    }
}

let BigMac = new Hamburger('big', 'cheese');
BigMac.addAddition('spices');
BigMac.getTotalPrice();
BigMac.getCal();
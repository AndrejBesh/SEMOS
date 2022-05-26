class CoffeeMachine {
    coffee
    milk
    water
    servedcoffee


    constructor(coffee, milk, water, servedcoffee) {
        this.coffee = coffee
        this.milk = milk
        this.water = water
        this.servedcoffee = servedcoffee
        this.MIN_WATER = 100
        this.MIN_COFFE = 7
        this.MIN_MILK = 20
    }
    makeCoffe() {
        if (this.MIN_COFFE > this.coffee) {
            console.log(`You need to add ${this.MIN_COFFE - this.coffee}g of coffee`)
            return
        }
        if (this.MIN_MILK > this.milk) {
            console.log(`You need to add ${this.MIN_MILK - this.milk}ml of milk`)
            return
        }

        if (this.MIN_WATER > this.water) {
            console.log(`You need to add ${this.MIN_WATER - this.water}ml of water`)
            return
        }
        this.coffee -= this.MIN_COFFE
        this.water -= this.MIN_WATER
        this.milk -= this.MIN_MILK
        this.servedcoffee += 1
        console.log(`Enojoy your coffee`)



    }

    readyCoffee() {
        console.log(`Coffee made ${this.servedcoffee}`)
    }


}



const oneCoffee = new CoffeeMachine(20, 60, 250, 0)
setInterval(() => {
    oneCoffee.makeCoffe()
    oneCoffee.readyCoffee()
}, 1000)





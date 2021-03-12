// Classes and Parent/Child Relationships
// "Composite" Design Pattern
// goes hand in hand with MVC -> manage state
// Managing Objects (visually)
const name = "ian";
function convertToCelcius(F) {
    // return cool Math Trick F
}
class Counter {
    constructor() {
        this.count = 0
    }
    increment() {
        this.count++
    }
    decrement() {
        this.count--
    }
}
// super
// constructor
// do i need?
// for an entire app
// M
// V
// C
// do i need?
// Board
// Tile
// do i need?
// Board M
// Board V
// Board C
// Tile M
// Tile V
// Tile C
let raining = false
class Candle {
    // Model
    constructor(candleType, color, sparkle, id) {
        this.candleType = candleType
        this.color = color
        this.sparkle = sparkle
        this.stubbornness = .3
        this.currentlyLit = false
        this.id = id
    }
    // view
    showCandle() {
        console.log(":candle:")
    }
    // controller
    lightCandle() {
        if (!raining) {
            this.currentlyLit = true
        }
    }
    extinguish() {
        this.currentlyLit = false
    }
}
class Cake {
    // Model
    constructor(filling, batter, layers, candles) {
        this.filling = filling
        this.batterType = batter
        this.numLayers = layers
        this.candleNum = candles
        this.candleArray = this.generateCandles()
    }
    // View
    showCake() {
        console.log(":birthday:")
    }
    // Controller
    bakeCake() {
        console.log("in the bake cake method")// is not referring to html, its referring to the class
    }
    setFilling(newFlavor) {
        this.filling = newFlavor
    }
    addLayers(newAmountOfLayers) {
        this.numLayers += newAmountOfLayers
    }
    generateCandles() {
        let arr = []
        for (let index = 0; index < this.candleNum; index++) {
            const newCandle = new Candle("stick", "blue", false, index)
            arr.push(newCandle)
        }
        return arr
    }
    getFilling() {
        return this.filling
    }
}
// pilar of OOP
// inheritance
class WeddingCake extends Cake {
    constructor(filling, batter, layers, icing, candles) {
        super(filling, batter, layers)
        this.candles = candles
        this.icing = icing
        this.topper = "plastic"
    }
}
let yellowCake = new Cake("vanilla", "yellow", 3, 2)
// yellowCake.generateCandles()
console.log(yellowCake)
// let BigDayCake = new WeddingCake("vanilla", "white", 10, "buttercream", 300)
// console.log(BigDayCake)
// let pinkCake = new Cake("choclate", "pink", 3)
// console.log(pinkCake)
// function sleep(name){
//     console.log(name + " sleeps for 8 hours");
// }

function run(){

    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");
    rarity.sleep();
    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    var stinger = new Bee("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");
    var zookeeper = new Zookeeper("zoe");
    var animals = [tigger, pooh, rarity, gemma, stinger];
    zookeeper.feedAnimals(animals, "bacon");

    Animal.getPopulation();

    // var polygon = new Polygon(200,200);
    // var shape = new Shape("shape");
    // polygon.sayHistory();
    // polygon.sayName();
    // shape.sayHistory();
    // shape.sayName();




}

// function eat(name, food){
//    console.log(name + " eats " + food);
//    food == favoriteFood? console.log("YUM!!!" + name + " wants more " + food):sleep(name);
//
// }

// class Shape {
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
// }
//
//
// class Polygon extends Shape {
//
//     constructor(height, width) {
//         super('Polygon');
//         this.height = height;
//         this.width = width;
//     }
//
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }
var animalPopulation = 0;
class Animal {
    // Put your instance variables here

    constructor(name,favoriteFood) {
        animalPopulation ++;
        // initialize your vars here
    }

    sleep() {
        // complete your sleep function here

    }

    eat(food) {
        console.log(this.name + " sleeps for 8 hours");
    }
    static getPopulation(){
        console.log(animalPopulation) ;
    }

}
class Tiger extends Animal {

    constructor(name) {

        super(name, "meat");
        this.name = name;
    }

    sleep() {

    }

    eat(food) {
        this.favouriteFood= "meat";
        if(food == this.favouriteFood){
            console.log(this.name + " eats " + food);
            console.log("YUM!!! " + this.name + " wants more " + food);

        }else{
            console.log(this.name + " sleeps for 8 hours");
        }

    }
}

class Bear extends Animal {

    constructor(name) {
        super(name, "fish");
        this.name = name;

    }

    sleep() {
    }

    eat(food) {
        this.favouriteFood = "fish";
        this.food = console.log(this.name + " eats " + food);
        if(food == this.favouriteFood){
            console.log(this.name + " eats " + food);
            console.log("YUM!!! " + this.name + " wants more " + food);

        }else{
            console.log(this.name + " hibernates for 4 months");
        }
    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name, "marshmallows");
        this.name = name;
    }
    sleep(name){
        console.log(this.name + " sleeps in a cloud");
    }
    eat(food){
        this.favouriteFood = "marshmallows";
        this.food = console.log(this.name + " eats " + food );
        if(food == this.favouriteFood){
            console.log("YUM!!! " + this.name + " wants more " + food);
        }
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name, "leaves");
        this.name = name;
    }
    sleep(){
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food){

        this.favouriteFood = "leaves";

        if(food == this.favouriteFood){
            this.food = console.log(this.name + " eats " + food );
            console.log("YUM!!! " + this.name + " wants more " + food);
            this.sleep();

        }
        else{

            console.log("YUCK!!! " + this.name + " will not eat " + food);

        }

    }
}
class Bee extends Animal {
    constructor(name){
        super(name, "pollen");
        this.name = name;
    }
    sleep(name){
        console.log(this.name + " never sleeps.");
    }
    eat(food){
        this.favouriteFood = "pollen";

        if(food == this.favouriteFood){
            this.food = console.log(this.name + " eats " + food );
            console.log("YUM!!! " + this.name + " wants more " + food);
            this.sleep();

        }
        else{
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}

class Zookeeper {
    constructor(name){
        this.name = name;
    }
    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals");

        for(var i=0; i<animals.length; i++){
            animals[i].eat(food);
        }

    }
}


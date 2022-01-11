class Ninja{

    constructor(name,health,speed=3,strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }
    sayName()
    {
        console.log(this.name);
    }
    showStats(){
        console.log(`Name ${ this.name } health ${ this.health } speed ${ this.speed } strength ${ this.strength }`)
    }
    drinkSake(){
        this.health +=10;
        console.log(`health ${this.health}`);
    }
}

class Sensei extends Ninja{
    // constructor (name,wisdom=10){          //both constuctor works
    //     super(name,210,10,10)
    //     this.wisdom=wisdom;

    // }
    constructor(name,health,speed,strength,wisdom=10){
        super(name,210,10,10);
        this.wisdom=wisdom;
    }
    speakWisdom()
    {
       super.drinkSake();
       console.log("What one programmer can do in one month, two programmers can do in two months.");
    }


}

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();

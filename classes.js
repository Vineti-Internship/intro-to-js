// Before es6
function Dog(name, age, healthy){
  this.name = name;
  this.age = age;
  this.healthy = healthy;
  this.barkIntervalId;

  this.bark = () => {
    this.barkIntervalId = setInterval(() => console.log('haf'), 100);
  }

  this.stopBarking = () => {
    clearInterval(this.barkIntervalId);
  };
}

const rex = new Dog('Rex', 15, false);
console.log(rex);

const test = Dog('test', 88, true);
console.log(test);

rex.bark();

setTimeout(() => {
  rex.stopBarking();
}, 5000);

// es6
class Dog {
  constructor(name, age, healthy){
    this.name = name;
    this.age = age;
    this.healthy = healthy;
  }

  speak(){
    console.log(this.name);
  }

  static method(){
    console.log('I am a static method');
  }
}

Dog.method();

const rex = new Dog('rex', 77, true);
rex.speak();

const test = Dog();

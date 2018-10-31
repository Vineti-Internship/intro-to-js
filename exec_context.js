console.log(this);

// "function"

function f(){
  console.log(this);
}

const obj = {
  f: function(){
    console.log(this);
  }
};

obj.f();

// "function"
function Person(){
  this.age = 0;

  setInterval(function growUp() {
    this.age++;
  }, 1000);
}

const p = new Person();

// arrow
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++;
  }, 1000);
}

const p = new Person();
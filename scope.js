// global
window.a = 1;
console.log(a);

b = 2;
console.log(b);
console.log(this.b);
console.log(window.b);

let c = 3;
console.log(c);
console.log(this.c);
console.log(window.c);

// function scope
const declareVar = () => {
  const t = 1;
};

declareVar();
console.log(t);

// block scope
if (true){
  const a = 2;
}

console.log(a);

if (true){
  const a = 2;
  if (true){
    console.log(a);
  }
}

// lexical scope
const declareVar = () => {
  const t = 1;
  printVar();
};

const printVar = () => {
  console.log(t);
};

declareVar();


const declareVar = () => {
  const t = 1;
  const printVar = () => {
    console.log(t);
  };

  printVar();
};

declareVar();

// var vs let vs const
// var
if (true){
  var a = 2;
}

console.log(a);

// let const
if (true){
  let a = 1;
  const b = 2;
}

console.log(a);
console.log(b);

// var
// anonymous funcion
(()=>{
  var c = 5;
})();

console.log(c);
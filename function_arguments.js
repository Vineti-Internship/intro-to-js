// num
function alterArgumentNumber(arg) {
  arg = 1;
}

let num = 5;

console.log(num);

alterArgumentNumber(num);

console.log(num);

// string
function alterArgumentString(arg) {
  arg = 'Changed argument';
};

let str = 'Original Argument';

console.log(str);

alterArgumentString(str);

console.log(str);

// object
function alterArgumentObject(arg) {
  arg.text = 'Changed Argument';
}

let obj = {
  text: 'Original Argument'
};

console.log(obj.text);

alterArgumentObject(obj);

console.log(obj.text);

// array
function alterArgumentArray(arg) {
  arg[0] = 'Changed Argument';
}

let arr = ['Original Argument'];

console.log(arr[0]);

alterArgumentArray(arr);

console.log(arr[0]);
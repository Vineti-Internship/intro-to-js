// Number
const num = 6;

// String
const st = 'single quote';
const str = "double quote";
const oneLine = `abc
  cdf`;
const name = 'Narek';
const greet = `Hello ${name}`;

const str1 = 'concatenate';
const str2 = 'strings';
const concat = `${str1}${str2}`;

// boolean
const t = true;
const f = false;

// null
const nl = null;
const uf = undefined;

// object
const student = {
  name: 'Gurgen',
  age: 19,
  student: true
};

// array
const arr = [1,2,99,2,3,1,23,3,4,34,23];
const array = [true, false, {}, [], 1, 4, 'string'];

// Truthy and Falsy values
// Falsies
Boolean(false);
Boolean(0);
Boolean(NaN);
Boolean('');
Boolean(null);
Boolean(undefined);

// Truthies
Boolean(true);
Boolean(1);
Boolean('Intern');
Boolean([]);
Boolean({});
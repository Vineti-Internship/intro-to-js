// if...else...esle if
if (true){
  console.log('true');
}

if (false){
  console.log('true');
} else {
  console.log('false');
}

const grade = 70;
if (grade < 60)
  console.log('fail');
else if (grade > 95)
  console.log('A+');
else
  console.log('pass');

// switch
const dayN = 2;
switch(dayN){
  case 0:
    console.log('Mon');
    break;
  case 1:
    console.log('Tue');
    break;
  case 2:
    console.log('Wed');
    break;
  case 3:
    console.log('Thr');
    break;
  case 4:
    console.log('Fri');
    break;
  case 5:
  case 6:
    console.log('weekend');
    break;
  default:
    console.log('not a week day');
};
//function add(num1,num2) {
//  return num1 + num2;
//}

//const dosomething = add;

//const result = dosomething(2,3);
//console.log(result);
//const result2 = add(2,3);
//console.log(result2);

function add(num1, num2) {
 return num1 + num2;
}

//function print(name, age) {
 // console.log(`${name} ${age}`);
//}

//print(8, 33);

function surprise(operator) {
  const result = operator(2,3); //add(2,3)
  console.log(result);
}

surprise(add);
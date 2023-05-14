// node calc.js sum 3 6 2
// node calc.js sub 20 10 7
// node calc.js mult 5 9 1
// node calc.js div 20 5 2
// console.log(process.argv);
const [operator, ...argv] = process.argv.slice(2);
const numbers = argv.map((num) => Number(num));

function calculator(oper, numbersArray) {
  if ("sum" === oper) {
    return numbersArray.reduce((acum, index) => acum + index);
  }

  if ("sub" === oper) {
    return numbersArray.reduce((acum, index) => acum - index);
  }

  if ("mult" === oper) {
    return numbersArray.reduce((acum, index) => acum * index);
  }

  if ("div" === oper) {
    return numbersArray.reduce((acum, index) => acum / index);
  }

  return "Невідомий тип операції";
}

const result = calculator(operator, numbers);

console.log(result);

class CalcOop {
  constructor(operator, numbers) {
    this.operator = operator;
    this.numbers = numbers;
  }

  calculator(oper, numbersArray) {
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

  init() {
    return this.calculator(this.operator, this.numbers);
  }
}

const [operator, ...argv] = process.argv.slice(2);
const numbers = argv.map((num) => Number(num));

module.exports = new CalcOop(operator, numbers);

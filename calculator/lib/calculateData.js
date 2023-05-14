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

module.exports = calculator;

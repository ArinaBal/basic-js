const CustomError = require("../extensions/custom-error");
//getLength возвращает текущую длину цепи в виде числа;
//addLink(value) добавляет звено, содержащее строковое представление value к цепочке;
//removeLink(position) удаляет звено цепи, находящееся в заданном положении;
//reverseChain разворачивает цепь задом наперед;
//finishChain завершает цепь и возвращает ее.

//Введем переменную массив цепочки
let chain = [];

const chainMaker = {
  //Длина цепи равняется длине массива chain
  getLength() {
   return chain.lenght;
  },
  //Добавляем звено
  addLink(value) {
    //Если addLink вызван без аргументов, он добавляет пустое звено ('( )') в цепочку
   if(value === undefined) {
       chain.push(' ');
       return chainMaker;
     }
    //Добавляем строковое представление value к цепочке
    chain.push(`( ${value} )`);
     return chainMaker;
   },
  //Удаляем звено в цепи
  removeLink(position) {
    //Если положение является положительным целым числом 
    if (typeof position === "number") {
      chain.splice(position - 1, 1);
      return chainMaker;
    } else {
      chain = [];
      throw Error();
    }
  }, 
  //Разворачиваем цепь
  reverseChain() {
   chain.reverse();
     return chainMaker;
   },
  //Завершаем цепь
  finishChain() {
    let result = chain.join('~~');
    chain.splice(0, chain.length)
    return result;
  }
};
module.exports = chainMaker;
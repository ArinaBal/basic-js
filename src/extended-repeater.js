const CustomError = require("../extensions/custom-error");

//str это строка, которая будет повторена
//options это объект опций, который содержит следующие свойства:
//repeatTimes устанавливает число повторений str
//separator это строка, разделяющая повторения str
//addition это дополнительная строка, которая будет добавлена после каждого повторения str
//additionRepeatTimes устанавливает число повторений addition
//additionSeparator это строка, разделяющая повторения addition
module.exports = function repeater(str, options) {
  //зададим значения по умолчанию для параметров
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;



  //Если число повторений строки не определено, возвращаем строку
  if (repeatTimes === undefined) {
    return ''
  }

  //Зададим массив с повторяющейся строкой
  let  repeatStr = [];

  for (let i = 0; i < repeatTimes; i++) {
  //Добавляем в массив повторяющиеся строки
    repeatStr.push(str);
  }
// Зададим массив с повторяющейся доп. строкой
  let repeatAdd = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    //Добавляем в массив повторяющиеся доп. строки
    repeatAdd.push(`${addition}`);
  }

  //Разделим массив доп. строк
 let repeatAddSep = repeatAdd.join(additionSeparator);

//К каждому элементу массива повторяющихся строк добавим массив разделенных повторяющихся доп. строк
  let repeatStrAdd = repeatStr.map((element) => element + repeatAddSep)
  //Разделим получившийся массив
  let repeatStrAddSep = repeatStrAdd.join(separator);
  return repeatStrAddSep;
}
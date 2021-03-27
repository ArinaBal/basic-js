const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //Рекурсивно решаем задачу «перенести башню из n−1 диска на 2-й штырь». Затем переносим самый большой диск на 3-й штырь, и рекурсивно решаем задачу «перенеси башню из n−1 диска на 3-й штырь».
  //Отсюда методом математической индукции заключаем, что минимальное число ходов, необходимое для решения головоломки, равно 2n − 1, где n — число дисков)
  // Найдем число ходов, необходимое для решения головоломки
  let turns = Math.pow(2, disksNumber) - 1;
  //Найдем число секунд, необходимое для решения головоломки
  let seconds = Math.floor((turns * 3600) / turnsSpeed);
  return {turns, seconds}
};

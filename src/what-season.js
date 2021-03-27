const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //Проверяем передан ли аргумент 
  if (!date) { 
    return 'Unable to determine the time of year!';
  }
  //Запустим Обработку ошибок, "try..catch", если метод Метод getTime() не возвращает числовое значение, соответствующее указанной дате по всемирному координированному времени
  try {
    date.getTime();
  } catch(err) {
    throw new Error(err);
  }
  //Введем переменную для месяца указанной даты, нумерация месяцев в методе getMonth начинается с нуля для первого месяца в году.
  let month = date.getMonth();
  //Если месяц меньше 1 или равен 11, то это ЗИМА
  if ( month <= 1 || month == 11 ){
  return ('winter') } 
  //Если месяц больше или равен 2 и меньше 5, то это ВЕСНА
    if ( month >= 2 && month < 5 ){
      return ('spring')}
      //Если месяц больше или равен 5 и меньше 8, то это ЛЕТО
    if ( month >= 5 && month < 8 ) {
      return ('summer')}
      //Если месяц больше или равен 8 и меньше 11, то это ОСЕНЬ
    if ( month >= 8 && month < 11 ) {
      return('autumn')
    }
};

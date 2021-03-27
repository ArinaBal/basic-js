const CustomError = require("../extensions/custom-error");

//t=(ln(No/N))/K
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

//N0 - MODERN_ACTIVITY = 15, N - это аргумент на входе
//k=ln(2) / HALF_LIFE_PERIOD, ln - натуральный логарифм из двойки (Math.LN2)

module.exports = function dateSample(sampleActivity) {
  //Возраст должен быть целочисленным, поэтому используем parseFloat() (принимает строку в качестве аргумента и возвращает десятичное число)
  //Проверим, задан ли аргумент функции, имеет ли параметр функции sampleActivity тип string, а также несоответствующее значении активности
  if(!parseFloat(sampleActivity) || typeof sampleActivity !== "string" || MODERN_ACTIVITY < parseFloat(sampleActivity) || parseFloat(sampleActivity) <= 0) {
    return false
  }
  // Исходя из формулы возраст = натуральный логарифм от частного (MODERN_ACTIVITY / sampleActivity) и (Math.LN2 / HALF_LIFE_PERIOD), округленное до ближайшего целого
return Math.ceil((Math.log(MODERN_ACTIVITY /(parseFloat(sampleActivity)))) / (Math.LN2 / HALF_LIFE_PERIOD))
};
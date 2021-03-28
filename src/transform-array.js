const CustomError = require("../extensions/custom-error");
//--discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
//--discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
//--double-next удваивает следующий за ней элемент исходного массива в преобразованном массиве.
//--double-prev удваивает предшествующий ей элемент исходного массива в преобразованном массиве.

module.exports = function transform(arr) {
  //Функция должна выбросить ошибку, если arr не является массивом
  if (!Array.isArray(arr)){
    throw new Error("Error")
  }
  //Зададим массив с результатом вычислений
  let result = [];
  //Для каждого элемента нашего исходного массива выполним поиск управляющих последовательностей
  for (let i=0;i<arr.length;i++){
    switch(arr[i]){
      //ПОИСК ПОСЛЕДОВАТЕЛЬНОСТИ ИСКЛЮЧЕНИЯ СЛЕДУЮЩЕГО ЭЛЕМЕНТА
      //После нахождения --discard-next переходим к другому элементу
      case '--discard-next':
        i++;
        break;
        //ПОИСК ПОСЛЕДОВАТЕЛЬНОСТИ ИСКЛЮЧЕНИЯ ПРЕДЫДУЩЕГО ЭЛЕМЕНТА
        //Если значение элемента предшествующего предыдущему не равно --discard-next, то отбрасываем последний элемент, если равно, то сохраняем результат
      case '--discard-prev':
        (result.length && arr[i - 2] != '--discard-next') ? result.pop() : result;
        break;
        //ПОИСК ПОСЛЕДОВАТЕЛЬНОСТИ УДВОЕНИЯ ПРЕДЫДУЩЕГО ЭЛЕМЕНТА
        //Если значение индекса элемента больше нуля и значение элемента предшествующего предыдущему не равно --discard-next, то добавляем к результату еще одно значение с индексом предыдущего элемента
      case '--double-prev':
        (i > 0 && arr[i-2] !='--discard-next') ? result.push(arr[i-1]): result;
        break;
        //ПОИСК ПОСЛЕДОВАТЕЛЬНОСТИ УДВОЕНИЯ СЛЕДУЮЩЕГО ЭЛЕМЕНТА
        //Если значение индекса элемента меньше длины массива -1, то добавляем к результату еще одно значение с индексом следующего элемента
      case '--double-next':
        (i<arr.length-1 ) ? result.push(arr[i+1]) : result;
        break;
        //Если нет совпадений, добавляем с результат исходный массив
      default :
      result.push(arr[i]);
    }
  }
  return result;
}

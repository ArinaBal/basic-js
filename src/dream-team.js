const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //Зададим пустой массив для названия нашей команды
  let name = [];
  //Проверяем тип аргумента функции (Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является)
  if (!Array.isArray(members)) {
    return false
  };
  //для каждого элемента массива проверим являются ли они типом string
  members.forEach((member) => {
    if (typeof member == "string") {
      //Создаем массив названия из первых букв имени без пробелов и с заглавных букв
      name.push(member.trim().charAt(0).toUpperCase());
    }
    return name;
  })
  //Сортируем по алфавиту, объединяем  в одну строку
  return name.sort().join('');
};

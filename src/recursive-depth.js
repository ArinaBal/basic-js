const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //Если массив плоский, то его глубина 1, иначе 1 + глубина еще одного плоского массива и т. д.
    return (arr.filter((item) => Array.isArray(item)).length == 0) ? 1 : 1 + this.calculateDepth(arr.flat());
  }
};
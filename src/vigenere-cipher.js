const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  //Введем тип машины
  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    //Если хотя бы один параметр не был передан, должна быть выброшена ошибка
  	if( !message || !key) { 
      throw new Error("Error!"); 
    }
//Введем латинский алфавит
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encryptedMsg = '';

    //Приведем к верхнему регистру
    message = message.toUpperCase().split('');
    key = key.toUpperCase();

    for(let i = 0; i < message.length; i++){

//подгон сообщения/шифротекста - к ключу (если меньше)
      let msgI = abc.indexOf(message[i]);
      let keyI = abc.indexOf(key[ ( (i >= key.length) ? i % key.length : i ) ]);

      
      if (abc.includes(message[i])) {
        //символ по таблице Виженера.
        encryptedMsg += abc[ ( (abc.length + (msgI + keyI) ) % abc.length) ]
      } else {
        encryptedMsg += message.splice(i, 1);
        i--;
      }
    }
    return (this.type === false)? encryptedMsg.split('').reverse().join('') : encryptedMsg;
  }
  

  decrypt(encryptedMsg, key) {
     //Если хотя бы один параметр не был передан, должна быть выброшена ошибка
  	if( !encryptedMsg || !key) { 
      throw new Error("Error!"); 
    }
    //Введем латинский алфавит
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let message = '';

    //Приведем к верхнему регистру
    encryptedMsg = encryptedMsg.toUpperCase().split('');
    key = key.toUpperCase();

    for(let i = 0; i < encryptedMsg.length; i++){

      let encryptedMsgI = abc.indexOf(encryptedMsg[i]);
      let keyI = abc.indexOf(key[ ( (i >= key.length) ? i % key.length : i ) ]);

      if (abc.includes(encryptedMsg[i])) {
        //вычитание при дешифровании
        message += abc[ ( (abc.length + (encryptedMsgI - keyI) ) % abc.length) ]
      } else {
        message += encryptedMsg.splice(i, 1);
        i--;
      }
    }
    return (this.type === false)? message.split('').reverse().join('') : message;  
	}
}

module.exports = VigenereCipheringMachine;

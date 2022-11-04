const MissionUtils = require("@woowacourse/mission-utils");
const Console = require("console");
let computer = [];
let player = [];
// console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));

class App {
  play() {
    generateAnswer();
    getUserInput();
    /*let str_arr = [];
    let str = "215";
    str_arr.push(Number(str.charAt(0)));
    str_arr.push(Number(str.charAt(1)));
    str_arr.push(Number(str.charAt(2)));

    MissionUtils.Console.print(str_arr);
    MissionUtils.Console.print(str.length);*/
    MissionUtils.Console.print(player);
    MissionUtils.Console.print(computer);
    // player.forEach(element => {
    //   MissionUtils.Console.print(element);
    // })
  }
}

const getUserInput = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
    for (let i=0;i<userInput.length;i++){
      player.push(Number(userInput.charAt(i)));
    }
  });
}

const isValidInput = () => {
  return true;
}

const isStrikeOut = () => {
  return true;
}

const generateAnswer = () => {
  while(computer.length < 3){
    getRandomNumberForComputer();
  }
}

const getRandomNumberForComputer = () => {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  pushRandomNumberToComputerList(number);
}

const pushRandomNumberToComputerList = (number) => {
  if(!computer.includes(number)){
    computer.push(number);
  }
}

module.exports = App;

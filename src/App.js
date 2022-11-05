const MissionUtils = require("@woowacourse/mission-utils");
const Console = require("console");
let computer = [];
let player = [];
// console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));

class App {
  play() {
    getBaseballGameSetting();
    MissionUtils.Console.print(computer);
    MissionUtils.Console.print(player);

  }
}

const getBaseballGameSetting = () => {
  generateAnswer();
  getUserInput();
}

const restartBaseballGame = () => {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (gameInitButton) => {
    if(gameInitButton.equal(1)){
      play();
    }
  });
}

const getUserInput = () => {
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userGuessingNumber) => {
    for (let i=0;i<userGuessingNumber.length;i++){
      player.push(Number(userGuessingNumber.charAt(i)));
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

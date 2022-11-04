const MissionUtils = require("@woowacourse/mission-utils");
const computer = [];
const player = [];
// console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));

class App {
  play() {
    generateAnswer();
    computer.forEach(element=>{
      MissionUtils.Console.print(element + '<br>');
    })
    // MissionUtils.Console.print('안녕하세요.');
    // MissionUtils.Console.print(MissionUtils.Random.pickNumberInList([1, 9]));
  }
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

const MissionUtils = require("@woowacourse/mission-utils");
const Console = require("console");
// console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));

class App {
  play() {
    // 컴퓨터, 플레이어 객체
    let computer = [];
    let player = [];

    // 게임 룰 생성
    getBaseballGameSetting();

    // 게임 시작
    while(true){
      // 예측 결과 가져오기
      var Result = getResult();
      // 낫싱인 경우
      if(Result[2]!=0) {
        MissionUtils.Console.print('낫싱');
        continue;
      }
      // 스트라이크 혹은 볼인 경우
      else {
        // 스트라이크만인 경우
        if (Result[0] == 0) {
          MissionUtils.Console.print(`${Result[0]}볼`);
        }
        // 볼과 스트라이크인 경우
        else {
          // 3스트라이크인 경우
          if (Result[1] === 3) {
            MissionUtils.Console.print(`${Result[1]}스트라이크`);
            MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n');
            break;
          } else {
            MissionUtils.Console.print(`${Result[1]}스트라이크`);
          }
        }
      }
    }

    // 재시작을 원한다면 play, 원하지 않는다면 프로세스 종료
    if(doesPlayerWantsRestart()){
      play();
    }else{
      process.exit(1);
    }
  }
}

// 재시작 여부 사용자에게 질의
const doesPlayerWantsRestart = () => {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (gameInitButton) => {
    if(gameInitButton.equal(1)){
      play();
    }
  });
}

// 스트라이크 볼 낫싱 유무 판별기
const getResult = (computer,player) => {
  // Ball : Result[0], Strike : Result[1]
  var Result = [0,0];

  if(isNothing()){
    MissionUtils.Console.print('낫싱');
  }
  else{

  }
  return Result;
}

// 볼의 개수 반환
const getBallCount = () => {
  return true;
}

// 스트라이크의 개수 반환
const getStrikeCount = () => {
  return true;
}

// 낫싱인지 체크
const isNothing = () => {
  return true;
}

// 유효한 범위의 입력인지 체크
const isValidInput = () => {
  return true;
}

// setting the game rule
const getBaseballGameSetting = () => {
  generateAnswer();
  getUserInput();
}
// get user's input
const getUserInput = () => {
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userGuessingNumber) => {
    for (let i=0;i<userGuessingNumber.length;i++){
      player.push(Number(userGuessingNumber.charAt(i)));
    }
  });
}
// generate answer using random num
const generateAnswer = () => {
  while(computer.length < 3){
    getRandomNumberForComputer();
  }
}
// generate random num
const getRandomNumberForComputer = () => {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  pushRandomNumberToComputerList(number);
}
// push random num to computer obj
const pushRandomNumberToComputerList = (number) => {
  if(!computer.includes(number)){
    computer.push(number);
  }
}

module.exports = App;

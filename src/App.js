//  import MissionUtils
const MissionUtils = require("@woowacourse/mission-utils");

// 컴퓨터, 플레이어 객체
let computer = [];
let player = [];

class App {
  play() {
    // 볼,스트라이크,낫싱 카운트
    let ballCount = 0;
    let strikeCount = 0;
    let nothingCount = 0;

    // 컴퓨터의 정답 생성
    generateAnswer();

    // 게임 시작
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    // 정답 전까지 게임 진행
    while(true){
      // 플레이어 초기화 & 입력
      clearPlayer(player);
      getUserInput();

      // 볼,스트라이크,낫싱 판별
      for (const playerNum of player) {
        if (computer.includes(player[playerNum])) {
          if (computer[playerNum] === player[playerNum]) {
            strikeCount++;
          }
          else {
            ballCount++;
          }
        }
        else {
          nothingCount++;
        }
      }
      
      // 판별에 대한 출력
      if(nothingCount > 0) { // 낫싱 처리
        MissionUtils.Console.print('낫싱');
      }else{
        if(ballCount === 0) { // 스트라이크 처리
          MissionUtils.Console.print(`${strikeCount}스트라이크`);
          if(strikeCount === 3) {
            MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n');
            break;
          }
        } else{ // 볼 처리
          if(strikeCount === 0){ // 볼만 있는 경우
            MissionUtils.Console.print(`${ballCount}볼`);
          } else {              // 볼, 스트라이크인 경우
            MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
          }
        }
      }
    }

    // 재시작 여부에 따른 게임 진행 판별
    let restartButton = doesPlayerWantsRestart();
    if(restartButton===1){
      play();
    }else{
      process.exit();
    }
  }
}

// 재시작 여부 사용자에게 질의
const doesPlayerWantsRestart = () => {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (gameInitButton) => {
    try{
      if(gameInitButton>2){
        throw new Error("조작버튼은 1(새로시작), 아니면 2(종료)입니다.");
      }else{
        return gameInitButton;
      }
    }catch (e){
      alert(e.message);
    }
  });
}

// 스트라이크 볼 낫싱 유무 판별기
const getResult = (computer,player) => {
  // Ball : Result[0], Strike : Result[1], Nothing : Result[2]
  var Result = [0,0,0];

  Result[0] = getBallCount(computer,player);
  Result[1] = getStrikeCount(computer,player);
  Result[2] = isNothing(computer,player);

  return Result;
}

// 볼의 개수 반환 : 수를 포함
const getBallCount = (computer,player) => {
  return true;
}

// 스트라이크의 개수 반환 : 수를 포함하며 자리가 일치
const getStrikeCount = (computer,player) => {
  return true;
}

// 낫싱인지 체크 : 수를 가지고 있지 않음
const isNothing = (computer,player) => {
  return true;
}

// 유효한 범위의 입력인지 체크
const isValidInput = () => {
  return true;
}

const clearPlayer = (player) => {
  player.length = 0;
}

// get user's input
const getUserInput = () => {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userGuessingNumber) => {
    try{
      handleInvalidInput(userGuessingNumber);
    }catch (e) {
      alert(e.message);
    }
  });
}

// handle invalid answer input by user
const handleInvalidInput = (userGuessingNumber) =>{
  if(userGuessingNumber.length>3){
    throw new Error("숫자는 3자리만 입력해주십시오.");
  }
  pushGuessingNumber(userGuessingNumber)
}

// push user's input number to player obj
const pushGuessingNumber = (userGuessingNumber) => {
  for (let i=0;i<userGuessingNumber.length;i++){
    player.push(Number(userGuessingNumber.charAt(i)));
  }
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

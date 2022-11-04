// readline 객체 : get keyboard input
const readline = require("readline");
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
  terminal: false
});
rl.on('line',(line)=>{
  console.log(line);
});
rl.once('close',()=>{
  // end of input
});

class App {
  play() {
    console.log("숫자 야구 게임을 시작합니다.");
  }
}

while(computer.length < 3){

}


module.exports = App;

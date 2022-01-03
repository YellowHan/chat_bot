let inMsg;

document.getElementById("output").innerText = "통통 튀는 매력의 라봉이와 대화 해봐요-!!";

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id == "send") {
    inMsg = document.getElementById("user_msg").value;
    check();
    inner();
    document.getElementById("user_msg").value = "";
  }
});

const check = () => {
  if(inMsg.includes('안녕')) {
    document.getElementById("output").innerText = "안녕하세요오옹~";
  }
  if(inMsg.includes('이름')) {
    document.getElementById("output").innerText = "라봉이에요오옹~";
  }
  if(inMsg.includes('불') && inMsg.includes('꺼') || inMsg.includes('끄')) {
    let random = Math.floor(Math.random()*3)+1;
    switch(random) {
      case 1 : document.getElementById("output").innerText = "네? 뭐라고 하셨어요?";
      break;
      case 2 : document.getElementById("output").innerText = "??????????";
      break;
      case 3 : document.getElementById("output").innerText = "넵!!";
      document.body.style.background = "black";
      document.getElementById('user_msg').style.color = "white";
      break;
    }
  }
  if(inMsg.includes('불') && inMsg.includes('켜')) {
    document.getElementById("output").innerText = "불 켜져랏~ 얍-!!";
    document.getElementById("bot_img").style.background = "url(./img/lightOn.png) no-repeat";
    document.getElementById("bot_img").style.backgroundSize = "contain";
    setTimeout(() => {
      document.body.style.background = "white";
      document.getElementById("bot_img").style.background = "url(./img/lightOnDone.png) no-repeat";
      document.getElementById("bot_img").style.backgroundSize = "contain";
      document.getElementById('user_msg').style.color = "black";
    },1000);
  }
};

const inner = () => {
  if(inMsg.includes('안녕')) {
    console.log('어, 그래~');
  }
  if(inMsg.includes('이름')) {
    console.log('알아서 뭐하게?');
  }
  if(inMsg.includes('불') && inMsg.includes('꺼')) {
    console.log('아, 귀찮게 하네');
  }
  if(inMsg.includes('불') && inMsg.includes('켜')) {
    console.log('으휴.. 니가 켜라!');
  }
}

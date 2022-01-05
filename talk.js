let inMsg;
let lightOn = true;

document.getElementById("output").innerText = "통통 튀는 매력의 라봉이와 대화 해봐요-!!";

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id == "send") {
    inMsg = document.getElementById("user_msg").value;
    check();
    document.getElementById("user_msg").value = "";
  }
  if (target.id == "help") {
    if (document.getElementById("pop").style.display == "none") {
      document.getElementById("pop").style.display = "inline";
    } else {
      document.getElementById("pop").style.display = "none";
    }
  }
});

const check = () => {
  if (inMsg == "") {
    document.getElementById("output").innerText = "하고 싶은 말 없어요?";
    what();
  } else if (inMsg.includes("안녕")) {
    document.getElementById("output").innerText = "안녕하세요오옹~";
    imgDefault();
  } else if (inMsg.includes("이름")) {
    document.getElementById("output").innerText = "라봉이에요오옹~";
    imgDefault();
  } else if ((inMsg.includes("불") && inMsg.includes("꺼")) || inMsg.includes("끄")) {
    if(!lightOn) {
      document.getElementById("output").innerText = "이미 불이 꺼져 있는데요?(바보인가..)";
      what();
    }
    else {
      switch (random()) {
        case 1:
          document.getElementById("output").innerText = "네? 뭐라고 하셨어요?";
          what();
          break;
        case 2:
          document.getElementById("output").innerText = "??????????";
          what();
          break;
        case 3:
          document.getElementById("output").innerText = "넵!!";
          imgDefault();
          lightOn = false;
          document.body.style.background = "black";
          document.getElementById("user_msg").style.color = "white";
          break;
      }
    }
  } else if (inMsg.includes("불") && inMsg.includes("켜")) {
    if(lightOn) {
      document.getElementById("output").innerText = "이미 불이 켜져 있는데요?(바보인가..)";
      what();
    }
    else {
      lightOn = true;
      document.getElementById("output").innerText = "불 켜져랏~ 얍-!!";
      document.getElementById("bot_img").style.background = "url(./img/lightOn.png) no-repeat";
      document.getElementById("bot_img").style.backgroundSize = "contain";
      setTimeout(() => {
        document.body.style.background = "white";
        document.getElementById("bot_img").style.background = "url(./img/lightOnDone.png) no-repeat";
        document.getElementById("bot_img").style.backgroundSize = "contain";
        document.getElementById("user_msg").style.color = "black";
      }, 1000);
    }
  } else if (inMsg.includes("바보")) {
    document.getElementById("output").innerText = "파.업.";
    leafThrow();
  } else if (inMsg.includes("미안")) {
    document.getElementById("output").innerText = "괜차나요옹~";
    imgDefault();
  } else if (inMsg.includes("고마워")) {
    document.getElementById("output").innerText = "고마움의 표현은 입금으로 ♥_♥";
    twinkle();
  }
  else if (inMsg.includes('숨바꼭질')) {
    document.getElementById("output").innerText = "좋아요-!!";
    twinkle();
  }
  else if(inMsg.includes('숨어')) {
    document.getElementById("output").innerText = "나 찾아봐라~♬";
    switch(random()) {
      case 1 : 
      document.getElementById("bot_img").style.background = "url(./img/find1.png) no-repeat";
      document.getElementById("bot_img").style.backgroundSize = "contain";
      break;
      case 2 : 
      document.getElementById("bot_img").style.background = "url(./img/find2.png) no-repeat";
      document.getElementById("bot_img").style.backgroundSize = "contain";
      break;
      case 3 : 
      document.getElementById("bot_img").style.background = "url(./img/find3.png) no-repeat";
      document.getElementById("bot_img").style.backgroundSize = "contain";
      break;
    }
  }
  else if(inMsg.includes('찾았다')) {
    document.getElementById("output").innerText = "에잉.. 들켜버렸네..";
    leafThrow();
  }
  else {
    document.getElementById("output").innerText = "잘 모르겠어요..";
    what();
  }
};

const imgDefault = () => {
  document.getElementById("bot_img").style.background = "url(./img/default.png) no-repeat";
  document.getElementById("bot_img").style.backgroundSize = "contain";
}

const what = () => {
  document.getElementById("bot_img").style.background = "url(./img/what.png) no-repeat";
  document.getElementById("bot_img").style.backgroundSize = "contain";
}

const twinkle = () => {
  document.getElementById("bot_img").style.background = "url(./img/twinkle.png) no-repeat";
  document.getElementById("bot_img").style.backgroundSize = "contain";
}

const leafThrow = () => {
  document.getElementById("bot_img").style.background = "url(./img/iwont.png) no-repeat";
  document.getElementById("bot_img").style.backgroundSize = "contain";
  setTimeout(() => {
    document.getElementById("bot_img").style.background = "url(./img/iwontDone.png) no-repeat";
    document.getElementById("bot_img").style.backgroundSize = "contain";
  }, 400);
}
const random = () => {
  return Math.floor(Math.random() * 3) + 1;;
}
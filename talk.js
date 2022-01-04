let inMsg;

document.getElementById("output").innerText =
  "통통 튀는 매력의 라봉이와 대화 해봐요-!!";

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id == "send") {
    inMsg = document.getElementById("user_msg").value;
    check();
    document.getElementById("user_msg").value = "";
  }
  if (target.id == "help") {
    if(document.getElementById('pop').style.display == "none") {
      document.getElementById('pop').style.display = "inline";
    }
    else {
      document.getElementById('pop').style.display = "none";
    }
  }
});

const check = () => {
  if (inMsg.includes("안녕")) {
    document.getElementById("output").innerText = "안녕하세요오옹~";
  } else if (inMsg.includes("이름")) {
    document.getElementById("output").innerText = "라봉이에요오옹~";
  } else if (
    (inMsg.includes("불") && inMsg.includes("꺼")) || inMsg.includes("끄")) {
    let random = Math.floor(Math.random() * 3) + 1;
    switch (random) {
      case 1:
        document.getElementById("output").innerText = "네? 뭐라고 하셨어요?";
        break;
      case 2:
        document.getElementById("output").innerText = "??????????";
        break;
      case 3:
        document.getElementById("output").innerText = "넵!!";
        document.body.style.background = "black";
        document.getElementById("user_msg").style.color = "white";
        break;
    }
  } else if (inMsg.includes("불") && inMsg.includes("켜")) {
    document.getElementById("output").innerText = "불 켜져랏~ 얍-!!";
    document.getElementById("bot_img").style.background =
      "url(./img/lightOn.png) no-repeat";
    document.getElementById("bot_img").style.backgroundSize = "contain";
    setTimeout(() => {
      document.body.style.background = "white";
      document.getElementById("bot_img").style.background =
        "url(./img/lightOnDone.png) no-repeat";
      document.getElementById("bot_img").style.backgroundSize = "contain";
      document.getElementById("user_msg").style.color = "black";
    }, 1000);
  } else if (inMsg.includes("바보")) {
    document.getElementById("output").innerText = "파.업.";
    document.getElementById("bot_img").style.background =
      "url(./img/iwont.png) no-repeat";
    document.getElementById("bot_img").style.backgroundSize = "contain";
    setTimeout(() => {
      document.getElementById("bot_img").style.background =
        "url(./img/iwontDone.png) no-repeat";
      document.getElementById("bot_img").style.backgroundSize = "contain";
    }, 400);
  } else if (inMsg.includes("미안")) {
    document.getElementById("output").innerText = "괜차나요옹~";
    document.getElementById("bot_img").style.background =
      "url(./img/default.png) no-repeat";
    document.getElementById("bot_img").style.backgroundSize = "contain";
  } else if (inMsg == "고마워") {
    document.getElementById("output").innerText =
      "고마움의 표현은 입금으로 ♥_♥";
    document.getElementById("bot_img").style.background =
      "url(./img/twinkle.png) no-repeat";
    document.getElementById("bot_img").style.backgroundSize = "contain";
  } else {
    document.getElementById("output").innerText = "잘 모르겠어요..";
    document.getElementById("bot_img").style.background =
      "url(./img/what.png) no-repeat";
    document.getElementById("bot_img").style.backgroundSize = "contain";
  }
};

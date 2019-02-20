var play = document.getElementById("play");
var gcf = document.getElementById("gc-f");
var gctw = document.getElementById("gc-tw");
var player = document.getElementById("player");
var speed = 10;
var time = 1000
var game = null;
var score = document.getElementById("score");
var num = 0;
var waste = document.getElementById("waste")
var gcOver = document.getElementById("gc-over");
var blood = 0;
var overScore = document.getElementById("overScore");
var replay = document.getElementById("replay");
var gcgiff = document.getElementById("gc-gif-f");
var gcgiftw = document.getElementById("gc-gif-tw");
var gcgiftr = document.getElementById("gc-gif-tr");
var isStart = false;
var overText = document.getElementById("overText");
var gcwap = document.getElementById("gc-wap");
//开始游戏
play.onclick = function() {
  gcf.className = "gc-f gc-f-over";
  isStart = true;
  setTimeout(function() {
    gcf.style.display = "none";
    start();
  }, 2000)
}
replay.onclick = function() {
  num = 0;
  score.innerHTML = "饭量：" + num;
  blood = 0;
  waste.innerHTML = "浪费：" + blood;
  gcOver.style.display = "none";
  gctw.style.display = "block";
  isStart = true;
  start();
}
gcgiff.onclick = function() {
  if(!isStart) {
    speed = 10;
    time = 1000;
    gcgiff.className = "gc-dif gc-gif-f gc-gif-selected";
    gcgiftw.className = "gc-dif gc-gif-tw";
    gcgiftr.className = "gc-dif gc-gif-tr";
  }
}
gcgiftw.onclick = function() {
  if(!isStart) {
    speed = 15;
    time = 600;
    gcgiff.className = "gc-dif gc-gif-f";
    gcgiftw.className = "gc-dif gc-gif-tw gc-gif-selected";
    gcgiftr.className = "gc-dif gc-gif-tr";
  }
}
gcgiftr.onclick = function() {
  if(!isStart) {
    speed = 20;
    time = 400;
    gcgiff.className = "gc-dif gc-gif-f";
    gcgiftw.className = "gc-dif gc-gif-tw";
    gcgiftr.className = "gc-dif gc-gif-tr gc-gif-selected";
  }
}
document.onkeydown = function(e) {
  var keyNum = window.event ? e.keyCode : e.which;
  var bo = player.offsetTop;
  if(keyNum == 38) {
    bo = 600 - (bo + 150) + 150;
    if(bo >= 450) {
      player.style.bottom = "450px";
    } else {
      player.style.bottom = bo + "px";
    }
  }
  if(keyNum == 40) {
    bo = 600 - (bo + 150) - 150;
    if(bo <= 0) {
      player.style.bottom = "0px";
    } else {
      player.style.bottom = bo + "px";
    }
  }
}

function start() {
  game = setInterval(function() {
    creatShut();
  }, time)
  creatShut();
}

function random(n, m) {
  var c = m - n + 1;
  return Math.floor(Math.random() * c + n);
}

function creatShut() {
  var hg = document.createElement("img");
  hg.src = "http://img.sparke.cn/images/dfxl/2018/7/rg.png";
  hg.className = "gc-hot";
  hg.style.bottom = random(0, 3) * 150 + 45 + "px";
  gctw.appendChild(hg);
  shutMove(hg);
}

function shutMove(item) {
  let iLeft = item.offsetLeft;
  var timer = setInterval(function() {
    iLeft -= speed + num * 0.5;
    item.style.left = iLeft + "px";
    pTop = player.offsetTop;
    pBot = player.offsetTop + 150;
    pLeft = 105;
    hTop = item.offsetTop;
    hBot = item.offsetTop + 79;
    hLeft = item.offsetLeft;
    if(hLeft <= 105 && hTop >= pTop && hBot <= pBot) {
      clearInterval(timer);
      gctw.removeChild(item);
      num++;
      score.innerHTML = "饭量：" + num;
    } else if(iLeft <= 0) {
      clearInterval(timer);
      gctw.removeChild(item);
      blood++;
      waste.innerHTML = "浪费：" + blood;
      if(blood >= 3) {
        gameOver();
        isStart = false;
      }
    }
  }, 10)
}

function gameOver() {
  clearInterval(game);
  gcOver.style.display = "flex";
  gctw.style.display = "none";
  if(num == 0) {
    overText.innerHTML = "一个也吃不了？( ° _ °|||)︴"
  } else if(num > 0 && num < 50) {
    overText.innerHTML = "浪费可耻！但你已经吃了<span id='overScore'>" + num + "</span>个热狗了！"
  } else if(num > 50) {
    "(๑ŐдŐ)wow！你已经吃了<span id='overScore'>" + num + "</span>个热狗了！"
  }
}

document.onmousemove = function() {
  event.preventDefault()
}

function changeSize() {
  var cWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if(cWidth < 1300) {
    gcwap.style.display = "flex";
  } else {
    gcwap.style.display = "none";
  }
}
changeSize();
window.onresize = changeSize;

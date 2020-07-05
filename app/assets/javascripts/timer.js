//タイマー処理
var timer1;

//カウントダウン関数を1000ミリ秒ごとに呼び出す関数
function cntStart() {
  document.timer.elements[2].disabled=true;
  timer1 = setInterval("countDown()",1000);
}

// カウントダウン関数
function countDown() {
  var min=document.timer.elements[0].value;
  var sec=document.timer.elements[1].value;

  if((min=="")&&(sec=="")) {
    alert("時間を設定してください！");
    reSet();
  }
  else {
    if(min=="")min=0;
    min=parseInt(min);

    if(sec=="")sec=0;
    sec=parseInt(sec);

    tmWrite(min*60+sec-1);
  }
}

// 残り時間を書き出す関数
function tmWrite(int) {
  int=parseInt(int);

  if(int <= 0) {
    reSet();
    alert("時間です！");
  }
  else {
    //残り分すうはintを60で割って切り捨てる
    document.timer.elements[0].value=Math.floor(int/60);
    //残り秒数はintを60で割った余り
    document.timer.elements[1].value=int % 60;

    var time_remaining = document.timer.elements[0].value + ":" + document.timer.elements[1].value;
    document.getElementById('time_remaining').innerHTML = time_remaining;
  }
}

// フォームを初期状態に戻す(リセット)関数
function reSet() {
  document.timer.elements[0].value="0";
  document.timer.elements[1].value="0";
  document.timer.elements[2].disabled=false;
  clearInterval(timer1);
  time_remaining.style.display = "none";
}
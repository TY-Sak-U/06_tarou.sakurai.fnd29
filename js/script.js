'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// Mainウィンドウの初期化 : main.htm
function openWindowInitialize(){
  $("activate").onclick = next;
  $("reset").onclick = reset;
  $("result").innerText = localStorage.result;
}

// 次の数字を表示 : main.htm
function next() {
  // 以前、値が初期化されているか確認
  if (typeof (localStorage.bingo) === "undefined") {
    initTable(); // 初期化
  }
  // ストレージから値を一つ取り出す
  let tbl = JSON.parse(localStorage.bingo);
  let no = tbl.shift();
  // 画面に表示
  $("bingoresult").innerHTML = "<img src='../img/waitanime.gif',width =100px>";
  $("leftover").innerHTML = "残りは、" + tbl.length + "個";
  setTimeout(function () {
    $("bingoresult").innerText = "  " + no;
    audio();
  }, 500);
  // 最後まで行ったか確認
  if (tbl.length === 0) {
    alert("すべての数字を取り出しました。");
    initTable();
  } else {
    // 残りをストレージに保存する
    localStorage.bingo = JSON.stringify(tbl);
    // 来歴の表示
    if (localStorage.result === "") {
      localStorage.result = no;
    } else {
      localStorage.result += ", " + no;
    }
    // 数字の表示をアニメーション終了と同期させる
    setTimeout(function () {
      ;
      $("result").innerText = localStorage.result;
    }, 500);
  }
}

// リセットする :main.htm
function reset() {
  resetAudio();
  let r = confirm("リセットしても良いですか?");
  if (!r) return;
  initTable();
  $("activate").innerHTML = "";
  $("leftover").innerHTML = "";
}

// 初期化する :main.htm
function initTable() {
  // 1から75までの数を配列に入れる
  let tbl = [];
  for (let no = 1; no <= 75; no++) {
    tbl.push(no);
  }
  // 配列をシャッフルする
  let n = tbl.length;
  let i;
  let tmp;
  while (n) {
    i = Math.floor(Math.random() * n);
    n--;
    tmp = tbl[n];
    tbl[n] = tbl[i];
    tbl[i] = tmp;
  }
  console.log(tbl);
  // localStorageに保存する
  localStorage.bingo = JSON.stringify(tbl);
  localStorage.result = "";
  window.location.reload();
}

// id呼び出し部分の簡略化用関数 :main.htm
function $(id) {
  return document.getElementById(id);
}

// 効果音呼び出しイベント定義(スタート) :main.htm
const startSound = document.getElementById("start-button");
sound.addEventListener("click", startAudio);

// 効果音呼び出しイベント定義(リセット) :main.htm
const resetSound = document.getElementById("reset");
sound.addEventListener("click", resetAudio);

// 効果音の再生（メイン画面呼び出し） : index.thml
function startAudio() {
  document.getElementById('start_audio').currentTime = 0; //連続クリックに対応
  document.getElementById('start_audio').play(); //クリックしたら音を再生
}

// 効果音の再生（リセット） :main.htm
function resetAudio() {
  document.getElementById('reset_audio').currentTime = 0; //連続クリックに対応
  document.getElementById('reset_audio').play(); //クリックしたら音を再生
}

// 効果音の再生（決定） :main.htm
function audio() {
  document.getElementById('fix_audio').currentTime = 0; //連続クリックに対応
  document.getElementById('fix_audio').play(); //クリックしたら音を再生
}

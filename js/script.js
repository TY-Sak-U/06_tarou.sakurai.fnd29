'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

function example(num) {
  console.log(num);
}

function sleep(waitMsec) {
  let startMsec = new Date();

  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function sleepWithInterval(ms) {
  let start = new Date().getTime();
  let end = start;
  while(end < start + ms) {
      end = new Date().getTime();
  }
}

function makeChooseWindow() {
  window.open("./select.htm", null, "width = 200, height = 150");
}

function openPopup(url) {
  window.open(url, '_blank', 'width=300, height=400');
}

// const myElement = document.getElementById("activate");
// myElement.addEventListener("click", makeChooseWindow);

let bingoAry = [1, 2, 3, 4];
const myButton = document.getElementById("bingobutton");
myButton.addEventListener("click", displayNumber(5));

function displayNumber(ary) {
  let display = document.getElementById("bingonumber");
  display.textContent = 5;
}

$("bingobutton").onlick = next;

const reset = document.getElementById("reset")
reset.addEventListener("click", initTable)
// 
    // 初期化する
    function initTable() {
      // 1から75までの数を配列に入れる
      let tbl = [];
      for (let no = 1; no <= 75; no++) {
        tbl.push(no);
      }
      // 配列をシャッフルする
      let n = tbl.length;
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
      window.location.reload();
    }

function $(id) {
  return document.getElementById(id);
}



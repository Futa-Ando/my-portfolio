// まる。画像クリック
const maruImage = document.getElementById("maru-image");
maruImage.src = "./images/maru1.jpg";

const images = [
  "maru1.jpg",
  "maru2.jpg",
  "maru3.jpg",
  "maru4.jpg",
  "maru5.jpg",
  "maru6.jpg",
  "maru7.jpg",
  "maru8.jpg",
];

let num = 2;

maruImage.onclick = function () {
  if (num <= 7) {
    maruImage.src = "./images/" + images[num];
    num += 1;
  } else {
    num = 1;
    maruImage.src = "./images/" + image[1];
  }
};

// クイズ１問目
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const feedback1 = document.getElementById("feedback1");
const feedback2 = document.getElementById("feedback2");

const feedbacks1 = [
  {
    fb: "正解！ まる。はとあるシリーズが好きなのだ👍",
    image: "toaru.png",
  },
  {
    fb: "残念！ 実はまる。氏、ジョジョを見たことがないのだ💦",
    image: "jojo.png",
  },
  {
    fb: "残念！ ヒロアカも好きだけど、１番ではないのだ💦",
    image: "hiroaka.png",
  },
];

const choose1 = function (choiceNumber) {
  feedback1.textContent = feedbacks1[choiceNumber].fb;
  feedback2.src = "./images/" + feedbacks1[choiceNumber].image;
};

choice1.onclick = function () {
  choose1(0);
};
choice2.onclick = function () {
  choose1(1);
};
choice3.onclick = function () {
  choose1(2);
};

// 以下２問目
const choice4 = document.getElementById("choice-4");
const choice5 = document.getElementById("choice-5");
const choice6 = document.getElementById("choice-6");
const choice7 = document.getElementById("choice-7");
const feedback3 = document.getElementById("feedback3");
const feedback4 = document.getElementById("feedback4");
const feedback5 = document.getElementById("feedback5");
const feedback6 = document.getElementById("feedback6");

const feedbacks2 = [
  "残念！ もっと多くの人と話したことあるのだ💦",
  "残念！ なんとまだまだ少ないのだ💦",
  "正解！ まる。氏は170人弱の人とお話ししたことがあるのだ👍",
  "残念！ そこまで多くはないのだ💦",
  "クイズにいどんだそこのあなた！ なんかの縁だからおはなししようよ♪",
  ,
];

const choose2 = function (choiceNumber) {
  feedback3.textContent = feedbacks2[choiceNumber];
  feedback4.textContent = feedbacks2[4];
  feedback5.href = "https://app.aitemasu.me/u/futa990628/60min";
  feedback6.src = "./images/pushButton.png";
};

choice4.onclick = function () {
  choose2(0);
};
choice5.onclick = function () {
  choose2(1);
};
choice6.onclick = function () {
  choose2(2);
};
choice7.onclick = function () {
  choose2(3);
};

const heartButton = document.getElementById("heart-button");
const heartCount = document.getElementById("heart-count");

let count = 0;
let response = [
  "ありがとう！",
  "え？！　ありがとう！！！",
  "めっちゃうれしい♪♪♪",
  "きみさいこ～～～(⌒∇⌒)",
  "やっほ～い、うれしすぎるの舞(o^―^o)♪♪",
];

heartButton.onclick = function () {
  count += 1;
  if (count <= 4) {
    heartCount.textContent = response[count - 1];
  } else {
    heartCount.textContent = response[4];
    heartButton.textContent = "";
  }
};

// 追従メニュー
const onClickButton = document.getElementById("on-click-button");
const p1 = document.getElementById("box1");
const p2 = document.getElementById("box2");
p1.style.display = "block";
p2.style.display = "none";

onClickButton.addEventListener("mouseenter", function (event) {
  p1.style.display = "none";
  p2.style.display = "block";
});
onClickButton.addEventListener("mouseleave", function (event) {
  p1.style.display = "block";
  p2.style.display = "none";
});

// スクロール
let fadeInTarget = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  for (let i = 0; i < fadeInTarget.length; i++) {
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add("scroll-in");
    }
  }
});

const music = document.getElementById("music");

const intro = document.getElementById("intro");
const scenes = document.querySelectorAll(".scene");

const start = document.getElementById("start");

const wish = document.getElementById("wish");
const cut = document.getElementById("cut");

const cake = document.querySelector(".cake-wrap");
const cakeText = document.getElementById("cakeText");

const cakeNext = document.getElementById("cakeNext");

const gift = document.querySelector(".gift");
const openGift = document.getElementById("openGift");

const ring = document.getElementById("ring");
const ringMessage = document.getElementById("ringMessage");

const letterButton = document.getElementById("letterButton");


/* =========================
   SCENE SYSTEM
========================= */

function showScene(id) {

  scenes.forEach(scene => {
    scene.classList.remove("active");
  });

  const target = document.getElementById(id);

  target.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================
   START EXPERIENCE
========================= */

start.addEventListener("click", () => {

  music.volume = 0.45;

  music.play().catch(() => {
    console.log("Audio waiting for permission.");
  });

  showScene("couple");

});


/* =========================
   NORMAL CONTINUE BUTTONS
========================= */

document.querySelectorAll(".continue").forEach(button => {

  button.addEventListener("click", () => {

    const next = button.dataset.next;

    if (next) {
      showScene(next);
    }

  });

});


/* =========================
   WISH
========================= */

wish.addEventListener("click", () => {

  cake.classList.add("blown");

  cakeText.innerHTML =
    "wish made. ♡<br>now let's cut the cake.";

  wish.classList.add("hidden");

  cut.classList.remove("hidden");

});


/* =========================
   CUT CAKE
========================= */

cut.addEventListener("click", () => {

  cakeText.innerHTML =
    "Happy Birthday, my love.";

  cut.classList.add("hidden");

  createConfetti();

  setTimeout(() => {

    cakeNext.classList.remove("hidden");

  }, 1200);

});


/* =========================
   CAKE NEXT
========================= */

cakeNext.addEventListener("click", () => {

  showScene("gift");

});


/* =========================
   CONFETTI
========================= */

function createConfetti() {

  const colors = [
    "#67172d",
    "#8b2943",
    "#eee4d6",
    "#c8ae83"
  ];

  for (let i = 0; i < 55; i++) {

    const piece =
      document.createElement("span");

    piece.style.position = "fixed";

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.top = "-15px";

    piece.style.width =
      Math.random() * 5 + 3 + "px";

    piece.style.height =
      Math.random() * 10 + 5 + "px";

    piece.style.background =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];

    piece.style.zIndex = "999";

    piece.style.pointerEvents = "none";

    document.body.appendChild(piece);


    const duration =
      Math.random() * 1800 + 1800;

    piece.animate(
      [
        {
          transform: "translateY(0) rotate(0)",
          opacity: 1
        },
        {
          transform:
            `translateY(110vh) rotate(${Math.random() * 700}deg)`,
          opacity: 0
        }
      ],
      {
        duration,
        easing: "cubic-bezier(.2,.7,.2,1)"
      }
    );


    setTimeout(() => {
      piece.remove();
    }, duration);

  }

}


/* =========================
   OPEN GIFT
========================= */

openGift.addEventListener("click", () => {

  gift.classList.add("opened");

  openGift.classList.add("hidden");

  document.getElementById("giftText").textContent =
    "for the one I love...";

  setTimeout(() => {

    ring.classList.remove("hidden");

  }, 700);


  setTimeout(() => {

    ringMessage.classList.remove("hidden");

  }, 1500);

});


/* =========================
   LETTER
========================= */

letterButton.addEventListener("click", () => {

  document
    .getElementById("gift")
    .classList.remove("active");

  document
    .getElementById("letter")
    .scrollIntoView({
      behavior: "smooth"
    });

});


/* =========================
   REDUCED MOTION
========================= */

if (
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
) {

  document
    .querySelectorAll("*")
    .forEach(element => {

      element.style.animationDuration = "0.01ms";

      element.style.transitionDuration = "0.01ms";

    });

}

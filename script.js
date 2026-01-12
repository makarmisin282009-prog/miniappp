const tg = window.Telegram.WebApp;
tg.expand();

let score = 0;
let energy = 100;
const maxEnergy = 100;

const scoreEl = document.getElementById("score");
const energyEl = document.getElementById("energy");
const energyFill = document.getElementById("energy-fill");
const coin = document.getElementById("coin");

function updateUI() {
  scoreEl.innerText = score;
  energyEl.innerText = energy;
  energyFill.style.width = (energy / maxEnergy * 100) + "%";
}

coin.onclick = () => {
  if (energy <= 0) return;

  score++;
  energy--;
  updateUI();
};

// ENERGY REGEN
setInterval(() => {
  if (energy < maxEnergy) {
    energy++;
    updateUI();
  }
}, 1000);

updateUI();

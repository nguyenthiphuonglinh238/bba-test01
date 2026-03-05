let playerName = "Mario";
let currentLives = 3;
const coins = {
    level1: 25,
    level2: 30,
    level3: 45
}

let totalCoins = 0;
for (const level in coins) {
    totalCoins += coins[level];
}
console.log(totalCoins);

const avgCoins = totalCoins / 3;
console.log(avgCoins);

const remainder = totalCoins % 3;
console.log(`Số coin dư khi chia tổng số coin cho 3 là ${remainder}`);




let count = 0;
let sum = 0;
function findPairsDivisibleBy17() {
    console.log("Các cặp số từ 1 đến 100 chia hết cho 17 là:");
    for (let i = 1; i <= 100; i++) {
        for (let j = 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                count = count + 1;
                sum = i + j;
                console.log(`(${i},${j}) = ${sum}`);
            }
        }
    }
    console.log(`\nTổng cộng: ${count} cặp`);
}
findPairsDivisibleBy17();
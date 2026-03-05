//Bai 1
const characters = [
    { name: "Mario", level: 5, health: 300 },
    { name: "Luigi", level: 3, health: 500 },
    { name: "Peach", level: 1, health: 1000 },
    { name: "Yoshi", level: 2, health: 700 },
    { name: "Phong", level: 4, health: 900 }
];
const charactersPowerUp = characters.map((character) => (
    {
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3
    }));
console.log(charactersPowerUp);

const possibleWinners = charactersPowerUp.filter(character => character.health > 1000);
console.log(possibleWinners);

//Bai 2
const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Phong", score: 500 }
];
const medal = ["🥇", "🥈", "🥉"];

function createLeaderboard(playersParam) { // cái này là param định nghĩa hàm sẽ không cần phải giống với tên biến lúc gọi 
    return playersParam.sort((a, b) => b.score - a.score).map((player, index) => ({ //player ở đây là biến đại diện cho từng thằng trong danh sách playersParam
        rank: index + 1,
        name: player.name.toUpperCase(),
        score: player.score,
        medal: medal[index] || ""// su dung mang medal theo thứ tự index: medal[index]
    }));
}
console.log(createLeaderboard(players)); // chưa return hàm thì sẽ không show được data ra log.

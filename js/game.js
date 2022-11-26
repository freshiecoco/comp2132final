let roundNumber = 0;
const imgR = `../images/`;
const player = new DicePlayer(`player`);
const cpu = new DicePlayer(`cpu`);

const rollButton = document.getElementById(`roll`);

rollButton.addEventListener(`click`, playDice);

function playDice()
{
    document.getElementById(`roundDisplay`).innerHTML = `Round ` + (roundNumber + 1);
    player.roll();
    cpu.roll();
    const pd1 = player.rolls[roundNumber][0];
    const pd2 = player.rolls[roundNumber][1];
    const cd1 = cpu.rolls[roundNumber][0];
    const cd2 = cpu.rolls[roundNumber][1];

    player.dice1.innerHTML = `<img src="${imgR + pd1 + `.png`}" alt="${pd1}" class="diceImage">`;
    player.dice2.innerHTML = `<img src="${imgR + pd2 + `.png`}" alt="${pd2}" class="diceImage">`;
    player.scoreRound.innerHTML = `<p>You scored ${player.scores[roundNumber]}</p>`;
    player.scoreTotal.innerHTML = `<p>Your total score: ${player.total}`;

    cpu.dice1.innerHTML = `<img src="${imgR + cd1 + `.png`}" alt="${cd1}" class="diceImage">`;
    cpu.dice2.innerHTML = `<img src="${imgR + cd2 + `.png`}" alt="${cd2}" class="diceImage">`;
    cpu.scoreRound.innerHTML = `<p>Opponent scored ${cpu.scores[roundNumber]}</p>`;
    cpu.scoreTotal.innerHTML = `<p>Opponent's total score: ${cpu.total}`;
    roundNumber++;
    if (roundNumber > 2)
    {
        rollButton.disabled = true;
        let gameOverText = ``;
        if (player.total > cpu.total)
        {
            gameOverText = `You win!`;
        }
        else if (player.total < cpu.total)
        {
            gameOverText = `You lose!`;
        }
        else
        {
            gameOverText = `Draw!`;
        }

        document.getElementById(`gameContainer`).innerHTML += `<h2>${gameOverText} Final score: ${player.total} : ${cpu.total}</h2>`
    }
}
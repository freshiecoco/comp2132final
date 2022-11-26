let roundNumber = 1;
const player = new DicePlayer(`yourScore`);
const puter = new DicePlayer(`theirScore`);
let playerScoreText = ``;
let puterScoreText = ``;

const play = document.getElementById(`playButton`);
const again = document.getElementById(`againButton`);
play.onclick = function() {
    player.round();
    puter.round();
    playerScoreText += `<p>Round ${roundNumber}: you rolled ${player.rolls[roundNumber * 2 - 2]} and ${player.rolls[roundNumber * 2 - 1]}</p>`;
    playerScoreText += `<p>Round score: ${player.score[roundNumber - 1]}</p>`;
    puterScoreText += `Round ${roundNumber}: CPU rolled ${puter.rolls[roundNumber* 2 - 2]} and ${puter.rolls[roundNumber * 2 - 1]}</p>`;
    puterScoreText += `<p>Round score: ${puter.score[roundNumber - 1]}</p>`;
    player.scoreId.innerHTML = playerScoreText;
    puter.scoreId.innerHTML = puterScoreText;
    roundNumber++;
    if (roundNumber > 3)
    {
        const result = player.scoreTotal - puter.scoreTotal;
        let alertText;
        if (result > 0)
        {
            alertText = `You win!`;
        }
        else if (result < 0)
        {
            alertText = `You lose!`;
        }
        else
        {
            alertText = `Draw!`;
        }
        setTimeout(window.alert(`${alertText} Final score: ${player.scoreTotal} : ${puter.scoreTotal}`), 2000);
        play.classList.toggle(`hidden`);
        again.classList.toggle(`hidden`);
    }
};

again.onclick = function() {
    play.classList.toggle(`hidden`);
    again.classList.toggle(`hidden`);
    player.reset();
    puter.reset();
    player.scoreId.innerHTML = ``;
    playerScoreText = ``;
    puter.scoreId.innerHTML = ``;
    puterScoreText = ``;
    roundNumber = 1;
    play.click();
}

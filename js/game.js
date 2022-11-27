class DiceGame
{
    constructor(playerId, cpuId, roundId, rollButtonId, gameOverId, restartButtonId)
    {   
        this.roundNum  = 0;
        this.player = new DicePlayer(playerId);
        this.cpu    = new DicePlayer(cpuId);
        
        this.roundDisplay  = document.getElementById(roundId);
        this.rollButton    = document.getElementById(rollButtonId);
        this.gameOverPopUp = document.getElementById(gameOverId);
        this.gameOverText  = document.getElementById(gameOverId + `Text`);
        this.gameOverMask  = document.getElementById(gameOverId + `Mask`);
        this.restartButton = document.getElementById(restartButtonId);
        this.restartPopUp  = document.getElementById(restartButtonId + `PopUp`);
        this.restartMask   = document.getElementById(restartButtonId + `Mask`);
        this.restartYes    = document.getElementById(restartButtonId + `Yes`);

        this.rollButton.onclick    = this.play.bind(this);
        this.restartButton.onclick = this.restart.bind(this);
        this.restartYes.onclick    = this.reset.bind(this);
    }

    play()
    {
        this.restartButton.disabled = false;
        this.roundDisplay.innerHTML = `Round: ` + (++this.roundNum);
        this.player.generatePackage();
        this.cpu.generatePackage();

        if (this.roundNum > 2)
        {
            this.gameOver();
        }
    }

    gameOver()
    {
        this.rollButton.disabled = true;
        this.gameOverText.innerHTML = `<h2>${this.player.makeGameOverText(this.cpu)}</h2>`;
        this.gameOverText.innerHTML += `<h2>Final score: ${this.player.total} : ${this.cpu.total}</h2>`
        this.gameOverPopUp.classList.remove(`hidden`);
        this.gameOverMask.classList.remove(`hidden`);
    }

    reset()
    {
        this.roundNum = 0;
        this.roundDisplay.innerHTML = `Round: `;
        this.player.discardPackage();
        this.cpu.discardPackage();
        this.restartButton.disabled = true;
        this.rollButton.disabled = false;
        this.restartPopUp.classList.add(`hidden`);
        this.restartMask.classList.add(`hidden`);
    }

    restart()
    {
        this.restartPopUp.classList.remove(`hidden`);
        this.restartMask.classList.remove(`hidden`);
    }
}

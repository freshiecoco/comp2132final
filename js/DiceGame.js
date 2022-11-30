const winSound  = new Audio(`../audios/youwin.wav`);
const loseSound = new Audio(`../audios/youlose.wav`);
winSound.volume = 0.3;
loseSound.volume = 0.3;

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
        this.restartManual = document.getElementById(restartButtonId + `Manual`);
        this.restartAuto   = document.getElementById(restartButtonId + `Auto`);        
    }

    play()
    {
        this.restartButton.disabled = false;
        this.roundDisplay.innerHTML = `Round: ` + (++this.roundNum);
        this.player.generatePackage();
        this.cpu.generatePackage(`CPU`, `CPU's`);
        if (this.roundNum > 2)
        {
            this.gameOver();
        }
    }

    gameOver()
    {
        this.rollButton.disabled = true;
        this.gameOverText.innerHTML = this.player.makeGameOverText(this.cpu);
        if (this.player.total > this.cpu.total)
        {
            winSound.play();
        }
        else
        {
            loseSound.play();
        }

        this.toggleGameOverPopUp();
    }

    reset()
    {
        this.roundNum = 0;
        this.roundDisplay.innerHTML = `Round: `;
        this.player.discardPackage();
        this.cpu.discardPackage();
        this.restartButton.disabled = true;
        this.rollButton.disabled = false;
    }

    resetAuto()
    {
        this.reset();
        this.toggleGameOverPopUp();        
    }

    resetManual()
    {
        this.reset();
        this.toggleRestartPopUp();
    }

    toggleRestartPopUp()
    {
        this.restartPopUp.classList.toggle(`hidden`);
        this.restartMask.classList.toggle(`hidden`);
    }

    toggleGameOverPopUp()
    {
        this.gameOverMask.classList.toggle(`hidden`);
        this.gameOverPopUp.classList.toggle(`hidden`);
    }
}

const game = new DiceGame(`player`, `cpu`, `roundDisplay`, `roll`, `gameOver`, `restart`);

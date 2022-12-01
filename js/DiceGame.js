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
        this.restartButton = document.getElementById(restartButtonId);
        this.restartPopUp  = document.getElementById(restartButtonId + `PopUp`);
        this.restartManual = document.getElementById(restartButtonId + `Manual`);
        this.restartAuto   = document.getElementById(restartButtonId + `Auto`);
        this.mask          = document.getElementById(`mask`);    
    }

    play()
    {
        this.restartButton.disabled = false;
        this.roundDisplay.innerHTML = `Round: ` + (++this.roundNum);
        this.player.generatePackage();
        this.cpu.generatePackage(`CPU`, `CPU's`);

        if (this.roundNum > 2)
        {
            this.rollButton.disabled = true;
            this.restartButton.disabled = true;
            setTimeout(this.gameOver.bind(this), 500);
        }
    }

    gameOver()
    {
        
        this.gameOverText.innerHTML = this.player.makeGameOverText(this.cpu);
        this.player.total > this.cpu.total ? winSound.play() : loseSound.play();
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
        this.mask.classList.toggle(`hidden`);
    }

    toggleGameOverPopUp()
    {
        this.mask.classList.toggle(`hidden`);
        this.gameOverPopUp.classList.toggle(`hidden`);
        this.restartButton.disabled = false;
    }
}

const game = new DiceGame(`player`, `cpu`, `roundDisplay`, `roll`, `gameOver`, `restart`);

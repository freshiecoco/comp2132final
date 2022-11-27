class DiceGame
{
    constructor()
    {   
        this.roundNum  = 0;
        this.popUpText = ``;
        this.player = new DicePlayer(`player`);
        this.cpu    = new DicePlayer(`cpu`);
        this.roundId = document.getElementById(`roundDisplay`);
        this.rollId  = document.getElementById(`roll`);
        this.popUpId = document.getElementById(`gameOverPopUp`);
        this.playHandler  = this.play.bind(this);
        this.resetHandler = this.reset.bind(this);
    }

    init()
    {
        this.rollId.addEventListener(`click`, this.playHandler);
    }

    displayRound()
    {
        this.roundId.innerHTML = `Round: ` + (this.roundNum++);
        console.log(this.roundNum);
    }

    play()
    {
        this.displayRound();
        this.player.generatePackage();
        this.cpu.generatePackage();

        if (this.roundNum > 2)
        {
            this.gameOver();
        }
    }

    gameOver()
    {
        this.rollId.disabled = true;
        this.popUpText = this.player.makeGameOverText(this.cpu);
        this.popUpId.innerHTML = `<h2>${this.popUpText}</h2><h2>Final score: ${this.player.total} : ${this.cpu.total}</h2>`;
    }

    reset()
    {
        this.roundNum = 0;
        this.player.total = 0;
        this.cpu.total = 0;
    }
}

const game = new DiceGame();
game.init();

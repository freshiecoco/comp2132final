const game = new DiceGame(`player`, `cpu`, `roundDisplay`, `roll`, `gameOver`, `restart`);

function closeGameOverPopUp()
{
    game.gameOverPopUp.classList.add(`hidden`);
    game.gameOverMask.classList.add(`hidden`);
}

function closeRestartPopUp()
{
    game.restartPopUp.classList.add(`hidden`);
    game.restartMask.classList.add(`hidden`);
}

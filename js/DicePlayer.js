const d = [`dice1`, `dice2`, `dice3`, `dice4`, `dice5`, `dice6`];
const imgRoot = `../images/`;
const imgS = `diceImgS`;
const imgL = `diceImgL`;

class DicePlayer
{
    constructor(name)
    {
        this.dice1Id  = document.getElementById(name + `Dice1`);
        this.dice2Id  = document.getElementById(name + `Dice2`);
        this.scoreRId = document.getElementById(name + `ScoreRound`);
        this.scoreTId = document.getElementById(name + `ScoreTotal`);
        this.memoryId = document.getElementById(name + `Memory`);
        this.d1    = 0;
        this.d2    = 0;
        this.score = 0;
        this.total = 0;
    }

    roll()
    {
        this.d1 = Math.floor(Math.random() * 6);
        this.d2 = Math.floor(Math.random() * 6);

        if (this.d1 == 0 || this.d2 == 0)
        {
            this.score = 0;
        }
        else if (this.d1 == this.d2)
        {
            this.score = (this.d1 + 1) * 4;
        }
        else
        {
            this.score = this.d1 + this.d2 + 2;
        }

        this.total += this.score;
    }

    makeGameOverText(cpu) 
    {
        if (this.total > cpu.total)
        {
            return `Congratulations!<br>You are victorious!`;
        }
        else
        {
            return `You failed to<br>achieve victory!`;
        }
    }

    generatePackage(pronoun = `You`, determiner = `Your`)
    {
        this.roll();
        this.dice1Id.innerHTML  = img(d[this.d1], imgL);
        this.dice2Id.innerHTML  = img(d[this.d2], imgL);
        this.scoreRId.innerHTML = `<p>${pronoun} scored ${this.score}</p>`;
        this.scoreTId.innerHTML = `<p>${determiner} total score: ${this.total}`;
        this.memoryId.innerHTML += `<div>${img(d[this.d1])}${img(d[this.d2])}<div>`;
    }

    discardPackage()
    {
        this.dice1Id.innerHTML  = ``;
        this.dice2Id.innerHTML  = ``;
        this.scoreRId.innerHTML = ``;
        this.scoreTId.innerHTML = ``;
        this.memoryId.innerHTML = ``;
        this.total = 0;
    }

    static randomFace()
    {
        return d[Math.floor(Math.random() * 6)];
    }
}

function img(face, className = imgS)
{
    return `<img src="${imgRoot + face + `.png`}" alt="${face}" class="${className}">`;
}

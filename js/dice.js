const faces = [`dice1`, `dice2`, `dice3`, `dice4`, `dice5`, `dice6`];

class DicePlayer
{
    constructor(name)
    {
        this.dice1 = document.getElementById(name + `Dice1`);
        this.dice2 = document.getElementById(name + `Dice2`);
        this.scoreRound = document.getElementById(name + `ScoreRound`);
        this.scoreTotal = document.getElementById(name + `ScoreTotal`);
        this.rolls = [];
        this.scores = [];
    }

    get total()
    {
        let sum = 0;
        this.scores.forEach(x => {sum += x});
        return sum;
    }

    roll()
    {
        const first = Math.floor(Math.random() * 6);
        const second = Math.floor(Math.random() * 6);
        this.rolls.push([faces[first], faces[second]]);

        if (first == 0 || second == 0)
        {
            this.scores.push(0);
        }
        else if (first == second)
        {
            this.scores.push((first + 1) * 4);
        }
        else
        {
            this.scores.push(first + second + 2);
        }
    }

    static randomFace()
    {
        return faces[Math.floor(Math.random() * 6)];
    }
}

class DicePlayer
{
    constructor(id) 
    {
        this.scoreId = document.getElementById(id);
        this.rolls = [];
        this.score = [];
        this.scoreTotal = 0;
    }

    round()
    {
        const first = DicePlayer.roll();
        const second = DicePlayer.roll();
        const roundScore = DicePlayer.calculateScore(first, second)
        this.rolls.push(first);
        this.rolls.push(second);
        this.score.push(roundScore);
        this.scoreTotal += roundScore;
    }

    reset()
    {
        this.rolls = [];
        this.score = [];
        this.scoreTotal = 0;
    }

    static roll()
    {
        return Math.floor(Math.random() * 6) + 1;
    }

    static calculateScore(first, second)
    {
        if (first === 1 || second === 1)
        {
            return 0;
        }
        else if (first === second)
        {
            return first * 4;
        }
        else
        {
            return first + second;
        }
    }
}

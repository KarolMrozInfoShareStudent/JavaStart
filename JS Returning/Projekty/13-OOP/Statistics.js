class Statistics {
    constructor() {
        this.gameResults = [{ win: true, bid: 1 }, { win: false, bid: -1 }];
    }

    addGameToStatistics(win, bid) {
        let gameResults = {
            win: win,
            bid: bid
        }
        console.log(gameResults);
        this.gameResults.push(gameResults)
    }
    showGameStatistic() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(results => results.win).length;
        let losses = this.gameResults.filter(results => !results.win).length;
        console.log(games, wins, losses)
        return [games, wins, losses]
    }


}

const statistic = new Statistics()
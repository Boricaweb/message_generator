//This is the program create for someone who can't make a decision, what game they would like to play. Alright, enjoy your game!

//Function factory for random message
function iWillPlay(name, game) {
    return {
        _name: name, //Your name
        _game: game, //Your game
        get message() {
            //Game message method
            if (typeof this._name === 'string' && typeof this._game === 'string') {
                console.log(`${this._name} will play ${this._game}`);
            } else {
                console.log('Please input your name in string');
            }
        }
    }
}

//Random game name by API from the Random Words API website
//Use async and await for reduce the execute time
randomGame();

async function randomGame() {
    try {
        const response = await fetch("https://random-words-api.kushcreates.com/api?language=en&category=games&type=uppercase&words=100");
        if (!response.ok) {
            throw new Error('Could not fetch resource')
        }
        const data = await response.json();
        const game = data[Math.floor(Math.random()*data.length)].word;
        iWillPlay('Non', game).message;
    } catch (error) {
        /*catch the error which may come from website*/
        console.error(error);
        return null;
    }
}








//This is the program create for someone who can't make a decision, what game they would like to play. Alright, enjoy your game!

//Function factory for random message or any kind of output you prefer
function iWillPlay(name, game) {
    return {
        _name: name, /*Your name*/
        _game: game, /*Your name*/
        get message() {
            //Game message method
            console.log(`${this._name} will play ${this._game}`);
        }
    }
}

//Random game name by API from the Random Words API website
//Use async and await for reduce the execute time
randomGame();
//Run async function after factory function because async will always execute at the last function to prevent any bugs
async function randomGame() {
    try {
        const response = await fetch("https://random-words-api.kushcreates.com/api?language=en&category=games&type=uppercase&words=100");
        if (!response.ok) {
            throw new Error('Could not fetch resource')
        }
        const data = await response.json();
        const game = data[Math.floor(Math.random()*data.length)].word;
        //input your name on node.js like this -> $ node main.js your name
        const name = process.argv[2]; 
        if(typeof name === 'number' || typeof name === 'boolean') {
            console.log('Name should be a string');
            return null;
        } else {
            return iWillPlay(name, game).message;
        }
        
    } catch (error) {
        //catch the error which may come from website
        console.error(error);
        return null;
    }
}








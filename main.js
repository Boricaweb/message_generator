//This is the program create for someone who can't make a decision, what game they would like to play. Alright, enjoy your game!

//Random game name by API from the Random Words API website
//Use async and await for reduce the execute time


async function randomGame() {
    try {
        const response = await fetch("https://random-words-api.kushcreates.com/api?language=en&category=games&type=uppercase&words=100");
        const data = await response.json();
        const game = data[Math.floor(Math.random()*99)]["word"];
        return game;
    } catch (error) {
        /*catch the error which may come from website*/
        console.error('Error:', error);
        return null;
    }
}

//Put the function into variable
const yourGame = randomGame();

//Function factory for random message
function iWillPlay(name) {
    return {
        _name: name, //Your name
        get message() {
            //Game message method
            if (typeof this._name === 'string') {
                return this._name + ' will play ' + yourGame;
            } else {
                return 'Please input your name in string';
            }
        }
    }
}

const randomMessage = iWillPlay().message;

console.log(randomMessage);







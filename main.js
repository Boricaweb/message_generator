//This is the program create for someone who can't make a decision about what game they would like to play. Alright, enjoy your game!

//Function factory for random message or any kind of output you prefer
function iWillPlay(device, game) {
    return {
        _device: device, /*Your game device*/
        _game: game, /*Your name*/
        get message() {
            //Game message method
            return `Let play ${this._game} !!!`;                 
        }
    }
}

//Random game name by API from the Random Words API website
//Use async and await for reduce the execute time
randomGame();
//Run async function after factory function because async will always execute at the last function to prevent any bugs
async function randomGame() {
    try {
        //input your game device on node.js like this -> $ node main.js device(console, PC, mobile)
        const device = process.argv[2]; 
        if (device === undefined) {
            console.log('Please input your game device');
            return null;
        } else if (device.toLowerCase() !== 'console' && device.toLowerCase() !== 'pc' && device.toLowerCase() !== 'mobile') {
            throw new Error('the device should be console, mobile, or pc');
        }
        //fetch API
        const response = await fetch(`https://random-words-api.kushcreates.com/api?language=en&category=${device.toLowerCase()}_games&type=uppercase&words=100`);
        if (!response.ok) {
            throw new Error('Could not fetch resource');
        }
        const data = await response.json();
        const game = await data[Math.floor(Math.random()*data.length)].word;             
        console.log(iWillPlay(device, game).message);      
    } catch (error) {
        //catch the error which may come from website
        console.error(error);
        return null;
    }
}
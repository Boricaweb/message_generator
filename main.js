const randomGame = async () => {
    try {
        const response = await fetch("https://random-words-api.kushcreates.com/api?language=en&category=games&type=uppercase&words=1000");
        const data = await response.json();
        const game = data[Math.floor(Math.random()*999)]["word"];
        return game;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}







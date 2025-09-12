
# What game should I play?

This project is one of the challenge project of the Full-Stack Engineer (Javascript part) in www.codecademy.com. 
The topic is about writing the function in Javascript langauge to random the message about game name for any device to the user. 
Therefore, I use fetch API to retrieve the game name from external resource.


## Lessons Learned

**1. Javascript:** 
* Function factory
* Conditional statement
* Fetch API
* Async function with await
* Control Error
* Node process management


## Tech Stack

**Back-end:** Javascript (Node.js)


## Environment Variables

To run this project, you will need to install Node.js in your computer


## Function Explanation

* Functon factory iWillPlay():
  * To return random of the game name message to the async function randomGame by using method --> get message
    ```javascript
    get message() {
            //Game message method
            return `Let play ${this._game} !!!`;                 
        }
    ```
* Async function randomGame():
  * To implement the promise object of fetch API and log the result to console
  * Declare the variable name 'device' for recieve the value input by user from node.js    
    ```javascript
    const device = process.argv[2]; 
    ```

    * Input by user
    ```node
    $ node main.js your game device
    ```
    
  * Check the input value (must be console, mobile, or pc)
    ```javascript
    if (device === undefined) {
            console.log('Please input your game device');
            return null;
        } else if (device.toLowerCase() !== 'console' && device.toLowerCase() !== 'pc' && device.toLowerCase() !== 'mobile') {
            throw new Error('the device should be console, mobile, or pc');
        }
    ```

  * Catch the error
    ```javascript
    catch (error) {
      //catch the error which may come from website
      console.error(error);
      return null;
    }
    ```

  * Fetch the API data from https://random-words-api.kushcreates.com/#api-docs and screen the data type only in .json file
      ```javascript
      const response = await fetch(`https://random-words-api.kushcreates.com/api?language=en&category=${device.toLowerCase()}_games&type=uppercase&words=100`);
      const data = await response.json();
      ```

  * Adjust the data before call iWillPlay function
    ```javascript
    const game = await data[Math.floor(Math.random()*data.length)].word;             
    console.log(iWillPlay(device, game).message);
    ```

    
## Running Test

To test this project, clone main.js and run the following command on your terminal to see the result (your game device must be console, mobile, or pc in lowercase or uppercase is up to you).

* For instance
```bash
$ node main.js mobile
```
* result
```bash
$ Let play TEMPLE RUN !!!
```


## Acknowledgements

 - [Javascript Async function from Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)
 - [Javascript Promise object from W3schools](https://www.w3schools.com/js/js_promise.asp)
 - [API data resource](https://random-words-api.kushcreates.com/#api-docs)
 - [How to FETCH data from an API using JavaScript ↩️ by Bro Code channel](https://www.youtube.com/watch?v=37vxWr0WgQk)
 - [Learn Fetch API In 6 Minutes by Web Dev Simplified channel](https://www.youtube.com/watch?v=cuEtnrL9-H0)
 - [Javascript Promises vs Async Await EXPLAINED (in 5 minutes) by Roberts Dev Talk channel](https://www.youtube.com/watch?v=li7FzDHYZpc)


## 🚀 About Me
I'm studying and learning to be a full stack developer.

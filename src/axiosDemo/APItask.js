//fetch and display current weather
//from location of choice 

const axios = require("axios").default;

const url = "https://api.openweathermap.org/data/2.5/weather?lat=51.5&lon=2.9&appid=02da4af4779c088a9273415decf7703e";

const resultingPromise = axios.get(url);
resultingPromise.then(handleCompletedPromise);

function handleCompletedPromise(result) {
    console.log("Promise completed.  Result contains: ");
    console.log("The weather in Newport is: ");
    console.log(result.data);
    
}

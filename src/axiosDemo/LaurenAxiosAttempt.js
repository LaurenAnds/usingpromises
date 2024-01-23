const axios = require("axios").default;

const url = "https://api.tvmaze.com/shows/83/episodes";

const resultingPromise = axios.get(url);
resultingPromise.then(handleCompletedPromise);

function handleCompletedPromise(result) {
    console.log("Promise completed.  Result contains: ");
    console.log("Episode titles: ");
    for(let i = 0; i < result.data.length; i++){
        console.log(result.data[i].name);
    }
}

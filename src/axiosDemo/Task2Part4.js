//takes a search term from the user at the 
//command-line
//printing out episode titles which contain 
//the search term

const { prompt } = require("enquirer");
const axios = require("axios").default;
const url = "https://api.tvmaze.com/shows/83/episodes";

//enter search term
prompt({
    type: "input",
    message: "Please enter your search term.",
    name: "episodeSearch",
}).then(handleEpisodeInput);

function handleEpisodeInput(result) {
    console.log("you entered: ", result.episodeSearch);
    const resultingPromise = axios.get(url);
    resultingPromise.then(handleCompletedPromise);
}

//search for term

function handleCompletedPromise(result) {
    const episodeSearchTerm = result.episodeSearch;
    console.log("Promise completed.  Result contains: ");
    console.log("Episode titles containing ", result.episodeSearch);
    for(let i = 0; i < result.data.length; i++){
        if(result.data[i].name.includes(episodeSearchTerm)){
            console.log(result.data[i].name);
        }
    }
}
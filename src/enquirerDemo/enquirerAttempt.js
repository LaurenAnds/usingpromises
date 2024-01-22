const { prompt } = require("enquirer");

prompt({
    type: "input",
    message: "What is your favourite song?",
    name: "faveSong",
}).then(handleSongInput);

function handleSongInput(result) {
    console.log("you said your favourite song was: ", result.faveSong);
}

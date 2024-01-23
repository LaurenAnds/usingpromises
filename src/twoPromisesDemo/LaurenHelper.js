const { prompt } = require("enquirer");

//I've extracted these prompts into their own functions to reduce the amount of code in the demos.
//But it's not necessary to do so.
function promptCategory() {
    return prompt({
        type: "input",
        name: "faveMovieCategory",
        message: "What's your favourite category of movie?",
    });
}

function promptActor() {
    return prompt({
        type: "input",
        name: "faveActor",
        message: "Who is your favourite actor?",
    });
}

module.exports = { promptCategory, promptActor };

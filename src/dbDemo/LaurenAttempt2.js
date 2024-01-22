const { prompt } = require("enquirer");
const { makeDBConnectionPool } = require("./dbHelp");

const pool = makeDBConnectionPool("omdb");

const promiseOfInput = prompt({
    type: "autocomplete",
    name: "actor",
    message: "Select an actor",
    limit: 10,
    choices: ["Tom Cruise", "Brad Pitt", "Hugh Jackman"],
});
promiseOfInput.then(handleResult);

function handleResult(answer) {
    console.log("You picked: ", answer.actor);
    if(answer.actor === "Tom Cruise"){
        pool.query("select movie_name from casts_view where person_name = 'Tom Cruise'").then((results) => {
            displayMovies(results.rows);
        });
    } else if (answer.actor === "Brad Pitt"){
        pool.query("select movie_name from casts_view where person_name = 'Brad Pitt'").then((results) => {
            displayMovies(results.rows);
        });
    } else {
        pool.query("select movie_name from casts_view where person_name = 'Hugh Jackman'").then((results) => {
            displayMovies(results.rows);
        });
    }
        {

    }
        // promiseOfInput.then(handleResult);
}

function displayMovies(movieRows) {
    for (let row of movieRows) {
        console.log(row.movie_name);
        }
}
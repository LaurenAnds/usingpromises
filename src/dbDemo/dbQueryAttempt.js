const { makeDBConnectionPool } = require("./dbHelp");

const pool = makeDBConnectionPool("async-demo");

pool.query("select * from hiscores").then((results) => {
    displayScores(results.rows);
});

function displayScores(scoreRows) {
    for (let row of scoreRows) {
        console.log(row.id + " scored " + row.score);
    }
}

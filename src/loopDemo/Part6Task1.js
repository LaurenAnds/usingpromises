//This example is a little more elaborated:
// * we show how you might store the user progress in the DB
// * and the user is also given the choice to quit on each loop
const { Confirm, prompt } = require("enquirer");

async function mainLoop() {
    let wantToQuit = false;
    while (!wantToQuit) {
        const guessedCorrectly = await askOneQuestionAndGiveFeedback();
        await storeAttemptInDB(guessedCorrectly);
        wantToQuit = await offerQuitOption();
    }
}

async function askOneQuestionAndGiveFeedback() {
    const numToGuess = randomInt();

    const result = await prompt({
        type: "number",
        name: "guessedNumber",
        message: "Guess a number between 1 and 10",
    });
    const guess = parseInt(result.guessedNumber);
    const guessedCorrectly = numToGuess === guess;
    if (!guessedCorrectly && guess > numToGuess) {
        console.log("Incorrect.  Try again!");
        console.log("Lower!")
        // console.log("Incorrect.  I was thinking of " + numToGuess);
    } else if(!guessedCorrectly && guess < numToGuess){
        console.log("Incorrect.  Try again!");
        console.log("Higher!")
    } else {
        
        console.log("correct");
    }

    return guessedCorrectly;
}


async function storeAttemptInDB(attemptInfo) {
    //we would do db insert here
}

async function offerQuitOption() {
    const confirmPrompt = new Confirm({
        name: "wantToStop",
        message: "Would you like to quit?",
    });
    const result = await confirmPrompt.run();
    return result;
}

mainLoop();

/** Return a random integer between 1 and 3. */
function randomInt() {
    return Math.floor(1 + Math.random() * 10);
}

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
    let score = 0;

    let answerQuestion1 = await question1();
    
    
    if(answerQuestion1 && answerQuestion1.word === "Oui"){
        console.log("Correct!")
        score++;
        console.log("You scored: " + score);
    } else {
        console.log("Incorrect! You scored: " + score);
    }

    let answerQuestion2 = await question2();
  
    
    if(answerQuestion2 && answerQuestion2.word === "Non"){
        console.log("Correct!")
        score++;
        console.log("You scored: " + score);
    } else {
        console.log("Incorrect! You scored: " + score);
    }

    let answerQuestion3 = await question3();
  
    
    if(answerQuestion3 && answerQuestion3.word === "Bonjour"){
        console.log("Correct!")
        score++;
        console.log("You scored: " + score);
    } else {
        console.log("Incorrect! You scored: " + score);
    }

    console.log(answerQuestion1, answerQuestion2, answerQuestion3, score);
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

function question1(){
    return prompt({
        type: "autocomplete",
        name: "word",
        message: "What is yes in French? Pick the correct answer",
        choices: ["Si", "Oes", "Oui"],
        
})
}

function question2(){
    return prompt({
        type: "autocomplete",
        name: "word",
        message: "What is no in French? Pick the correct answer",
        choices: ["No", "Nac Oes", "Non"],
        
}) 
}

function question3(){
    return prompt({
        type: "autocomplete",
        name: "word",
        message: "What is hello in French? Pick the correct answer",
        choices: ["Hola", "Shwmae", "Bonjour"],
        
}) 
}

mainLoop();

/** Return a random integer between 1 and 3. */
function randomInt() {
    return Math.floor(1 + Math.random() * 10);
}


    // return prompt1.run();

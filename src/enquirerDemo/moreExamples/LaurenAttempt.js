const { prompt } = require("enquirer");

const promiseOfInput = prompt({
    type: "autocomplete",
    name: "word",
    message: "What is yes in French? Pick the correct answer",
    limit: 10,
    choices: ["Si", "Oes", "Oui"],
});
promiseOfInput.then(handleResult);

function handleResult(answer) {
    console.log("You said the correct answer is: ", answer.word);
    if(answer.word === "Oui"){
        console.log("You are correct!")
    } else if (answer.word === "Oes"){
        console.log("Not quite!");
        const promiseOfInput = prompt({
            type: "autocomplete",
            name: "word",
            message: "What is yes in French? Pick the correct answer",
            limit: 10,
            choices: ["Si", "Oui"],
        });
        promiseOfInput.then(handleResult);
    } else {
        console.log("Not quite!");
        const promiseOfInput = prompt({
            type: "autocomplete",
            name: "word",
            message: "What is yes in French? Pick the correct answer",
            limit: 10,
            choices: ["Oes", "Oui"],
        });
        promiseOfInput.then(handleResult);
    }
}


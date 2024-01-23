const { promptCategory, promptActor } = require("./LaurenHelper");

async function main() {
    const foodResult = await promptCategory();
    const drinkResult = await promptActor();
    console.log({ categoryResult, actorResult });
}

main();

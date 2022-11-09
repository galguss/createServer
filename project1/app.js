const util = require('util');
const fs = require('fs');

const file = util.promisify(fs.writeFile);

async function createJson(object, nameFile)
{
    const myJson = JSON.stringify(object).split("\n");
     await file(nameFile, myJson);
}

const myObject = {
    name: "gal",
    lastName: "guskovsky",
    age: 32
}

createJson(myObject, "users");

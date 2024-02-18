const bcrypt = require('bcrypt');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

function getPasswordForPostgres() {
    const password = '';
    let hashedPassword = '';
    hashedPassword = bcrypt.hash(password, 10);
    console.log(hashedPassword);
    return hashedPassword; 
}
async function main() {
    const returnvar = await getPasswordForPostgres();
    console.log(returnvar);
}

main();


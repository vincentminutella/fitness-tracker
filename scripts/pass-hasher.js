const bcrypt = require('bcrypt');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

function getPasswordForPostgres() {
    const password = '';
    let hashedPassword = '';
    hashedPassword = bcrypt.hash(password, 10);
    return hashedPassword; 
}
async function main() {
    const ret = await getPasswordForPostgres();
    console.log(ret);
    return ret;
}

main();


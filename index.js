const readlinesync = require('readline-sync')

// function startGame() {

// }

// const leaveGame = () => {

// }





const name = readlineSync.question('what is your name?\n')
console.log("hi " + name + " nice to meet you!")


const age = readlineSync.question('what is your age? \n')
if(age >= 18) {
    console.log("congrats! \n")
}
else {
    console.log("not yet! \n")
}


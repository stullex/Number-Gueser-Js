let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    return Math.floor(Math.random() * 9);
};  //Math.floor() The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
    //Math.random() returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1

function compareGuesses(human, computer, target) {
    const userDiff = getAbsoluteDistance(human, target);
    const compDiff = getAbsoluteDistance(computer, target);
    alertMessage(human)
    return userDiff <= compDiff;
    /*return user <= comp; returns a boolean value (true or false). If user is less or equal to comp the function will return true
    no if else statement needen because the input just need the boolean value*/
};

function updateScore(winner) {
    if ("human" === winner) {
        humanScore += 1;
    }
    else if ("computer" === winner) {
        computerScore += 1;
    }
    // x += adds 1 every time a winner has been declared to the score until the page refreshes
};

function advanceRound() {
    currentRoundNumber += 1;
};

function getAbsoluteDistance (x, y) {
   return (Math.abs(x, y));
}

function alertMessage (human){
    if (human > 9 || human < 0){
        return alert("wrong Input")
    }
}
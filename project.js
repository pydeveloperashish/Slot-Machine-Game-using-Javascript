// 1. Deposit some money.
// 2. Determine number of lines to bet on.
// 3. Collect a bet amount.
// 4. Spin the slot machine.
// 5. Check if user won.
// 6. Give the user their winnings.
// 7. Play Again



const prompt = require('prompt-sync')();

// old way to create a function
// function deposit() {
//     return 1
// }


// 1. Deposit some money.
// new way to create a function
const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositeAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositeAmount) || numberDepositeAmount <= 0){
        console.log("Invalid deposit amount, try again.");
        }
    else {
        return numberDepositeAmount;
        }
}
};

// 2. Determine number of lines to bet on.
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again.");
            }
        else {
            return numberOfLines;
            }
    }
};

// 3. Collect a bet amount.
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);
    
        if (isNaN(numberBet) || numberBet <= 0 || balance < numberBet * lines) {
            console.log("Invalid bet, try again.");
            }
        else {
            return numberBet;
            }
    }
};


let balance = deposit();
const numberOfLines = getNumberOfLines();
const numberBet = getBet(balance, numberOfLines);

console.log("Deposite amount: " + balance);
console.log("Number of lines: " + numberOfLines);
console.log("Bet: " + numberBet);





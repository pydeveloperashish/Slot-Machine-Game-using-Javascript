// 1. Deposit some money.
// 2. Determine number of lines to bet on.
// 3. Collect a bet amount.
// 4. Spin the slot machine.
// 5. Check if user won.
// 6. Give the user their winnings.
// 7. Play Again



const prompt = require('prompt-sync')();

const ROWS = 3;
const COLS =3;

const SYMBOLS_COUNT = {
    A : 2,
    B : 4,
    C : 6,
    D : 8
}

const SYMBOL_VALUES = {
    A : 5,
    B : 4,
    C : 3,
    D : 2
}



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


const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++) {
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.slice(randomIndex, 1);

        }
    }
    return  reels;
};

const reels = spin();
console.log(reels);


let balance = deposit();
const numberOfLines = getNumberOfLines();
const numberBet = getBet(balance, numberOfLines);

console.log("Deposite amount: " + balance);
console.log("Number of lines: " + numberOfLines);
console.log("Bet: " + numberBet);





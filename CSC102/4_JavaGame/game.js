playDiceGame();

    let Roll1 = getRandomNumber() * 6

    console.log("roll1=", roll1);

    let Roll2 = getRandomNumber();

    console.log("roll2 =" + roll2);

    let rollSum = roll1 + roll2;

    console.log("rollSum =" + rollSum)

if (roll1 == roll2 && roll1 % 2==0)
        document.getElementById("divMessage").textContent="you win";

    else if(rollSum == 7 || rollSum == 11)
        document.getElementById("divMessage").textContent = "Sorry, you lose"

    else 
        {documentgetElementById("divMessage").textContent = "You Tied"
    }

    document.getElementById("divRoll1").textContent = "Dice roll 1: " + roll1;
    document.getElementById("divRoll2").textContent = "Dice roll 1: " + roll2;
    document.getElementById("divSum").textContent = "Sum: " + rollSum;

function getRandomNumber(){
    let number = Math.random() * 6;
    number = Math.ciel(number);
    return number;
}
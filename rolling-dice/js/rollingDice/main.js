// Put your code here

const rollDice = () => {
firstRollNum = Math.ceil(Math.random() * 6)
secondRollNum = Math.ceil(Math.random() * 6)

if(firstRollNum == 1) {
    firstRoll = "One"
}
if(firstRollNum == 2) {
    firstRoll = "Two"
}
if(firstRollNum == 3) {
    firstRoll = "Three"
}
if(firstRollNum == 4) {
    firstRoll = "Four"
}
if(firstRollNum == 5) {
    firstRoll = "Five"
}
if
(secondRollNum == 1) {
    secondRoll = "One"
}
if(secondRollNum == 2) {
    secondRoll = "Two"
}
if(secondRollNum == 3) {
    secondRoll = "Three"
}
if(secondRollNum == 4) {
    secondRoll = "Four"
}
if(secondRollNum == 5) {
    secondRoll = "Five"
}
if(secondRollNum == 6) {
    secondRoll = "Six"
}



if (firstRoll == secondRoll) {
     console.log(`${firstRoll} + ${secondRoll} == ${firstRollNum + secondRollNum} DOUBLES!`)
}
else console.log(`${firstRoll} + ${secondRoll} == ${firstRollNum + secondRollNum}`)

return 
}

const game = () => {
    console.log("Let's roll some dice, baby!")
    console.log("---------------------------")
    for(let i=1; i<=10; i+= 1){
        rollDice()
    }

}

game()
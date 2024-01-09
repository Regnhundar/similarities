//Fråga användaren efter två ord, och kontrollera därefter hur många bokstäver som förekommer på samma plats i båda orden.

let wordOne = 0;
let wordTwo = 0;
let similarities = 0;
let checkComplete = false;
let isInputOneApproved = false;
let isInputTwoApproved = false;

while (!checkComplete) {
    while (!isInputOneApproved) {
        wordOne = window.prompt(`Ange första ordet:`)
        if (!isNaN(wordOne)) {
            window.alert(`Du kan enbart använda dig av bokstäver.`)
        }
        else {
            isInputOneApproved = true;
        }
    }
    while (!isInputTwoApproved) {
        wordTwo = window.prompt(`Ange andra ordet:`)
        if (!isNaN(wordTwo)) {
            window.alert(`Du kan enbart använda dig av bokstäver.`)
        }
        else {
            isInputTwoApproved = true;
        }
    }
    if (wordOne.length >= wordTwo.length) {  // Vi måste göra loopen lika lång som det kortaste ordet. Därav den här lösningen.
        for (let i = 0; i < wordTwo.length; i++) {
            if (wordTwo[i] === wordOne[i]) {
                similarities++
            }
        }
    }
    else {
        for (let i = 0; i < wordOne.length; i++) {
            if (wordOne[i] === wordTwo[i]) {
                similarities++
            }
        }
    }
    checkComplete = true;
}

window.alert(`${wordOne} och ${wordTwo} har likadana bokstäver på ${similarities} platser.`)

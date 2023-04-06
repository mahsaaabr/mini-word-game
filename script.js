const wordText = document.querySelector(".word");
const timeText = document.querySelector(".time");
const inputField = document.querySelector(".input-text");
const refreshBtn = document.querySelector(".refresh-btn");
const checkBtn = document.querySelector(".submit-btn");
let correctWord, timer;


let words = [
        'STICKS',
        ' STUMPS',
        ' WEIRDS',
        'FAZES',
        'FLUSTERS',
        'MORTIFIES',
        'RATTLES',
        'BOTHERS',
        'CHAGRINS',
        'DISMAYS',
        'DISQUIETS',
        'DISTURBS',
        'PERTURBS',
        ' STUNS',
        'UNHINGES',
        'UNSETTLES',
        'UPSETS',
    ]

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText ="Time Left: "+ maxTime+"s";
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
}
const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.split("");
    inputField.value="";
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    correctWord = randomObj.toLowerCase();
    console.log(correctWord)
}
initGame();
const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Please enter the word to check!");
    if(userWord !== correctWord) {
         alert(`Oops! ${userWord} is not a correct word`);
         inputField.value="";
    }else{
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    initGame();
    }
}
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

    


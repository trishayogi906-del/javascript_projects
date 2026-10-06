let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById('subt')
const userInput = document.getElementById('guessfield')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastresult')
const loworhi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultparas')
const p = document.createElement('p')
let prevguess = []
let numguess = 1
let playgame = true

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess);

        vaildateguess(guess);
    })
}
function vaildateguess(guess) {
    if (isNaN(guess)) {
        alert('please enter a vaild number !')
    } else if (guess < 1) {
        alert('please enter a vaild number !')
    }
    else if (guess > 100) {
        alert('please enter a vaild number !')
    }
    else {
        prevguess.push(guess);

        if (numguess === 11) {
            displayguess(guess);
            displaymessage(`Game over. Random number was ${randomNumber}`);
            endgame();
        }
        else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}
function checkguess(guess) {
    if (guess === randomNumber) {
        displaymessage(`you guessted it right`);
        endgame();
    }
    else if (guess < randomNumber) {
        displaymessage(`Number is TOOO low`);
    }
    else if (guess > randomNumber) {
        displaymessage(`Number is TOOO High`);
    }
}
function displayguess(guess) {
    userInput.value = ' '
    guessslot.innerHTML += `${guess}  `
    numguess++;
    remaining.innerHTML = `${11 - numguess}`
}
function displaymessage(message) {
    loworhi.innerHTML = `<h2>${message}</h2>`
}
function endgame() {
    userInput.value = ' '
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame">start new Game</h2>`
    p.style.fontSize = '24px';
    p.style.fontFamily = "bold"
    p.style.backgroundColor = "gray"
    p.style.border = "2px solid black"
    // p.style.padding = "4px"
    p.style.width = "160px"
    startover.appendChild(p)
    playgame = false
    startnew();
}
function startnew() {
    const newgamebutton = document.querySelector('#newgame')
    newgamebutton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevguess = []
        numguess = 1
        guessslot.innerHTML = ''
        remaining.innerHTML = `${11 - numguess}`
        userInput.removeAttribute('disabled')
        startover.removeAttribute(p)
        playgame = true
    })
}
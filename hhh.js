let number= parseInt(Math.random()*100+1);
// console.log(number);
const uinput= document.querySelector('#guessField');
const submit=document.querySelector('#subt');
const prevGuesses= document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');
const compare= document.querySelector('.lowOrHi');
const p=document.createElement('p');
const start= document.querySelector('.resultParas');
let play=true;
let numguess=10;
let lastguess=[];

if(play){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess= parseInt(uinput.value)
        // console.log(guess);
        Validate(guess)
    });
}

function Validate(guess){
    if(isNaN(guess))    alert('enter a valid number');
    else if(guess<1)    alert('enter a number more than 1');
    else if(guess>100)  alert('enter a number less than 100');
    else{
        lastguess.push(guess);
        if(numguess===0){    
            displayguess(guess);
            displaymsg(`game over, the number was ${number}`);
            endgame();
        }
        else{
            checkguess(guess);
            displayguess(guess);
        }
    }
}

function checkguess(guess){
    if(guess===number){
        displaymsg(`you guessed the right number`);
        endgame();
    }
    else if(guess<number){
        displaymsg('your guess is too low');
    }
    else if(guess>number){
        displaymsg('your guess is too high');
    }
}

function displayguess(guess){
    uinput.value='';
    prevGuesses.innerHTML+=`${guess   }  `
    numguess--;
    remaining.innerHTML= numguess;
}

function displaymsg(msg){
    compare.innerHTML= `<h2>${msg}</h2>`;

}

function endgame(){
    uinput.value='';
    uinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newgame"> startOver</h2>`;
    start.appendChild(p);
    play=false;
    newgame();
}

function newgame(){
    const newg= document.querySelector('#newgame');
    newg.addEventListener('click', function(e){
        number= parseInt(Math.random()*100+1);
        lastguess=[];
        numguess=10;
        prevGuesses.innerHTML='';
        remaining.innerHTML= numguess;
        uinput.removeAttribute('disabled');
        start.removeChild(p);
        play=true;
    });
}




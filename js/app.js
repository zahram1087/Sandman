'use strict';

// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
// ];
var scoreArray = [];
var wordGuessArray = [];
var countTries = 0;
var maxTries = 5;
//eslint-disable-next-line
var vocabulary = results[generateRandom()].word.toUpperCase().split('');

console.log(vocabulary);

function generateRandom() {
  var randomGenerator = Math.floor(Math.random() * 999);
  return randomGenerator;
}

document.addEventListener('keypress', function() {
  var playGame = 0;
  if (playGame === 0) {
    playGame = compareGuess(event);
  }
});

function compareGuess(event) {
  var loseTurn = 0;
  var wordGuess = String.fromCharCode(event.keyCode).toUpperCase();
  console.log(wordGuess);

  if (wordGuessArray.indexOf(wordGuess) === -1) {
    wordGuessArray.push(wordGuess);
    for (var i = 0; i < vocabulary.length; i++) {
      if (wordGuess === vocabulary[i]) {
        countTries++;
        loseTurn++;
        console.log(countTries);
        revealLetter(i);
        scoreTally(wordGuess);
      }
    }
  } else if (wordGuessArray.indexOf(wordGuess) > -1) {
    loseTurn++;
    alert('Come On, you already guessed this word.');
  }

  if (loseTurn === 0) {
    maxTries--;
    console.log(`Turns Left: ${maxTries}`);
  }

  if (countTries === vocabulary.length) {
    alert('You Win!');
    return (1);
  } else if (maxTries <= 0) {
    alert('You Lose!');
    for (var j = 0; j < vocabulary.length; j++) {
      revealLetter(j);
    }
    return (1);
  }
  return (0);
}

function initializeWords() {
  var wordLine = document.getElementById('blank-words');
  for (var i = 0; i < vocabulary.length; i++) {
    var blurLines = document.createElement('P');
    blurLines.textContent = '_';
    wordLine.appendChild(blurLines);
  }
}
initializeWords();

function revealLetter(i) {
  var letterLine = document.getElementById('blank-words');
  var letterSpot = letterLine.getElementsByTagName('P').item(i);
  letterSpot.textContent = vocabulary[i];
}

function scoreTally(wordGuess) {
  for (var i = 0; i < score.length; i++) {
    if (score[i].letters.indexOf(wordGuess) > -1) {
      scoreArray.push(score[i].points * (1 + (maxTries / 10))); //scoring formula
    }
  }
    console.log(scoreArray);
}

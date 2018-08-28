'use strict';

var alphabet = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D',
  'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'
];

var scoreArray = [];
var wordGuessArray = [];
var countTries = 0;
var maxTries = 5;
var playOrNot = true;
//eslint-disable-next-line
var vocabulary = results[generateRandom()].word.toUpperCase().split('');

console.log(vocabulary);

function generateRandom() {
  var randomGenerator = Math.floor(Math.random() * 999);
  return randomGenerator;
}

document.addEventListener('keypress', function(event) {
  if (playOrNot === true) {
    var wordGuess = String.fromCharCode(event.keyCode).toUpperCase();
    playOrNot = compareGuess(event, wordGuess);
  }
});

document.addEventListener('click', function(event) {
  if (alphabet.indexOf(event.target.textContent) > -1) {
    var wordGuess = event.target.textContent;
    if (playOrNot === true) {
      playOrNot = compareGuess(event, wordGuess);
    }
  }
});

function compareGuess(event, wordGuess) {
  var loseTurn = 0;
  console.log(wordGuess);
  changeKeyColor(wordGuess);
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
    return (false);
  } else if (maxTries <= 0) {
    alert('You Lose!');
    for (var j = 0; j < vocabulary.length; j++) {
      revealLetter(j);
    }
    return (false);
  }
  return (true);
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

renderKeyBoard();

function renderKeyBoard() {
  var keyboardRows = document.getElementById('keyboard');
  for (var i = 0; i < 3; i++) {
    var makeRow = document.createElement('UL');
    for (var j = 0; j < 10; j++) {
      if (i === 0) {
        var makeListItem = document.createElement('LI');
        makeListItem.textContent = alphabet[j];
        makeRow.appendChild(makeListItem);
        keyboardRows.appendChild(makeRow);
      } else if (i === 1 && j > 0) {
        makeListItem = document.createElement('LI');
        makeListItem.textContent = alphabet[j + 9];
        makeRow.appendChild(makeListItem);
        keyboardRows.appendChild(makeRow);
      } else if (i === 2 && j > 2) {
        makeListItem = document.createElement('LI');
        makeListItem.textContent = alphabet[j + 16];
        makeRow.appendChild(makeListItem);
        keyboardRows.appendChild(makeRow);
      }
    }
  }

}

function changeKeyColor(wordGuess) {
  var keyBlocks = document.getElementById('keyboard');
  var selectKeys = keyBlocks.getElementsByTagName('UL');
  for (var i = 0; i < selectKeys.length; i++) {
    var listKeys = selectKeys[i].getElementsByTagName('LI');
    for (var j = 0; j < listKeys.length; j++) {
      if (listKeys[j].textContent === wordGuess && vocabulary.indexOf(wordGuess) === -1) {
        listKeys[j].style.backgroundColor = 'red';
      } else if (listKeys[j].textContent === wordGuess && vocabulary.indexOf(wordGuess) > -1) {
        listKeys[j].style.backgroundColor = 'green';
      }
    }
  }
}

'use strict';

var userHighScore = [];
var personalScore = 0;

var Score = function(name, points) {
  this.name = name;
  this.points = points;
};

function addScore(name, points) {
  if (JSON.parse(localStorage.getItem('keepScore')) !== null) {
    userHighScore = JSON.parse(localStorage.getItem('keepScore'));
    userHighScore.push(new Score(name, points));
  } else if (JSON.parse(localStorage.getItem('keepScore')) === null) {
    userHighScore.push(new Score(name, points));
  }
}

function arrangeScore(name, points) {
  addScore(name, points);
  if (userHighScore.length > 1) {
    userHighScore.sort(objectsCompare);
    userHighScore.splice(5, 1);
  }
  localStorage.setItem('keepScore', JSON.stringify(userHighScore));
  localStorage.removeItem('userScore');
}

function scoreTally(wordGuess) {
  for (var i = 0; i < score.length; i++) {
    if (score[i].letters.indexOf(wordGuess) > -1) {
      scoreArray.push(score[i].points * (1 + (maxTries / 10))); //scoring formula
    }
  }
  console.log(scoreArray);
}

function computeScore() {
  var sumScore = 0
  for (var i = 0; i < scoreArray.length; i++) {
    sumScore = sumScore + scoreArray[i];
  }
  console.log(sumScore);
  return (sumScore);
}

function objectsCompare(a, b) {
  if (a.points < b.points)
    return 1;
  if (a.points > b.points)
    return -1;
  return 0;
}

function storePersonalScore(tallyValue) {
  if (JSON.parse(localStorage.getItem('userScore')) !== null) {
    personalScore = JSON.parse(localStorage.getItem('userScore')) + tallyValue;
    localStorage.setItem('userScore', JSON.stringify(personalScore));
  } else if (JSON.parse(localStorage.getItem('userScore')) === null) {
    personalScore = tallyValue;
    localStorage.setItem('userScore', JSON.stringify(personalScore));
  }
  return personalScore;
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

// Массив случайных слов
let words = [
  'программа',
  'макака',
  'прекрасный',
  'оладушек'
];

// Function //
// Возвращает случайно выбранное слово
function pickWord () {
  return words[Math.floor(Math.random() * words.length)];
}
// Возвращает итоговый массив для заданного слова word
function setupAnswerArray (word) {
  let answerArray = []; //Пустой массив для угадывания

  for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
  }
  return answerArray;
}
// С помощь alert отображает текущее состояние игры
function showPlayersProgress (answerArray) {
  return alert('Ваш результат ' + answerArray.join(' '));
}
// Запрашивает ответ игрока с помощью prompt
function getGuess () {
  let guess = prompt('Угадайте букву, или нажмите Отмена для выхода из игры.')
  return guess;
}
// Обновляет answerArray согласно ответу игрока (guess)
// Возвращает число, обозначающее, сколько раз буква guess
// встречается в слове, чтобы можно было обновить значение
// remainingLetters
function updateGameState (guess, word, answerArray) {
  var appearances = 0;
  guess = guess.toLowerCase();
    // Обновляем состояние игры
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess && answerArray[j] === '_') {
      answerArray[j] = guess;
      appearances++;
    }
  }
  console.log(`letter ${remainingLetters}`)
  return appearances;
}
// С помощью alert показывает игроку отгаданное слово
// и поздравляет его с победой
function showAnswerAndCongratulatePlayer (answerArray) {
  alert(answerArray.join(' '));
  alert(`Отлично! Было загадано слово ${word}`);
}
// Загаданное слово
let word = pickWord();
// answerArray: итоговый массив
let answerArray = setupAnswerArray(word);
// remainingLetters: Сколько букв осталось угадать
let remainingLetters = word.length;
// Количество ошибок
let incorrectGuesses = 0;

while (remainingLetters > 0) {
  showPlayersProgress(answerArray);
  //guess: ответ игрока
  let guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Пожалуйста, введите одиночную букву.');
  } else {
    // correctGuesses: количество открытых букв
    let correctGuesses = updateGameState(guess, word, answerArray);
    
    remainingLetters -= correctGuesses;

    if (correctGuesses === 0) {
      drawSegment(incorrectGuesses, word);
      incorrectGuesses++;
    }
  }
}
showAnswerAndCongratulatePlayer(answerArray);
function drawSegment (incorrectGuesses, word) {
  for (let i = 0; i < word.length; i++) {
    ctx.beginPath();
    ctx.moveTo(i * 10, height - 30);
    ctx.lineTo(i * 30, height - 30);
    ctx.stroke();
  }

  ctx.Stokestyle = 'Turquise';
  ctx.lineWidth = 4;

  if (incorrectGuesses === 0) {
    ctx.strokeRect(20, 20, 20, 20);
  } else if (incorrectGuesses === 1) {
    ctx.beginPath();
    ctx.moveTo(30, 40);
    ctx.lineTo(30, 100);
    ctx.stroke();
  } else if (incorrectGuesses === 2) {
    ctx.beginPath();
    ctx.moveTo(30, 60);
    ctx.lineTo(10, 55);
    ctx.stroke();
  } else if (incorrectGuesses === 3) {
    ctx.beginPath();
    ctx.moveTo(30, 60);
    ctx.lineTo(50, 55);
    ctx.stroke();
  } else if (incorrectGuesses === 4) {
    ctx.beginPath();
    ctx.moveTo(30, 90);
    ctx.lineTo(10, 130)
    ctx.stroke();
  } else if (incorrectGuesses === 5) {
    ctx.beginPath();
    ctx.moveTo(30, 90);
    ctx.lineTo(10, 130)
    ctx.stroke();
  } else if (incorrectGuesses === 6) {
    ctx.beginPath();
    ctx.moveTo(30, 90);
    ctx.lineTo(50, 130)
    ctx.stroke();
  }
}
  
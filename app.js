/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which planet is bigger?',
      answers: [
        'Earth',
        'Uranus',
        'Io',
        'Saturn',
        'Venus'
      ],
      correctAnswer: 'Saturn'
    },
    {
      question: 'Which of these planets have no moons?',
      answers: [
        'Uranus',
        'Mercury',
        'Earth',
        'Sun',
        'Pluto'
      ],
      correctAnswer: 'Mercury'
    },
    {
      question: 'Which of these is the largest object in the asteroid belt?',
      answers: [
        'Makemake',
        'Ceres',
        '4 Vesta',
        '3 Juno',
        'Pallas'
      ],
      correctAnswer: 'Ceres'
    },
    {
      question: 'Which galaxy is further away from Earth?',
      answers: [
        'Andromeda',
        'Large Magellanic Cloud',
        'MACS0647-JD',
        'Milky Way',
        'Leo Stellar Dust'
      ],
      correctAnswer: 'MACS0647-JD'
    },
    {
      question: 'Which planet has the most volcanoes?',
      answers: [
        'Earth',
        'Jupiter',
        'Neptune',
        'Venus',
        'Mercury'
      ],
      correctAnswer: 'Venus'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

// render elements for the start page
function startScreen() {
  return `
  <header>
    <h1>The Hardest Space Quiz You'll Take Today 🌑</h1>
    <p>Think you know space? Let's go.</p>
    <button type="button" class="start-quiz">Start Quiz</button>
  </header>`;
}

// renders start page elements and start button event function
function startPage() {
  $('main').html(startScreen());
  startQuizButton();
}

// button event to render first quiz question
function startQuizButton() {
  $('.start-quiz').on('click', function (event) {
    event.preventDefault();
    store.quizStarted = true;
    store.score = 0;
    store.questionNumber = 0;
    $('main').html(generateQuestion());
    showQuestion();
  });
}

// render first question to page
function showQuestion() {
  $('main').html(generateQuestion());
}

// render elements for the questions page
function generateQuestion() {
  return `
    <header>
      <h1>The Hardest Space Quiz You'll Take Today 🌑</h1>
      <h2>Question ${store.questionNumber + 1} out of 5</h2>
      <h2>Score: ${store.score} out of 5</h2>
    </header>

    <div>
      <form id="quiz-form"> 
        
        <h3 class="form-question">${store.questions[store.questionNumber].question}</h3>

        <label class="container" for="option-one"><input type="radio" id="option-one" name="options" value=${store.questions[store.questionNumber].answers[0]} required>${store.questions[store.questionNumber].answers[0]}<span class="checkmark"></span></label>

        <label class="container" for="option-two"><input type="radio" id="option-two" name="options" value=${store.questions[store.questionNumber].answers[1]} required>${store.questions[store.questionNumber].answers[1]}<span class="checkmark"></span></label>

        <label class="container" for="option-three"><input type="radio" id="option-three" name="options" value=${store.questions[store.questionNumber].answers[2]} required>${store.questions[store.questionNumber].answers[2]}<span class="checkmark"></span></label>

        <label class="container" for="option-four"><input type="radio" id="option-four" name="options" value=${store.questions[store.questionNumber].answers[3]} required>${store.questions[store.questionNumber].answers[3]}<span class="checkmark"></span></label>

        <label class="container" for="option-five"><input type="radio" id="option-five" name="options" value=${store.questions[store.questionNumber].answers[4]} required>${store.questions[store.questionNumber].answers[4]}<span class="checkmark"></span></label>

        <button type="submit" class="submit-button">Submit Answer</button>
         
      </form>
    </div>`;
}

// handle submit answer choice button
function handleAnswerSubmitButton() {
  $('main').submit('.submit-button', function (event) {
    event.preventDefault();
    checkAnswerChoice();
  });
}

// handle answer choice submission
function checkAnswerChoice() {
  let answerChoice = $('input[name="options"]:checked').val();
  if (answerChoice === store.questions[store.questionNumber].correctAnswer) {
    updateScore();
    $('main').html(correctAnswer());
  } else {
    $('main').html(wrongAnswer());
  }
}

// renders page for correct answer option
function correctAnswer() {
  return `
  <h1 class="answer-header">CORRECT! 🎉</h1>
  <h2 class="answer-header">Great job! The correct answer is <span class="correct-answer">${store.questions[store.questionNumber].correctAnswer}</span>.</h2>
  <h3 class="score">Score: ${store.score}/5</h3>
  <button type="button" class="next-question-button">Next Question</button>`;
}

// renders page for wrong answer option
function wrongAnswer() {
  return `
  <h1 class="answer-header">WRONG 😢</h1>
  <h2 class="answer-header">Bummer! The right answer is <span class="wrong-answer">${store.questions[store.questionNumber].correctAnswer}</span>.</h2>
  <h3 class="score">Score: ${store.score}/5</h3>
  <button type="button" class="next-question-button">Next Question</button>`;
}

// increase question number by 1
function updateQuestionNum() {
  store.questionNumber++;
}

// increase score by 1 if correct choice
function updateScore() {
  store.score++;
}

// handles next question
function nextQuestion() {
  if (store.questionNumber < 4) {
    updateQuestionNum();
    $('main').html(generateQuestion());
  } else {
    showResult();
  }
}

// handle next question button click event
function handleNextQuestionButton() {
  $('main').on('click', '.next-question-button', nextQuestion);
}

// shows the result page template
function showResult() {
  $('main').html(resultTemplate());
}

// renders elements for the result page
function resultTemplate() {
  return `
  <h1 class="answer-header">End of Quiz! 🌑</h1>
  <h2 class="answer-header">Your Score: ${store.score}/5!</h3>
  <button type="button" class="play-again">Play Again</button>`;
}

// handles restart quiz button event
function restartQuiz() {
  $('main').on('click', '.play-again', function (event) {
    event.preventDefault();
    store.quizStarted = false;
    startPage();
  });
}

// handles functions to start the quiz
function renderQuiz() {
  startPage();
  handleAnswerSubmitButton();
  handleNextQuestionButton();
  restartQuiz();
}

$(renderQuiz());
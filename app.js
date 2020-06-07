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
      correctAnswer: 'Saturn',
      answerFact: 'The largest planet in our solar system by far is Jupiter and Saturn the second largest.'
    },
    {
      question: 'Which of these planets has no moons?',
      answers: [
        'Uranus',
        'Mercury',
        'Earth',
        'Sun',
        'Pluto'
      ],
      correctAnswer: 'Mercury',
      answerFact: 'Venus and Mercury are the only two planets that don\'t have a single natural moon orbiting them.'
    },
    {
      question: 'Which of these is the largest object in the asteroid belt?',
      answers: [
        'Makemake',
        'Ceres',
        'Vesta',
        'Hygiea',
        'Pallas'
      ],
      correctAnswer: 'Ceres',
      answerFact: 'Dwarf planet Ceres is the largest object in the asteroid belt between Mars and Jupiter.'
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
      correctAnswer: 'MACS0647-JD',
      answerFact: 'MACS0647-JD is the farthest known galaxy from the Earth. It is 13.3 billion light-years away, the farthest galaxy yet known.'
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
      correctAnswer: 'Venus',
      answerFact: 'Venus has more volcanoes than any other planet in the solar system. Io, one of Jupiter\'s moons, is the most volcanically active.'
    },
    {
      question: 'What type of galaxy is the most common in the universe?',
      answers: [
        'Spiral',
        'Barred spiral',
        'Elliptical',
        'Irregular',
        'Regular'
      ],
      correctAnswer: 'Elliptical',
      answerFact: 'Galaxies are categorized as elliptical, spiral, or irregular. There are at least two trillion galaxies in the universe.'
    },
    {
      question: 'How many black holes are there in the Milky Way?',
      answers: [
        '0',
        '1',
        '1,000',
        '1,000,000',
        '10,000,000'
      ],
      correctAnswer: '10,000,000',
      answerFact: '😮 Judging from the number of stars large enough to produce black holes, scientists estimate that there are as many as ten million to a billion black holes in the Milky Way alone. Most of these are invisible to us, and only about a dozen have been identified.'
    },
    {
      question: 'What percent of the universe is dark matter?',
      answers: [
        '27%',
        '2%',
        '68%',
        '5%',
        '80%'
      ],
      correctAnswer: '27%',
      answerFact: 'The rest of the universe is around 68% dark energy, and less than 5% of the universe is made up of what we would consider “normal” matter.'
    },
    {
      question: 'Which is the largest moon in the solar system?',
      answers: [
        'Enceladus',
        'Europa',
        'Mimas',
        'Titan',
        'Ganymede'
      ],
      correctAnswer: 'Ganymede',
      answerFact: 'Ganymede, a moon of Jupiter, is the largest and most massive of the Solar System\'s moons. It is the ninth largest object in the Solar System and the largest without a substantial atmosphere.'
    },
    {
      question: 'Which planet takes almost 30 Earth years to orbit the sun?',
      answers: [
        'Saturn',
        'Neptune',
        'Uranus',
        'Neptune',
        'Pluto'
      ],
      correctAnswer: 'Saturn',
      answerFact: 'Much like its fellow gas giant Jupiter, Saturn takes it time completing a single orbit of the Sun, but rotates on its axis very rapidly. All told, a year on the planet lasts the equivalent of 10,759 Earth days (or about 29+ years).'
    }
    // {
    //   question: 'What is the coldest place in the universe?',
    //   answers: [
    //     'Deep Space',
    //     'The Boomerang Nebula',
    //     'The Dark Side of the Moon',
    //     'Pluto',
    //     'A Black Hole'
    //   ],
    //   correctAnswer: 'The Boomerang Nebula',
    //   answerFact: 'The Boomerang Nebula is a protoplanetary nebula located 5,000 light-years away from Earth. It\'s temperature is one degree Kelvin which is -458 degrees Fahrenheit or -272.15 degrees Celsius.'
    // },
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
      <h2>Question ${store.questionNumber + 1} out of 10</h2>
      <h2>Score: ${store.score} out of 10</h2>
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
  let answerChoice = $('input[type=radio][name=options]:checked').val();
  console.log(answerChoice);
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
  <div>
    <h1 class="answer-header">CORRECT! 🎉</h1>
    <h2>Great job! The correct answer is <span class="correct-answer">${store.questions[store.questionNumber].correctAnswer}</span>.</h2>
    <h3 class="score">Score: ${store.score}/10</h3>
    <p>${store.questions[store.questionNumber].answerFact}</p>
    <button type="button" class="next-question-button">Next Question</button>
  </div>`;
}

// renders page for wrong answer option
function wrongAnswer() {
  return `
  <div>
    <h1 class="answer-header">WRONG 😢</h1>
    <h2>Bummer! The right answer is <span class="wrong-answer">${store.questions[store.questionNumber].correctAnswer}</span>.</h2>
    <h3 class="score">Score: ${store.score}/10</h3>
    <p>${store.questions[store.questionNumber].answerFact}</p>
    <button type="button" class="next-question-button">Next Question</button>
  </div>`;
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
  if (store.questionNumber < 9) {
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
  let quizResultFeedback = '';
  if (store.score >= 7) {
    quizResultFeedback = 'Impressive! You know space!';
  } else if (store.score < 7 && store.score > 3) {
    quizResultFeedback = 'You did ok.';
  } else {
    quizResultFeedback = 'Uh... well, you tried.';
  }


  return `
  <div>
    <h1 class="answer-header">End of Quiz! 🌑</h1>
    <h2 class="answer-header">Your Score: ${store.score}/10!</h3>
    <p>${quizResultFeedback}</p>
    <button type="button" class="play-again">Play Again</button>
  </div>`;
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
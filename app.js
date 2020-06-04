/* eslint-disable no-unreachable */
/* eslint-disable strict */

/* ux requirements

*/
/**
 * Example store structure
 */

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which planet is bigger?',
      answers: [
        'Earth',
        'Mars',
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
        'large magellanic cloud',
        'MACS0647-JD',
        'Milky Way',
        'Leo I'
      ],
      correctAnswer: 'MACS0647-JD'
    },
    {
      question: 'Which of these can be formed in a supernova?',
      answers: [
        'white dwarf',
        'neutron star',
        'a galaxy',
        'alien life',
        'dark matter'
      ],
      correctAnswer: 'neutron star'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

// creates elements for the start page
function startScreen() {
  return `
  <header>
    <h1>The Hardest Space Quiz You'll Take Today</h1>
    <p>Think you know space? Let's go.</p>
    <button type="button" class="start-quiz">Start Quiz</button>
  </header>`;
}

// create elements for the questions page
function generateQuestion() {
  return `<form role="form"> 
        <fieldset>
        <legend>${store.questions[0].question}</legend>

        <input type="radio" id="option-one" name="choice" value="0" required> 
        <label for="option-one">${store.questions[0].answers[0]}</label> 

        <input type="radio" id="option-two" name="choice" value="1" required> 
        <label for="option-two">${store.questions[0].answers[1]}</label>

        <input type="radio" id="option-three" name="choice" value="2" required> 
        <label for="option-three">${store.questions[0].answers[2]}</label>

        <input type="radio" id="option-four" name="choice" value="3" required> 
        <label for="option-four">${store.questions[0].answers[3]}</label>

        <input type="radio" id="option-five" name="choice" value="4" required> 
        <label for="option-five">${store.questions[0].answers[4]}</label>

        <button type="submit">Submit Answer</button>
      </fieldset> 
      </form>`;
}


function render() {
  let html = '';
  if (store.quizStarted === false) {
    $('main'.html(startScreen());
  }
  else if ( )
}


function startQuiz() {
  $('.start-quiz').on('click', function (event) {
    store.quizStarted = true;
    $('main').html(generateQuestion());
  });
}
console.log(startQuiz());

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
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


//renata's crazy stuff

// let questionCounter = 0; //tracks question number
//     let selections = []; //array containing user choices
//     let quiz = $('#quiz'); //quiz div object

//     // display initial question
//     nextDisplay();

//     // click handler for the 'next' button
//     $('#next').on('click', function(e) {}

//     // click handler for the 'prev' button
//     $('#prev').on('click', function (e) {}

//     // click handler for the 'Start Over' button
//     $('#start').on('click', function (e) {}

//     // animates buttons on hover
//     $('.button').on('mouseenter', function () {}

//     // creates and returns the div that contains the questions and 
//     // the answer selections
//     function generateQuestionElement(index) {}

//     // creates a list of the answer choices as radio inputs
//     function theRadioButton(index) {}

//     // reads the user selection and pushes the value to an array
//     function choose() {}

//     // displays next requested element
//     function nextDisplay() {
//           // Controls display of 'prev' button
//           if(questionCounter === 1){
//           }
//           else{

//           }
//         }
//     // computes score and returns a paragraph element to be displayed
//     function scoreDisplay() {}
//   }
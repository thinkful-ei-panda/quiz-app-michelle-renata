/* eslint-disable indent */
/* eslint-disable strict */
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

  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
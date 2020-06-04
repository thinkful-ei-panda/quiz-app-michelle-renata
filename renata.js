/* eslint-disable indent */
/* eslint-disable strict */
const myQuestions = {
    // 5 or more questions are required
    questions: [
      {
        question: 'Which planet is bigger?',
        answers: [
          a: 'Earth',
          b: 'Mars',
          c: 'Io',
          d: 'Saturn',
          e: 'Venus'
        ],
        correctAnswer: 'Saturn'
      },
      {
        question: 'Which of these planets have no moons?',
        answers: [
         a: 'Uranus',
         b: 'Mercury',
         c: 'Earth',
         d: 'Sun',
         e: 'Pluto'
        ],
        correctAnswer: 'Mercury'
      },
      {
        question: 'Which of these is the largest object in the asteroid belt?',
        answers: [
         a: 'Makemake',
         b: 'Ceres',
         c: '4 Vesta',
         d: '3 Juno',
         e: 'Pallas'
        ],
        correctAnswer: 'Ceres'
      },
      {
        question: 'Which galaxy is further away from Earth?',
        answers: [
         a: 'Andromeda',
         b: 'large magellanic cloud',
         c: 'MACS0647-JD',
         d: 'Milky Way',
         e: 'Leo I'
        ],
        correctAnswer: 'MACS0647-JD'
      },
      {
        question: 'Which of these can be formed in a supernova?',
        answers: [
         a: 'white dwarf',
         b: 'black hole',
         c: 'a galaxy',
         d: 'alien life',
         e: 'dark matter'
        ],
        correctAnswer: 'dark matter'
      }
    ],
  };

  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){


	function showResults(questions, quizContainer, resultsContainer){
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let userAnswer = '';
        let numCorrect = 0;
        for(var i=0; i<questions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                if(userAnswer===questions[i].correctAnswer){
                    numCorrect++;
                    answerContainers[i].style.color = 'lightgreen';
                }
            else{
                    answerContainers[i].style.color = 'red';
                }
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        }
    }

	// show the questions
    function showQuestions(questions, quizContainer){
        let output = [];
        let answers;
        for(var i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                        + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }

	// when user clicks submit, show results
	submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
        let quizContainer = document.getElementById('quiz');
        let resultsContainer = document.getElementById('results');
        let submitButton = document.getElementById('submit');
    }
}
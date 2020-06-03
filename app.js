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
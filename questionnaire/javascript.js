const questions = [
    {
      question: "What is the capital city of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: 'c'
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      answer: 'c'
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Saturn", "Venus"],
      answer: 'a'
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: 'd'
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "George Bernard Shaw", "Oscar Wilde", "Jane Austen"],
      answer: 'a'
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "G", "Go"],
      answer: 'a'
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Liver", "Brain", "Skin"],
      answer: 'd'
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Mount Kilimanjaro", "Mount Everest", "Mount McKinley", "Mount Fuji"],
      answer: 'b'
    },
    {
      question: "Who is the author of the Harry Potter book series?",
      options: ["J.R.R. Tolkien", "J.K. Rowling", "Stephenie Meyer", "Dan Brown"],
      answer: 'b'
    },
    {
      question: "What is the largest continent?",
      options: ["Africa", "Europe", "Asia", "South America"],
      answer: 'c'
    },
    {
      question: "What is the primary language spoken in Brazil?",
      options: ["Spanish", "Portuguese", "French", "Italian"],
      answer: 'b'
    },
    {
      question: "Who painted the ceiling of the Sistine Chapel?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      answer: 'd'
    },
    {
      question: "What is the largest animal in the world?",
      options: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
      answer: 'b'
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Yen", "Dollar", "Euro"],
      answer: 'b'
    },
    {
      question: "Who wrote the novel 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "F. Scott Fitzgerald", "Mark Twain", "Ernest Hemingway"],
      answer: 'a'
    },
    {
      question: "What is the main component of air?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      answer: 'c'
    },
    {
      question: "Which country is known for its tulips and windmills?",
      options: ["Italy", "Netherlands", "France", "Germany"],
      answer: 'b'
    },
   
]  

const quizEl = document.getElementById('quiz');
const questionTextEl = document.getElementById('questionText');
const anwserAEl = document.getElementById('a_text');
const anwserBEl = document.getElementById('b_text');
const anwserCEl = document.getElementById('c_text');
const anwserDEl = document.getElementById('d_text');
const buttonEl = document.getElementById('button');
const answersEls = document.querySelectorAll('.answer');
let numberQuestion = 0;
let score = 0;

const loadQuiz = () =>{    
    const currentQuestion = questions[numberQuestion];
    questionTextEl.innerHTML = currentQuestion.question;
    anwserAEl.innerHTML = currentQuestion.options[0];
    anwserBEl.innerHTML = currentQuestion.options[1];
    anwserCEl.innerHTML = currentQuestion.options[2];
    anwserDEl.innerHTML = currentQuestion.options[3];    
}

loadQuiz();


const getSelected = () => {
    
    let answer = undefined;
    answersEls.forEach(answerEl => {        
        if( answerEl.checked){            
            answer = answerEl.id;
        }
    })
    console.log(answer)
    return answer;
}

const deselectedAsnwers = () => {
    answersEls.forEach(answerEl => {
        answerEl.checked = false;
    })
}


buttonEl.addEventListener('click',()=>{
    const answer = getSelected();
    deselectedAsnwers();
    if(answer){
        if(answer === questions[numberQuestion].answer){
            score++;
        }

        numberQuestion++
        if(numberQuestion < questions.length){
            loadQuiz();
        } else {
            //alert('You finished!, get yourself a Coffee break.')
            quizEl.innerHTML = `<h2>You answered correctly at ${score}/${questions.length} questions.</h2> <button onClick='location.reload()'>Reload</button> `;
            quizEl.style = `text-align: center`
            numberQuestion = 0;
        }
    }
})

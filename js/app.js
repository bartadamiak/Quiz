const question = document.querySelector('.question p');
const answer = document.querySelectorAll('.answer');
const fakeAnswers = ["San Antonio", 'Kapsztad', 'Warszawa', 'Tokjo', 'Pekin', 'Sydney', 'Nashville', 'Wagadugu', 'Hanoi', 'Port Moresby'];


const startBtn = document.querySelector('.start-btn');

const countries = [
    Nigeria = {
    country: "Nigeria",
    capital: "Abudża"
    }, 
    Meksyk = {
    country: "Meksyk",
    capital: "Mexico City"
    },
    Maroko = {
        country: "Maroko",
        capital: "Rabat"
    },
    Egipt = {
        country: "Egipt",
        capital: "Kair",
    },
    Rwanda = {
        country: "Rwanda",
        capital: "Kigali"
    },
    Zimbabwe = {
        country: "Zimbabwe",
        capital: "Harare"
    },
    Benin = {
        country: "Benin",
        capital: "Porto-Novo"
    }
];
console.log(countries);

let currentQuestionObject = "";
let currentQuestionAnswer = "";
let currentQuestion = "";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

function NextRound() {
    currentQuestionObject = countries[Math.floor(Math.random()*countries.length)];
        currentQuestionAnswer = currentQuestionObject.capital;
        currentQuestion = currentQuestionObject.country;
        question.innerText = currentQuestion;

        answer[Math.floor(Math.random()*answer.length)].classList.add('correct');
        document.querySelector('.correct').innerText = currentQuestionAnswer;
        document.querySelector('.correct').classList.remove('fake');
        
        let fake = document.querySelectorAll('.fake');
        
        shuffleArray(fakeAnswers);

        fake.forEach(function(element, index) {
            element.innerText = fakeAnswers[index];
        })

}


function Game() {

    startBtn.addEventListener('click', function(e) {
        e.preventDefault;
        NextRound();
        
        startBtn.classList.add('hidden');

        answer.forEach(function(e,i) {
            e.addEventListener('click', function(element) {
                element.preventDefault; 
                if (element.classList == "correct") {
                    console.log(this)
                }
            })
        })
    
    });
    
      


};

Game();
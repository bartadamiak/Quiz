const question = document.querySelector('.question p');
const answer = document.querySelectorAll('.answer');
const fakeAnswers = ["La Paz", "Tallinn", "Manila", "San Antonio", 'Kapsztad', 'Warszawa', 'Tokjo', 'Pekin', 'Sydney', 'Nashville', 'Wagadugu', 'Hanoi', 'Port Moresby'];
const checkAnswer = document.querySelector('.checkAnswer')

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
    },
    Bośnia = {
        country: "Bośnia",
        capital: "Sarajewo"
    },
    Gabon = {
        country: "Gabon",
        capital: "Libreville"
    }
];

let falseObject = {};
let checkAnswer = [];


let currentQuestionObject = "";
let currentQuestionAnswer = "";
let currentQuestion = "";

let generalCounter = 0;
let correctCounter = 0;
let counter = document.querySelector('.counter');

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
        });

};

function False() {
    

}


function Game() {

    startBtn.addEventListener('click', function(e) {
        e.preventDefault;
        NextRound();
        
        startBtn.classList.add('hidden');

        answer.forEach(function(e, i) {
            e.addEventListener('click', function(element) {

                this.classList.contains('correct') ? correctCounter += 1 : this.classList.add('false');
                generalCounter +=1;

                if (this.classList.contains('fake')) {
                    falseObject = {country: question.innerText, your: this.innerText, correct: document.querySelector('.correct').innerText}
                    checkAnswer.push(falseObject)
                };
                console.log(checkAnswer)

                document.querySelector('.correct').classList.add('fake');
                document.querySelector('.correct').classList.remove('correct');
                
                generalCounter == 10 ? document.querySelector('.counter').innerText = "Twój wynik to: " + correctCounter + "/" + generalCounter : NextRound();

                

                
            })
        })

        
    
    });
    
      


};

Game();
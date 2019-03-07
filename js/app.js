const question = document.querySelector('.question p');
const answer = document.querySelectorAll('.answer');
const fakeAnswers = ["La Paz", "Tallinn", "Manila", "San Antonio", 'Kapsztad', 'Warszawa', 'Tokjo', 'Pekin', 'Sydney', 'Nashville', 'Wagadugu', 'Hanoi', 'Port Moresby'];
const checkAnswer = document.querySelector('.checkAnswer ul')

const startBtn = document.querySelector('.start-btn');

let countries = [
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
let checkAnswerTab = [];


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



function NextRound(tab) {
    currentQuestionObject = tab[Math.floor(Math.random()*countries.length)];
    currentQuestionAnswer = currentQuestionObject.capital;
    currentQuestion = currentQuestionObject.country;
    question.innerText = currentQuestion;

    tab.forEach(function(e,i) {
        if (currentQuestion == e.country) {
            tab.splice(i, 1)
        }
    })
    

    // tab.forEach(function(e, i) {
    //     currentQuestion == e.country ? console.log(e.country) : console.log('brak')
    // })
    
    // if (currentQuestion == currentQuestionObject.country) {
    //     console.log(currentQuestion.indexOf())
    // }

        

    answer[Math.floor(Math.random()*answer.length)].classList.add('correct');
    document.querySelector('.correct').innerText = currentQuestionAnswer;
    document.querySelector('.correct').classList.remove('fake');

        
    let fake = document.querySelectorAll('.fake');
        
    shuffleArray(fakeAnswers);

    fake.forEach(function(element, index) {
        element.innerText = fakeAnswers[index];
    });

};



function False(tab) {

    tab.forEach(function(e, i) {
        let listOfFalse = document.createElement('li');
        listOfFalse.innerText = e.country;
        checkAnswer.append(listOfFalse);
    });
}

        
        




function Game(buttonStart, buttonAnswer) {

    buttonStart.addEventListener('click', function(e) {
        e.preventDefault;
        NextRound(countries);
        
        buttonStart.classList.add('hidden');

        buttonAnswer.forEach(function(e, i) {
            e.addEventListener('click', function(element) {

                this.classList.contains('correct') ? correctCounter += 1 : this.classList.add('false');
                generalCounter +=1;

                if (this.classList.contains('fake')) {
                    falseObject = {country: question.innerText, your: this.innerText, correct: document.querySelector('.correct').innerText}
                    checkAnswerTab.push(falseObject)
                };
                
                document.querySelector('.correct').classList.add('fake');
                document.querySelector('.correct').classList.remove('correct');
                
                generalCounter == 10 ? document.querySelector('.counter').innerText = "Twój wynik to: " + correctCounter + "/" + generalCounter : NextRound(countries);
                
                if (generalCounter == 10 && correctCounter < 10) {
                    False(checkAnswerTab)
                }
            })
        })
    });
};
                
Game(startBtn, answer);

                

        
    
    
    
      



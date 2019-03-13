const questionBack = document.querySelector('.flag');
const question = document.querySelector('.question p');
const answer = document.querySelectorAll('.answer');
const fakeAnswers = ["Mińsk", "Los Angeles", "Tijuana", "Austin", "Buenos Aires", "Nassau", "Katmandu", "Ułan Bator", "Naypyidaw", "Port Louis", "Ryga", "Maseru", "Doha", "La Paz", "Tallinn", "Manila", "San Antonio", 'Kapsztad', 'Warszawa', 'Tokio', 'Jafa', 'Madryt', 'Akra', 'Pekin', 'Sydney', 'Nashville', 'Wagadugu', 'Hanoi', 'Port Moresby'];
const checkAnswer = document.querySelector('.checkAnswer ul');
const timeElement = document.querySelector('.time');
const again = document.querySelector('.start-again');
const check = document.querySelector('.checkAnswer');

const startBtn = document.querySelector('.start-btn');

let countries = [
    Nigeria = {
    country: "Nigeria",
    capital: "Abudża",
    flag: "url('../images/Nigeria.svg')"
    }, 
    Meksyk = {
    country: "Meksyk",
    capital: "Mexico City",
    flag: "url('../images/Mexico.svg')"
    },
    Maroko = {
        country: "Maroko",
        capital: "Rabat",
        flag: "url('../images/Marocco.svg')"
    },
    Egipt = {
        country: "Egipt",
        capital: "Kair",
        flag: "url('../images/Egypt.svg')"
    },
    Rwanda = {
        country: "Rwanda",
        capital: "Kigali",
        flag: "url('../images/Rwanda.svg')"
    },
    Zimbabwe = {
        country: "Zimbabwe",
        capital: "Harare",
        flag: "url('../images/Zimbabwe.svg')"
    },
    Benin = {
        country: "Benin",
        capital: "Porto-Novo",
        flag: "url('../images/Benin.svg')"
    },
    Bośnia = {
        country: "Bośnia i Hercegowina",
        capital: "Sarajewo",
        flag: "url('../images/Bosnia.svg')"
    },
    Gabon = {
        country: "Gabon",
        capital: "Libreville",
        flag: "url('../images/Gabon.svg')"
    },
    Afganistan = {
        country: "Afganistan",
        capital: "Kabul",
        flag: "url('../images/Afganistan.svg')"
    },
    Angola = {
        country: "Angola",
        capital: "Luanda",
        flag: "url('../images/Angola.svg')"
    },
    Bahrajn = {
        country: "Bahrajn",
        capital: "Manama",
        flag: "url('../images/Bahrain.svg')"
    },
    Botswana = {
        country: "Botswana",
        capital: "Gaborone",
        flag: "url('../images/Botswana.svg')"
    },
    Wenezuela = {
        country: "Wenezuela",
        capital: "Caracas",
        flag: "url('../images/Wenezuela.svg')"
    },
    Uzbekistan = {
        country: "Uzbekistan",
        capital: "Taszkent",
        flag: "url('../images/Uzbekistan.svg')"
    },
    WyspySalomona = {
        country: "Wyspy Salomona",
        capital: "Honiara",
        flag: "url('../images/Wyspy_Salomona.svg')"
    },
    Urugwaj = {
        country: "Urugwaj",
        capital: "Montevideo",
        flag: "url('../images/Urugwaj.svg')"
    },
    Turkmenistan = {
        country: "Turkmenistan",
        capital: "Aszchabad",
        flag: "url('../images/Turkmenistan.svg')"
    },
    Togo = {
        country: "Togo",
        capital: "Lome",
        flag: "url('../images/Togo.svg')"
    },
    Syria = {
        country: "Syria",
        capital: "Damaszek",
        flag: "url('../images/Syria.svg')"
    },
    Somalia = {
        country: "Somalia",
        capital: "Mogadiszu",
        flag: "url('../images/Somalia.svg')"
    },
    Sudan = {
        country: "Sudan",
        capital: "Chartum",
        flag: "url('../images/Sudan.svg')"
    },
    Pakistan = {
        country: "Pakistan",
        capital: "Islamabad",
        flag: "url('../images/Pakistan.svg')"
    },
    Portugalia = {
        country: "Portugalia",
        capital: "Lizbona",
        flag: "url('../images/Portugalia.svg')"
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
    questionBack.style.background = currentQuestionObject.flag;
    questionBack.style.backgroundSize = "contain";
    questionBack.style.backgroundRepeat = "no-repeat";
    document.querySelector('.answers').classList.remove('hidden');

    tab.forEach(function(e,i) {
        if (currentQuestion == e.country) {
            tab.splice(i, 1)
        }
    })
    
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
        listOfFalse.innerText = e.country + ": stolicą jest " + e.correct;
        checkAnswer.append(listOfFalse);
    });
}

        
        




function Game(buttonStart, buttonAnswer, buttonAgain) {

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
                
                generalCounter == 15 ? document.querySelector('.counter').innerText = "Twój wynik to: " + correctCounter + "/" + generalCounter : NextRound(countries);
                
                if (generalCounter == 15 && correctCounter < 15) {
                    False(checkAnswerTab);
                    document.querySelector('.question').classList.add('hidden');
                    document.querySelector('.answers').classList.add('hidden');
                    again.classList.remove('hidden');
                    check.classList.remove('hidden');
                }
            })
        });
        
       buttonAgain.addEventListener('click', function(e) {
           location.reload();
       })
    });
};
                
Game(startBtn, answer, again);

                

        
    
    
    
      



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




startBtn.addEventListener('click', function(e) {
    e.preventDefault;
    currentQuestionObject = countries[Math.floor(Math.random()*countries.length)];
    currentQuestionAnswer = currentQuestionObject.capital;
    currentQuestion = currentQuestionObject.country;
    question.innerText = currentQuestion;
    answer[Math.floor(Math.random()*answer.length)].classList.add('correct');
    document.querySelector('.correct').innerText = currentQuestionAnswer;
    document.querySelector('.correct').classList.remove('fake');
    let fake = document.querySelectorAll('.fake');
    fake[0].innerText = fakeAnswers[Math.floor(Math.random()*fakeAnswers.length)];
    fake[1].innerText = fakeAnswers[Math.floor(Math.random()*fakeAnswers.length)];
    fake[2].innerText = fakeAnswers[Math.floor(Math.random()*fakeAnswers.length)];

    if (fake[0] == fake[1] || fake[0] == fake[2] || fake[1] == fake[2]) {
        fake[0].innerText = fakeAnswers[Math.floor(Math.random()*fakeAnswers.length)];
        fake[1].innerText = fakeAnswers[Math.floor(Math.random()*fakeAnswers.length)];
        fake[2].innerText = fakeAnswers[Math.floor(Math.random()*fakeAnswers.length)];
    }
   
    
    
    startBtn.classList.add('hidden');

})
// questions shown if no quiz is selected in the homepage
const quizIntro = [
    {
        question: 'What is the binary representation of the decimal number 5?',
        options: ['101', '110', '111', '100'],
        answer: '101',
        difficult: 0.4,
    },
    {
        question: 'Which of these is not a programming language?',
        options: ['Python', 'Java', 'HTML', 'C++'],
        answer: 'HTML',
        difficult: 0.2,
    },
    {
        question: 'Which data structure uses the LIFO principle?',
        options: ['Queue', 'Stack', 'Array', 'Graph'],
        answer: 'Stack',
        difficult: 0.3,
    },
    {
        question: 'What does HTTP stand for?',
        options: ['HyperText Transfer Protocol', 'HighText Transfer Protocol', 'Hyper Transfer Text Protocol', 'HyperText Transmission Path'],
        answer: 'HyperText Transfer Protocol',
        difficult: 0.2,
    },
    {
        question: 'Which of the following is used to syle web pages?',
        options: ['HTML', 'CSS', 'Python', 'SQL'],
        answer: 'CSS',
        difficult: 0.1,
    },
    {
        question: 'What is the time complexity of searching for an element in a binary search tree (average case)?',
        options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
        answer: 'O(log n)',
        difficult: 0.5,
    },
    {
        question: 'What is a correct syntax to output "Hello, World!" in Python?',
        options: [
            'echo "Hello, World!"',
            'console.log("Hello, World!")',
            'print("Hello, World!")',
            'System.out.println("Hello, World!");',
        ],
        answer: 'print("Hello, World!")',
        difficult: 0.2,
    },
    {
        question: 'Which of the following is a type of operating system?',
        options: ['Windows', 'Excel', 'Chrome', 'Photoshop'],
        answer: 'Windows',
        difficult: 0.1,
    },
    {
        question: 'What is the primary purpose of a compiler?',
        options: [
            'To execute the code directly',
            'To convert high-level code into machine code',
            'To interpret the code line by line',
            'To debug the code',
        ],
        answer: 'To convert high-level code into machine code',
        difficult: 0.3,
    },
    {
        question: 'Which of these is a correct variable name in most programming languages?',
        options: ['1variable', 'variable_1', 'variable-1', 'var iable'],
        answer: 'variable_1',
        difficult: 0.2,
    },
    {
        question: 'What does "RAM" stand for in computing?',
        options: [
            'Random Access Memory',
            'Read Access Memory',
            'Random Allocation Module',
            'Read Allocation Memory',
        ],
        answer: 'Random Access Memory',
        difficult: 0.1,
    },
    {
        question: 'What is the output of 7 % 3 in most programming languages?',
        options: ['1', '2', '3', '0'],
        answer: '1',
        difficult: 0.3,
    },
    {
        question: 'Which one of these is an example of an IDE?',
        options: ['Microsoft Word', 'PyCharm', 'Linux', 'Apache'],
        answer: 'PyCharm',
        difficult: 0.2,
    }
];

const algorithmsQuiz = [
        {
            question: 'What is the time complexity of binary search?',
            options: ['O(n)', 'O(log n)', 'O(1)', 'O(n^2)'],
            answer: 'O(log n)',
            difficult: 0.5,
        },
        {
            question: 'Which data structure follows the FIFO principle?',
            options: ['Stack', 'Queue', 'Array', 'Linked List'],
            answer: 'Queue',
            difficult: 0.3,
        },
        {
            question: 'What is a heap primarily used for?',
            options: [
                'Implementing priority queues',
                'Sorting data linearly',
                'Storing hash keys',
                'Searching elements sequentially',
            ],
            answer: 'Implementing priority queues',
            difficult: 0.4,
        },
        {
            question: 'What traversal order is used in Depth First Search (DFS)?',
            options: ['Breadth-First', 'Inorder', 'Preorder', 'Postorder'],
            answer: 'Preorder',
            difficult: 0.3,
        },
        {
            question: 'Which sorting algorithm has the best average-case time complexity?',
            options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'],
            answer: 'Merge Sort',
            difficult: 0.4,
        },
        {
            question: 'Which data structure can be used to implement a LRU cache?',
            options: ['Queue', 'Stack', 'Hash Map and Linked List', 'Heap'],
            answer: 'Hash Map and Linked List',
            difficult: 0.5,
        }
];

const operatingSystemsQuiz =  [
        {
            question: 'What is the main purpose of an operating system?',
            options: [
                'To run antivirus programs',
                'To manage hardware and software resources',
                'To compile programming code',
                'To edit documents',
            ],
            answer: 'To manage hardware and software resources',
            difficult: 0.2,
        },
        {
            question: 'What does a process scheduler do?',
            options: [
                'Schedules emails to be sent',
                'Allocates CPU time to processes',
                'Manages file permissions',
                'Handles disk formatting',
            ],
            answer: 'Allocates CPU time to processes',
            difficult: 0.3,
        },
        {
            question: 'Which of these is a type of process scheduling algorithm?',
            options: ['Round Robin', 'Breadth First Search', 'Quick Sort', 'Mutex Lock'],
            answer: 'Round Robin',
            difficult: 0.4,
        },
        {
            question: 'What is a deadlock in operating systems?',
            options: [
                'A process waiting indefinitely for resources',
                'A security breach',
                'A system crash due to memory overflow',
                'An error in a program',
            ],
            answer: 'A process waiting indefinitely for resources',
            difficult: 0.4,
        },
        {
            question: 'What does a file system do?',
            options: [
                'Encrypts files',
                'Organizes and stores files on disk',
                'Executes programs in memory',
                'Manages CPU processes',
            ],
            answer: 'Organizes and stores files on disk',
            difficult: 0.2,
        },
        {
            question: 'What is virtual memory used for?',
            options: [
                'Extending RAM with disk space',
                'Storing the operating system kernel',
                'Backing up files',
                'Encrypting memory',
            ],
            answer: 'Extending RAM with disk space',
            difficult: 0.3,
        }
];

//session storage
let chartData = JSON.parse(sessionStorage.getItem('charData')) || [0,0,0,0,0,0,0];
let userCoins = JSON.parse(sessionStorage.getItem("token")) || 0;
let username = JSON.parse(sessionStorage.getItem('username')) || null;
let password = JSON.parse(sessionStorage.getItem('password')) || null;
let quizSelect = JSON.parse(sessionStorage.getItem("quizSelected")) || "";  //when a selection quiz button is pressed in the homepage, this variable is set to either ASD or SO for displaying the appropriate questions
let introQuiz = JSON.parse(sessionStorage.getItem("intro-quiz")) || quizIntro;
let asdQuiz = JSON.parse(sessionStorage.getItem("asd-quiz")) || algorithmsQuiz;
let soQuiz = JSON.parse(sessionStorage.getItem("so-quiz")) || operatingSystemsQuiz;



//for displaying and selecting available quizzes 
const showQuizButton = document.getElementById('quiz-showing');
const introContainer = document.getElementById('appIntro');
const selectionContainer = document.getElementById('quizDisplayed');
const asdButton = document.getElementById('asdSelected');
const soButton  = document.getElementById('soSelected');

let quizData = null; //support variable for uploading one of the various quizzes

//for quiz
const quizContainer = document.getElementById('quiz');
const quizResult = document.getElementById('quiz-result');
const submitButton = document.getElementById('submit');
const showAnswer = document.getElementById('show-incorrect-ans');
const tokensEarned = document.getElementById('token-earned'); //also used to show tokens in profile page
const getHintButton = document.getElementById('get-Hint');

// for leaderboard
var tabs = document.querySelectorAll(".leaderboard-tabs ul li");
var today = document.querySelector(".today");
var month = document.querySelector(".month");
var year = document.querySelector(".year");
var items = document.querySelectorAll(".lboard_item");

//for profile customization
const editButton   = document.getElementById("edit-button");
const imageUpload  = document.getElementById("image-upload");
const profileImage = document.getElementById("default-profile");
const profileName  = document.getElementById("profile-name"); 


//to handle the popup form
const submitFormB = document.getElementById("submitFormButton");
const question = document.getElementById("question-name");
const correctAnsw = document.getElementById("correct-answer");
const answer1 = document.getElementById("possible-answers1");
const answer2 = document.getElementById("possible-answers2");
const answer3 = document.getElementById("possible-answers3");
const answer4 = document.getElementById("possible-answers4");
const questDiff = document.getElementById("difficulty-level");

let index = 0;
let userScore = 0;
let incorrectAnswer = [];
let earnedCoinsDuringQuiz = 0;
let coinsEarned = 0;
let indexIncorrect = 0; //index to scroll through incorrect options for a question

function displayQuestion() {
    const questionInfo = quizData[index];

    const quizQuestionDiv = document.createElement('div');
    quizQuestionDiv.className = 'quiz-question';
    quizQuestionDiv.innerHTML = questionInfo.question;

    const quizOptionsDiv = document.createElement('div');
    quizOptionsDiv.className = 'quiz-options';

    // build the quiz and append it to the quizContainer
    for (let i = 0; i < questionInfo.options.length; ++i) {
        const option = document.createElement('label');
        option.className = 'single-option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'quiz';
        radio.value = questionInfo.options[i];

        const optionText = document.createTextNode(questionInfo.options[i]);

        option.appendChild(radio);
        option.appendChild(optionText);

        quizOptionsDiv.appendChild(option);
    }

    // clear and append
    quizContainer.innerHTML = ''; 
    quizContainer.appendChild(quizQuestionDiv);
    quizContainer.appendChild(quizOptionsDiv);
}

// multiply the difficult value of the passed question * 10
// add the result to the userCoin
function calculateCoins(quizItem) {
    return quizItem.difficult * 10;
}

function checkUserAnswer() {
    const userSelectedOption = document.querySelector('input[name="quiz"]:checked');
    const todayIndex = new Date().getDay();

    if (userSelectedOption != null) {
        const answer = userSelectedOption.value;

        // for now the questions will be asked in the same order as they are present within quizData 
        if (answer === quizData[index].answer) {
            userScore++;
            coinsEarned = coinsEarned + quizData[index].difficult * 10;
			
        } else {
            incorrectAnswer.push({
                question: quizData[index].question,
                incorrect: answer,
                correct: quizData[index].answer,
            });
        }
        // increment -> goto next question in quizData
        index++;

        // reset
        userSelectedOption.checked = false;

        // < : next question
        // > : result
        if (index < quizData.length) {
            indexIncorrect = 0; //reset the index of the incorrect options for the new question
            displayQuestion();

        } else {
			
            chartData[todayIndex] += userScore;
            sessionStorage.setItem('chartData', JSON.stringify(chartData));
            displayResult();
        }
    }
}

function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    getHintButton.style.display = 'none';
    tokensEarned.style.display = 'none';

    // if the user has answered at least one question incorrectly 
    if (incorrectAnswer.length > 0) {
        showAnswer.style.display = 'block';
        showAnswer.style.margin = '10px auto 0';
        showAnswer.style.textAlign = 'center';
    }
	
	userCoins += coinsEarned;
	sessionStorage.setItem("token", JSON.stringify(userCoins));

    quizResult.innerHTML = `You scored ${userScore} out of ${quizData.length}, coins earned: ${coinsEarned}!<br>`;
    coinsEarned = 0;
	//quizSelect = "none";
	//sessionStorage.setItem("quizSelected", JSON.stringify(quizSelect));
	
	const submitQuestion = document.createElement('button');
	
	submitQuestion.addEventListener('click', togglePopup);
	
	submitQuestion.textContent = 'Submit a question';
	
	quizResult.appendChild(submitQuestion);
	
}

function displayIncorrectAnswer() {
    showAnswer.style.display = 'none';
    for (let i = 0; i < incorrectAnswer.length; i++) {
        quizResult.innerHTML += 
        `
	<br>Qestion: ${incorrectAnswer[i].question}<br>
	Your guess: ${incorrectAnswer[i].incorrect}<br>
	Correct guess: ${incorrectAnswer[i].correct}<br>
`
    }
	
	
}

//Function to get hints on quiz
function getHint() {
    const questionInfo = quizData[index];
    const options = document.querySelectorAll('.single-option');
    //filter through and get incorrect answers as DOM elements
    const incorrectOptions = Array.from(options).filter(answ => {
        const radio = answ.querySelector('input[type= "radio"]'); 
        return radio && radio.value != questionInfo.answer;
    });

    if(userCoins <= 0) {
        alert("Not enough tokens!!");
        return;
    } 

    if(indexIncorrect >= 0 && indexIncorrect < incorrectOptions.length) {
        if(questionInfo.difficult >= 0.1 && questionInfo.difficult <= 0.2 && userCoins >= 1) {
            userCoins -= 1;
        } else if(questionInfo.difficult >= 0.3 && questionInfo.difficult <= 0.4  && userCoins >= 2) {
            userCoins -= 2;
        } else if(questionInfo.difficult === 0.5 && userCoins >= 3) {
            userCoins -= 3;
        } else {
			alert("Not enough tokens!!");
			return;
		}

        incorrectOptions[indexIncorrect].classList.add('hint-wrong');
        indexIncorrect++;

        sessionStorage.setItem("token", JSON.stringify(userCoins));
        document.getElementById("token-earned").textContent = ` Your tokens: ${userCoins}`;
		
	
    } else {
        alert("No more hints!!");
    }
}

// using Chart.js to visualize user performance for the week
function showUserChart() {
    const xValuesDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const storedChartData = JSON.parse(sessionStorage.getItem('chartData')) || [0, 0, 0, 0, 0, 0, 0];

    new Chart("userProgressChart", {
        type: "bar",
        data: {
            labels: xValuesDays,
            datasets: [{
                data: storedChartData,
                backgroundColor: "rgba(150, 74, 189, 1)",
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Youre Score Per Day"
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// get credentials
function getCredentials() {
    const loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        username = document.getElementById('fiscal-code').value;
        password = document.getElementById('userpassword').value;
        sessionStorage.setItem('username', JSON.stringify(username));
        sessionStorage.setItem('password', JSON.stringify(password));
        callApi();
    });
}

// API for the login
async function callApi() {
    const baseUrl = "https://api.uniparthenope.it";
    const apiUrl = `${baseUrl}/UniparthenopeApp/v1/login`;

    const headers = new Headers({
        'Authorization': 'Basic ' + btoa(`${username}:${password}`)  
    });

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: headers
        });
        console.log("Response status: " + response.status);
        const responseBody = await response.json();
        console.log('Response API:', responseBody);

        if (response.status === 200) {
            window.location.href = 'index.html';
            sessionStorage.setItem("profileName", responseBody.user.firstName);
        } else {
            if (response.status === 401) {
                alert("Wrong credentials, try again!");
            } else {
                alert("Error, try again later.");
            }
        } 
    } catch (error) {
        console.log("error: " + error);
        alert("API error.");
    }
}

function checkPassword() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        const passwordInput = document.getElementById('userpassword');
        if (passwordInput.value.length < 8) {
            alert('Password must be minimum 8 characters long.');
            event.preventDefault();
        }
    });
}

function showHidePassword() {
    document.querySelector('.show-hide-b').addEventListener('click', function() {
        const passwordInput = document.getElementById('userpassword');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            this.textContent = 'HIDE';
        } else {
            passwordInput.type = 'password';
            this.textContent = 'SHOW';
        }
    });
}

// set the name of the user in the profile page
function setProfileName() {
    profileName.textContent = sessionStorage.getItem('username');
}

function showUserTokens() {
    tokensEarned.innerHTML = 
        `<br> Your tokens: ${userCoins}<br>`;

    tokensEarned.style.fontWeight = 'bold';

}

// change user profile name and profile image
function customizeProfile() {
    const savedProfileName = sessionStorage.getItem("profileName");
    const savedProfileImage = sessionStorage.getItem("profileImage");

    if (savedProfileName) {
        profileName.textContent = savedProfileName;
    }
    if (savedProfileImage) {
        profileImage.src = savedProfileImage;
    }

    editButton.addEventListener("click", () => {
        if (editButton.textContent === "Edit Profile") {
            profileName.textContent = "";
            profileName.contentEditable = "true";
            profileName.focus();
            editButton.textContent = "Save Profile";
            profileImage.style.cursor = "pointer";

            profileImage.addEventListener("click", () => {
                imageUpload.click();
            });

            imageUpload.addEventListener("change", (event) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        profileImage.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        } else {
            profileName.contentEditable = "false";
            editButton.textContent = "Edit Profile";

            // save new name
            const newProfileName = profileName.textContent.trim();

            // check new name lenght and check for spaces with \s regExp
            if (newProfileName.length === 0 || newProfileName.length > 10 || /\s/.test(newProfileName)) {
                alert("The new name must not contain spaces and must be less than 10 characters!");
                profileName.contentEditable = "true";
                editButton.textContent = "Save Profile";
                return;
            }

            // save changes in sessionStorage
            sessionStorage.setItem("profileName", newProfileName);
            sessionStorage.setItem("profileImage", profileImage.src);
            alert("Profile updated successfully!");
        }
    });
}

//function to show available quizzes in the home page
//this is done by giving a behaviour to the selectionButton 
function showQuizzes() {
	appIntro.style.display = "none";
	
	selectionContainer.style.display = "block";
}

//function for uploading one of the quizzes 
function uploadQuiz() {
	if( quizSelect === "ASD") {
		quizData = asdQuiz;
	} else if( quizSelect === "SO") {
		quizData = soQuiz;
	} else {
		quizData = introQuiz;
	}
}

/*function to show form for submitting questions to add to quizzes*/
function togglePopup() {
	const overlay = document.getElementById('popup-overlay');
	overlay.classList.toggle('show');
}

/*function to handle input entries in form and add a new question to the quiz*/
function handleForm() {
	const newEntry =  {
        question: question.value ,
        options: [answer1.value,answer2.value ,answer3.value ,answer4.value ],
        answer: correctAnsw.value,
        difficult: parseFloat(questDiff.value),
    };
	
	
	
	quizData.push(newEntry);
	
	if( quizSelect === "ASD") {
		sessionStorage.setItem("asd-quiz", JSON.stringify(quizData));
	} else if( quizSelect === "SO") {
		sessionStorage.setItem("so-quiz", JSON.stringify(quizData));
	} else {
		sessionStorage.setItem("intro-quiz", JSON.stringify(quizData));
	}
}

// handle content based on page id
document.addEventListener("DOMContentLoaded", () => {
    const pageId = document.body.id;
	
	if(pageId == "home-page") {
		showQuizButton.addEventListener('click',showQuizzes);
		asdButton.addEventListener('click', () => {
			quizSelect = "ASD";
			sessionStorage.setItem("quizSelected", JSON.stringify(quizSelect));
		});
		
		soButton.addEventListener('click', () => {
			quizSelect = "SO";
			sessionStorage.setItem("quizSelected", JSON.stringify(quizSelect));
		});
		
	}

    if (pageId == "profile-page") {
        showUserChart();
        showUserTokens();
        customizeProfile();
    }

    if (pageId == "quiz-page") {
		submitFormB.addEventListener('click', handleForm);
		uploadQuiz();
        showUserTokens();
        displayQuestion()
        getHintButton.addEventListener('click', getHint);
        showAnswer.style.display = 'none';
        submitButton.addEventListener('click', checkUserAnswer);
        showAnswer.addEventListener('click', displayIncorrectAnswer);
    }

    if (pageId == "login-page") {
        checkPassword();
        getCredentials();
        showHidePassword();
    }
});
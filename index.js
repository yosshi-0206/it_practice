const quizList = [
    {
        question : 'Hello?'
        ,answer : 'Java'
        ,quiz : [
            'Java',
            'Jira',
            'Kawa',
            'Yama',
            'da'
        ]
    },
    {
        question : '俺の血液型は？'
        ,answer : 'O型'
        ,quiz : [
            'A型',
            'B型',
            'O型',
            'AB型',
            'RH-型'
        ]
    },
    {
        question : '俺の誕生年は？'
        ,answer : '1993年'
        ,quiz : [
            '1992年',
            '1993年',
            '1994年',
            '1995年',
            '1996年'
        ]
    }
];

const $question = document.getElementById('js_question');
const $quiz = document.getElementsByTagName('button');
const quizLength = $quiz.length;
const quizListLength = quizList.length;
let quizIndex = 0;
const setUpQuiz = () => {
    $question.textContent = quizList[quizIndex].question;
    let quizListIndex = 0;
    while(quizListIndex < quizLength) {
        $quiz[quizListIndex].textContent = quizList[quizIndex].quiz[quizListIndex];
        quizListIndex++;
    }
}

setUpQuiz();
let goodCount = 0;
const quizIvent = (e) => {
    if(quizList[quizIndex].answer == e.target.textContent) {
        window.alert('正解');
        goodCount++;
    } else {
        window.alert('不正解');
    }
    if(quizIndex < quizListLength - 1) {
        quizIndex++;
        setUpQuiz();
    } else {
        window.alert('あなたの正解数は' + quizListLength + '/' + goodCount + 'です');
    }

}

let index = 0;
while(index < quizLength) {
    $quiz[index].addEventListener('click',(e) => {
        quizIvent(e);
    });
    index++;
}
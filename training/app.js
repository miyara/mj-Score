const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーファミ',
      'Swich',
      'DS',
      'PS2'    
    ],
    correct: 'DS'
  }, {
    question: 'quiz2',
    answers: [
      'q2-select1',
      'q2-select2',
      'q2-select3',
      'q2-select4'    
    ],
    correct: 'select1'
  }, {
    question: 'quiz3',
    answers: [
      'q3-select1',
      'q3-select2',
      'q3-select3',
      'q3-select4',
    ],
    correct: 'q3-select4'
  }
];

const quizLen = quiz.length;
let quizIdx = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIdx].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIdx].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIdx].correct === e.target.textContent) {
    window.alert('正解!');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIdx++;

  if(quizIdx < quizLen){
    //問題数がまだあればこちらを実行
    setupQuiz();
  }else{
    //問題がなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLen + 'です！');
  }
};

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
};

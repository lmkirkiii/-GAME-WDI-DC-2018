const image = document.querySelector('.front');
var questionsArray= ['True or false do animals that Lay eggs have belly buttons?','Who was the first President born a US citizen?','Which country privately owns the most tigers world wide?','Do Tomatoes have more genes then humans?','How long does the largest mushroom in the world strech for?','What is the word to describe a flock of crows?']
var question = []
var answersArray = ['No of course they dont!','Martin Van Buren!','The U.S.A!','Yes they do! Saucey!','3.5 miles!','A  murder!']
var answer = [];
var incorrectAnswerArray = [];
var incorrectQuestionArray = [];
var hideQ = document.querySelector('#question')
var showQ = document.querySelector('#question')
var hideA = document.querySelector('#answer')
var showA = document.querySelector('#answer')
var reviewshow = document.querySelector('#answerReview')
var backCap1 = document.querySelector('.back1')
var backCap = document.querySelector('.back')
var gameOver = document.querySelector('#game-over')
var correctBtn = document.querySelector('.button1')
var incorrectBtn = document.querySelector('.button2')
var reviewBtn = document.querySelector('.button3')
var cardClass = document.querySelector('.card')
var reviewClass = document.querySelector('.review')
var reviewFront = document.querySelector('.front1')
var reviewBack = document.querySelector('.reviewback1')
var reviewBack2 = document.querySelector('.reviewBack2')
image.addEventListener("click",function(evt){
    for(i = 0; i < 1; i++){
        question.push(questionsArray[i])
        if (questionsArray.length === 0 ){
            gameOver.style.display = 'inline'
        }
      }
       showQ.style.display = 'inline'
       image.style.display = 'none'
       backCap1.style.display = 'inline'
       question.toString();
       document.querySelector('#question').innerHTML = question; 
       console.log(evt)
   })

backCap1.addEventListener("click", function(event){
       event.preventDefault()
       for(i = 0; i < 1; i++){
           answer.push(answersArray[i])
           if (answersArray.length === 0 ){
            gameOver.style.display = 'inline' 
           }
       }
       showA.style.display = 'inline'
       hideQ.style.display = 'none'
       backCap.style.display = 'inline'
       backCap1.style.display = 'none'
       answer.toString();
       document.querySelector('#answer').innerHTML = answer; 
   })

correctBtn.addEventListener("click",function(evt){
       answersArray.shift()
       questionsArray.shift();
       answer.pop()
       question.pop()
       backCap.style.display = 'none'
       image.style.display = 'inline'
       hideA.style.display ='none'
       gameOver.style.display = 'none'
   })

incorrectBtn.addEventListener("click",function(evt){
    incorrectQuestionArray.push(question[0])
    incorrectAnswerArray.push(answer[0])
    answersArray.shift()
    questionsArray.shift();
    answer.pop()
    question.pop()
    backCap.style.display = 'none'
    image.style.display = 'inline'
    hideA.style.display ='none'
    gameOver.style.display = 'none'
})

// REVIEW FUNCTION ZONE  

reviewBtn.addEventListener("click",function(){
    cardClass.style.display = 'none';
    reviewClass.style.display = 'block';

})

reviewFront.addEventListener("click",function(evt){
    for(i = 0; i < 1; i++){
        question.push(incorrectQuestionArray[i])
        incorrectQuestionArray.shift()
        if (incorrectQuestionArray.length === 0 ){
            cardClass.style.display = 'block';
            reviewClass.style.display = 'none';
        }
        
      }
       showQ.style.display = 'inline'
       reviewFront.style.display = 'none'
       reviewBack.style.display = 'inline'
       question.toString();
       document.querySelector('#question').innerHTML = question; 
       console.log(evt)
   })


reviewBack.addEventListener("click", function(event){
    question.pop();
    event.preventDefault()
    for(i = 0; i < 1; i++){
        answer.push(incorrectAnswerArray[i])
        incorrectAnswerArray.shift()
        if (incorrectAnswerArray.length === 0 ){
            cardClass.style.display = 'block';
            reviewClass.style.display = 'none';
        }
    }
    reviewshow.style.display = 'inline'
    hideQ.style.display = 'none'
    reviewBack.style.display = 'none'
    reviewBack2.style.display = 'inline'
    answer.toString();
    document.querySelector('#answerReview').innerHTML = answer; 
})

reviewBack2.addEventListener("click",function(evt){
    answer.pop();
    reviewBack2.style.display = 'none'
    reviewFront.style.display = 'inline'
    reviewshow.style.display ='none'
    gameOver.style.display = 'none'
})

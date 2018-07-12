const image = document.querySelector('.front');
var questionsArray= ['True or false do animals that Lay eggs have belly buttons?','Who was the first President born a US citizen?','Which country privately owns the most tigers world wide?','Do Tomatoes have more genes then humans?','How long does the largest mushroom in the world strech for?','What is the word to describe a flock of crows?']
var question = []
var answersArray = ['No of course they dont!','Martin Van Buren!','The U S A!','Yes they do! Saucey!','3.5 miles!','A  murder!']
var answer = [];
var incorrectAnswerArray = [];
var incorrectQuestionArray = [];
var card = document.querySelector('.card')
var hideQ = document.querySelector('#question')
var showQ = document.querySelector('#question')
var hideA = document.querySelector('#answer')
var showA = document.querySelector('#answer')
var reviewshow = document.querySelector('#answerReview')
var backCap1 = document.querySelector('.back1')
var backCap = document.querySelector('.back')
var reviewGame = document.querySelector('#game-over-review')
var gameOver = document.querySelector('#game-over')
var correctBtn = document.querySelector('#button1')
var incorrectBtn = document.querySelector('#button2')
var reviewBtn = document.querySelector('#button3')
var cardClass = document.querySelector('.card')
var reviewClass = document.querySelector('.review')
var historyClass = document.querySelector('.history')
var reviewFront = document.querySelector('.front1')
var reviewBack = document.querySelector('.reviewback1')
var reviewBack2 = document.querySelector('.reviewBack2')
var redbutton =document.querySelector('.red')
var orangebutton = document.querySelector('.orange')
var lightgreenbutton = document.querySelector('.yellow')
var greenbutton = document.querySelector('.green')
var developers = document.querySelector('.developers')
var theorytext = document.querySelector('.theory')
var rules = document.querySelector('.rules')
var buttonsWhole = document.querySelector('.button-container')


//First half of Flash cards. 

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
    buttonsWhole.style.display = 'none'

})

reviewFront.addEventListener("click",function(evt){
    for(i = 0; i < 1; i++){
        question.push(incorrectQuestionArray[i])
       
        if (incorrectQuestionArray.length === 0 ){
            reviewGame.style.display = 'inline' 
        }
        incorrectQuestionArray.shift();
    }
       showQ.style.display = 'inline'
       reviewFront.style.display = 'none'
       reviewBack.style.display = 'inline'
       question.toString();
       document.querySelector('#question').innerText = question; 
       console.log(evt)
   })


reviewBack.addEventListener("click", function(event){
    question.pop();
    event.preventDefault()
    for(i = 0; i < 1; i++){
        answer.push(incorrectAnswerArray[i])
        if (incorrectAnswerArray.length === 0 ){
            reviewGame.style.display = 'inline' 
        }
        incorrectAnswerArray.shift()
        }
    reviewshow.style.display = 'inline'
    hideQ.style.display = 'none'
    reviewBack.style.display = 'none'
    reviewBack2.style.display = 'inline'
    answer.toString();
    document.querySelector('#answerReview').innerText = answer; 
})

reviewBack2.addEventListener("click",function(evt){
    answer.pop();
    reviewBack2.style.display = 'none'
    reviewFront.style.display = 'inline'
    reviewshow.style.display ='none'
    gameOver.style.display = 'none'
})

// Page content :

redbutton.addEventListener('click',function(event){
    event.preventDefault();
    theorytext.style.display = 'block'
    developers.style.display = 'none'
    rules.style.display = 'none'
    historyClass.style.display = 'none'
    card.style.display = 'none'
    buttonsWhole.style.display = 'none'
    review.style.display = 'none'
    buttonsWhole.style.display = 'none'

})

orangebutton.addEventListener('click',function(event){
    event.preventDefault();
    historyClass.style.display = 'block'
    developers.style.display = 'none'
    rules.style.display = 'none'
    theorytext.style.display = 'none'
    card.style.display = 'none'
    buttonsWhole.style.display = 'none'
    review.style.display = 'none'
    buttonsWhole.style.display = 'none'
    

})

orangebutton.addEventListener('click',function(event){
    event.preventDefault();
    historyClass.style.display = 'block'
    developers.style.display = 'none'
    rules.style.display = 'none'
    theorytext.style.display = 'none'
    buttonsWhole.style.display = 'none'
    card.style.display = 'none'
    review.style.display = 'none'
    
})

lightgreenbutton.addEventListener('click',function(event){
    event.preventDefault();
    rules.style.display = 'block'
    developers.style.display = 'none'
    historyClass.style.display = 'none'
    theorytext.style.display = 'none'
    buttonsWhole.style.display = 'none'
    card.style.display = 'none'
    review.style.display = 'none'
})
greenbutton.addEventListener('click',function(event){
    event.preventDefault();
    developers.style.display = 'block'
    rules.style.display = 'none'
    historyClass.style.display = 'none'
    theorytext.style.display = 'none'
    buttonsWhole.style.display = 'none'
    card.style.display = 'none'
    review.style.display = 'none'
    
})
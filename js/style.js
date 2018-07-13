//Array Data 

const image = document.querySelector('.front');
var questionsArray= ['Do animals that Lay eggs have belly buttons?','Who was the first President born a US citizen?','Which country privately owns the most tigers world wide?','Do Tomatoes have more genes then humans?','What is the word to describe a flock of crows?','Can Mangoes get sun burned?','In cards which king is the only one without a mustache?','Is steel recyclable?']
var changeColor = ['red','orange','yellow','lightblue','green','pink','purple','magenta','lightcoral'];
var answersArray = ['No of course they dont!','Martin Van Buren!','The U S A!','Yes they do! Saucey!','A  murder!','Yup! Toasty!','The King of Hearts!','Yes it is 100% recyclable']
var question = []
var answer = [];
var incorrectAnswerArray = [];
var incorrectQuestionArray = [];
var correctQuestion = []; 
var color = [];
var scoreBox = 'Correct Answers: '
var inscoreBox = 'InCorrect Answers:'



//Variables 

    //Audio 
    var audio = document.getElementById("myAudio")
    //Scoring variables 
    var incorrectScore = incorrectQuestionArray.length
    var correctScore = correctQuestion.length
    

    //Div Variables
    var body = document.querySelector('body')
    var card = document.querySelector('.card')
    var developers = document.querySelector('.developers')
    var reviewClass = document.querySelector('.review')
    var historyClass = document.querySelector('.history')
    var cardClass = document.querySelector('.card')
    var theorytext = document.querySelector('.theory')
    var rules = document.querySelector('.rules')
    var scoreContainer = document.querySelector('.scoreContainer')
    var imageAnswer = document.querySelector('#answer1')
    var imageAnswerReview = document.querySelector('#answer1Review')


    //Buttons

    var redbutton =document.querySelector('.red')
    var orangebutton = document.querySelector('.orange')
    var lightgreenbutton = document.querySelector('.yellow')
    var greenbutton = document.querySelector('.green')
    var buttonsWhole = document.querySelector('.button-container')
    var changeBackGround = document.querySelector('.change')
    var correctBtn = document.querySelector('#button1')
    var incorrectBtn = document.querySelector('#button2')
    var reviewBtn = document.querySelector('#button3')
    var EndButton = document.querySelector('#button4')

    //Smaller Classes and Hidden Objects

    var hideQ = document.querySelector('#question')
    var showQ = document.querySelector('#question')
    var hideA = document.querySelector('#answer')
    var showA = document.querySelector('#answer')
    var reviewshow = document.querySelector('#answerReview')
    var backCap1 = document.querySelector('.back1')
    var backCap = document.querySelector('.back')
    var reviewGame = document.querySelector('#game-over-review')
    var gameOver = document.querySelector('#game-over')
    var reviewFront = document.querySelector('.front1')
    var reviewBack = document.querySelector('.reviewback1')
    var reviewBack2 = document.querySelector('.reviewBack2')


//Regular Game of Snapple Flash 

image.addEventListener("click",function(evt){
    for(i = 0; i < 1; i++){
        question.push(questionsArray[i])
        if (questionsArray.length === 0 ){
            document.querySelector('#scoreCorrect').innerHTML = scoreBox + correctQuestion.length
            document.querySelector('#scoreIncorrect').innerHTML = inscoreBox + incorrectQuestionArray.length
            card.style.display = 'none'
            gameOver.style.display = 'inline'
            reviewBtn.style.display = 'inline'
        }
      }
       EndButton.style.display = 'none'
       imageAnswer.style.display = "inline"
       correctBtn.style.display = 'none'
       incorrectBtn.style.display = 'none'
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
            document.querySelector('#scoreCorrect').innerHTML = scoreBox + correctQuestion.length
            document.querySelector('#scoreIncorrect').innerHTML = inscoreBox + incorrectAnswerArray.length

            card.style.display = 'none'
            gameOver.style.display = 'inline'
            reviewBtn.style.display = 'inline'
           }
       }
       imageAnswer.style.display = "none"
       EndButton.style.display = 'inline'
       correctBtn.style.display = 'inline'
       reviewBtn.style.display = 'none'
       incorrectBtn.style.display = 'inline'
       showA.style.display = 'inline'
       hideQ.style.display = 'none'
       backCap.style.display = 'inline'
       backCap1.style.display = 'none'
       answer.toString();
       document.querySelector('#answer').innerHTML = answer; 
   })

correctBtn.addEventListener("click",function(event){
       event.preventDefault()
       correctQuestion.push(question[0])
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
    reviewClass.style.display = 'block';
    cardClass.style.display = 'none';
    buttonsWhole.style.display = 'none';
    gameOver.style.display = 'none' 
    reviewBack2.style.display = 'none'
    scoreContainer.style.display = 'none'


})

reviewFront.addEventListener("click",function(evt){
    for(i = 0; i < 1; i++){
        question.pop();
        question.push(incorrectQuestionArray[i])
       
        if (incorrectQuestionArray.length === 0 ){
            reviewClass.style.display = 'none'
            reviewGame.style.display = 'inline' 
        }
        incorrectQuestionArray.shift();
    }
       imageAnswerReview.style.display = "inline"
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
            reviewClass.style.display = 'none'
            reviewGame.style.display = 'inline' 
        }
        incorrectAnswerArray.shift()
        }
    imageAnswerReview.style.display = "none"
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

// End Button 
EndButton.addEventListener('click',function(evt){
    document.querySelector('#scoreCorrect').innerHTML = scoreBox + correctQuestion.length
    document.querySelector('#scoreIncorrect').innerHTML = inscoreBox + incorrectQuestionArray.length
    card.style.display = 'none'
    correctBtn.style.display = 'none'
    incorrectBtn.style.display = 'none'
    EndButton.style.display = 'none'
    gameOver.style.display = 'inline'
    reviewBtn.style.display = 'inline'
    
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

//Change BackGround 

changeBackGround.addEventListener('click',function(event){
    event.preventDefault()
    for(i = 0; i < 1; i++){
       color.push(changeColor[i])
       changeColor.shift()
       body.style.backgroundColor = color[i]
       color.pop()
       if(changeColor.length === 0){
           changeColor = ['red','orange','yellow','lightblue','green','pink','purple','magenta','lightcoral'];
       }
    }
})
//function playAudio(){
  // audio.play();
//}

 const image = document.querySelector('.front');
 var questionsArray= ['True or false do animals that Lay eggs have belly buttons?','Who was the first President born a US citizen?','Which country privately owns the most tigers world wide?','Do Tomatoes have more genes then humans?','How long does the largest mushroom in the world strech for?','What is the word to describe a flock of crows?']
 var question = []
 var answersArray = ['No of course they dont!','Martin Van Buren!','The U.S.A!','Yes they do! Saucey!','3.5 miles!','A flock of crows is described as a murder!']
 var answer = []
 var hideQ = document.querySelector('#question')
 var showQ = document.querySelector('#question')
 var hideA = document.querySelector('#answer')
 var showA = document.querySelector('#answer')
 var button2 = document.querySelector('.button2')
 var backCap = document.querySelector('.back')
 var gameOver = document.querySelector('#game-over')

image.addEventListener("click",function(evt){
        for(i = 0; i < 1; i++){
            question.push(questionsArray[i])
            if (questionsArray.length === 0 ){
                
                questionsArray = ['True or false do animals that Lay eggs have belly buttons?','Who was the first President born a US citizen?','Which country privately owns the most tigers world wide?','Do Tomatoes have more genes then humans?','How long does the largest mushroom in the world strech for?','What is the word to describe a flock of crows?']
            }else{
            gameOver.style.display = 'none'
            questionsArray.shift()
            }
        }
        showQ.style.display = 'inline'
        image.style.display = 'none'
        backCap.style.display = 'inline'
        question.toString();
        document.querySelector('#question').innerHTML = question; 
        console.log(evt)
    })

backCap.addEventListener("click", function(event){
        event.preventDefault()
        question.pop()
        for(i = 0; i < 1; i++){
            answer.push(answersArray[i])
            if (answersArray.length === 0 ){
                gameOver.style.display = 'inline'
                answersArray = ['No of course they dont!','Martin Van Buren!','The U.S.A!','Yes they do! Saucey!','3.5 miles!','A flock of crows is described as a murder!']
            }else{
                gameOver.style.display = 'none'
            answersArray.shift()
            }
        }
        showA.style.display = 'inline'
        hideQ.style.display = 'none'
        button2.style.display = 'inline'
        answer.toString();
        document.querySelector('#answer').innerHTML = answer; 
    })

button2.addEventListener("click",function(evt){
        answer.pop()
        backCap.style.display = 'none'
        image.style.display = 'inline'
        button2.style.display = 'none'
        hideA.style.display ='none'
        gameOver.style.display = 'none'
    })


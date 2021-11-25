var readline=require("readline-sync")
var username=readline.question("May I have your name? ")
console.log("Welcome, "+username+"!")
var score=0

function quiz(question,answer){
    var userAnswer=readline.question(question)
    if (userAnswer===answer){
        console.log("right answer!")
        score+=1
        console.log("Your current score is ",score)
    }else{
        console.log("Wrong answer")
    }
    console.log("You total score is "+score)
    console.log("---------------------")
}

var questions=[{
    question:"Where was i born? ",
    answer:"Uttar-pradesh"
},{
    question:"Which is my favourite dish? ",
    answer:"Pav-bhaji"
},{
    question:"Who is my favourite cricketer? ",
    answer:"Dhoni"
},{
    question:"Where am I from? ",
    answer:"Mumbai"
}]

var highscore=[{
    name:"Sachin",
    hc:4
}]

for (var i=0;i<questions.length;i+=1){
    var currentQuestion=questions[i]
    quiz(currentQuestion.question,currentQuestion.answer)
}
console.log("You Highest score is ",score + "and current highest score is "+highscore[0].hc)

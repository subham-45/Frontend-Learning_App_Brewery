// Initial Variables

var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var inputs = 0;

// starting the game

var start = false;
document.addEventListener("keydown",function(){
    $("h1").text("Game Started ");
    setTimeout(function(){if(!start){
    nextSequence();
    start = true;
    }},1000);
});

// Sequence 

var randomNumber;
var randomChosenColour;
function nextSequence(){
    inputs=0;
    $("#inputs").css("visibility","visible").text("Number of inputs : " + inputs);
    level++;
    $("h1").text("Level " + level);
    randomNumber = Math.floor(Math.random()*4);
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour); 
}

// Taking the user input for game

var userChosenColour;
 $(".btn").click(function(event){
        inputs++;
        $("#inputs").text("Number of inputs : " + inputs);
        userChosenColour = $(this).attr("id");
        playSound(userChosenColour);
        animatePress(userChosenColour);
        if(userChosenColour===gamePattern[inputs-1]){
            checkAnswer();
        }
        else{
            gameOver();
            startOver();
        }
    }
 );
 
// Checking the answer

function checkAnswer(){ 
        if(inputs===gamePattern.length){
            nextSequence();
        }       
}
// Game Over

function gameOver(){
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press any key to restart");
}

//Restarting the game

function startOver(){
    gamePattern=[];
    level = 0;
    var start = false;
    document.addEventListener("keydown",function(){
        $("h1").text("Game Started ");
        setTimeout(function(){if(!start){
        nextSequence();
        start = true;
        }},1000);
    });
}
// playing the sound
function playSound(name){
    var color = new Audio('sounds/'+ name + '.mp3');
    color.play();
}
// button animations

function animatePress(currentColour){  
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}
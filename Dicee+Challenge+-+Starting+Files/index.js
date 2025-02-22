 var randomNumber1 = Math.random();
 randomNumber1 = Math.floor(1+ randomNumber1*6);
 var imageName1 = "dice"+randomNumber1+".png";
 var randomImagesrc1 = "./images/"+imageName1;
 document.querySelector(".img1").setAttribute("src", randomImagesrc1);

 var randomNumber2 = Math.random();
 randomNumber2 = Math.floor(1+ randomNumber2*6);
 var imageName2 = "dice"+randomNumber2+".png";
 var randomImagesrc2 = "./images/"+imageName2;
 document.querySelector(".img2").setAttribute("src", randomImagesrc2);

function winner(randomNumber1,randomNumber2){
    if(randomNumber1>randomNumber2){
        return "🚩Player 1 wins!";
}
    else if(randomNumber1<randomNumber2){
        return "Player 2 wins!🚩";
    }
    else{
        return "Draw!"
    }
}

document.querySelector("h1").innerHTML= winner(randomNumber1,randomNumber2);

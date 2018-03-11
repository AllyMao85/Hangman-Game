
var totalguess = 12;
var numberguessed=0;
var numberremaining = totalguess-numberguessed;


var singerlist=["Adele","Taylor","Beyonce","Rihanna","Madonna"];
var computerGuess = singerlist[Math.floor(Math.random() * singerlist.length)];
var comGuessLower = computerGuess.toLowerCase();
var rightword =[];
var bingoLetter=0;

var wins=0;
console.log(computerGuess);

for (var i=0;i<computerGuess.length;i++) {
    document.getElementById("wordguessed").innerHTML+='<span class=\"guessformat\">-</span>';
    rightword[i]=comGuessLower.substring(i,i+1);
    // console.log(rightword[i]);
}



//function to reset variables when game is over
function resetfunc() {
    
    numberguessed=0;
    numberremaining = totalguess-numberguessed;
    singerlist=["Adele","Taylor","Beyonce","Rihanna","Madonna"];
    computerGuess = singerlist[Math.floor(Math.random() * singerlist.length)];
    comGuessLower = computerGuess.toLowerCase();
    rightword =[];
    document.getElementById("wordguessed").innerHTML='';
    document.getElementById("letterguessed").innerHTML='';
    bingoLetter=0;
    for (var i=0;i<computerGuess.length;i++) {
        document.getElementById("wordguessed").innerHTML+='<span class=\"guessformat\">-</span>';
        rightword[i]=comGuessLower.substring(i,i+1);
        // console.log(rightword[i]);
    }
}
    var audioElement = document.createElement("audio");
//load singer's song and image when winning the game
function wingame() {
    document.getElementById("pic").innerHTML="<img class=\"singerimg\" src=\"assets/images/"+comGuessLower+".png\" width=\"260px\" alt=\""+comGuessLower+"\">";
    document.getElementById("desc").innerHTML="Guess who is my next favorite singer?";
    // var audioElement = document.createElement("audio");
    //play music when win the game
    switch (singerlist.indexOf(computerGuess)) {
      case 0:
        audioElement.setAttribute("src", "assets/audios/Adele rollinginthedeep.mp3");
        audioElement.play();
        break;
      case 1:
        audioElement.setAttribute("src", "assets/audios/Taylor lovestory.mp3");
        audioElement.play();
        break;
      case 2:
        audioElement.setAttribute("src", "assets/audios/Beyonce ifiwasboy.mp3");
        audioElement.play();
        break;
      case 3:
        audioElement.setAttribute("src", "assets/audios/Rihanna lovethewayyoulie.mp3");
        audioElement.play();
        break;
      case 4:
        audioElement.setAttribute("src", "assets/audios/Madonna masterpiece.mp3");
        audioElement.play();
        break;
      default:
         audioElement.pause();
    }
}

function lostgame() {
    document.getElementById("pic").innerHTML="<img class=\"singerimg\" src=\"assets/images/tw2.png\" width=\"260px\" alt=\"Tangwei picture\">";
    audioElement.pause();
}

document.onkeyup = function(event) {

    var userGuess = event.key;
    console.log(userGuess);


    numberguessed++;    
    var numberremaining = totalguess-numberguessed;
    document.getElementById("remaincount").innerHTML=numberremaining;
    console.log(numberremaining);

var arr=document.getElementsByClassName('guessformat');
var correctletter=0;
for (var x=0;x<computerGuess.length;x++) {
    
    if (userGuess===rightword[x]) {
        // console.log(arr[x]);
        arr[x].innerHTML = userGuess;
        correctletter=correctletter+1;
        bingoLetter=bingoLetter+1;
    }  

}
// console.log(correctletter); user Guess is wrong
    if (correctletter===0) {
        document.getElementById("letterguessed").innerHTML+=' '+userGuess; 
 
}


//win the game
console.log(bingoLetter);

if (bingoLetter===computerGuess.length && numberremaining>=0) {
   wins++;
   document.getElementById("winnumber").innerHTML=' '+wins;
   wingame();
   resetfunc();
   
}
//lost the game
if (numberremaining===0 && bingoLetter < computerGuess.length) {
   lostgame();
   resetfunc();
  
}

 

}    
 




//define wins and loses
//automatically choose any word
//load music and change image if wins
//organize code as object

    




 

x = 0;
y = 0;

screenWidth = 0;
screenHeight = 0;
apple = 0;
speakData = 0;
toNumber = 0;

drawApple = "set";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";
  document.getElementById("status").innerHTML = to_number + "maçãs desenhadas";
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

    to_number = Number(content);
    if(Number.isInteger(to_number));
}
function preload(){
  loadImage(apple.png)
}
function setup() {
  sreen_width = window.innerHeight
 
}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "to number";
}

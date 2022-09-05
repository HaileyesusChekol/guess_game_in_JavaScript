// Gussing game 
let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 5;
let highScore = 0;
document.querySelector(".score").textContent = score;
console.log(secretNumber);
document.querySelector(".btn").addEventListener("click", function () {
  const guessValue = Number(document.querySelector(".inputField").value);

  if (!guessValue || guessValue<1) {
    document.querySelector(".number").textContent = "Invalid Number!";
    document.querySelector('.number').style.color='red'
  } else if (guessValue === secretNumber) {
    document.querySelector(".number").textContent = "Winner!";
    document.querySelector('.number').style.color='green';
    document.querySelector(".highScore").textContent = score;
    document.querySelector('.SecreteNumber').textContent= secretNumber;
    if(score>highScore){
      highScore = score;
      document.querySelector('.highScore').textContent = score;
    }
  }else if(score >= 1){
    if (guessValue > secretNumber) {
      document.querySelector(".number").textContent = "Ooo too high";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector('.number').style.color='#D61C4E'
    } else if (guessValue < secretNumber ) {
      document.querySelector(".number").textContent = "Ooo too low";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector('.number').style.color='#D61C4E'
    }
  }  
   else{
    document.querySelector(".score").textContent = 0;
    document.querySelector(".number").textContent = "Game Over";
    document.querySelector('.number').style.color='red';
    document.querySelector('.highScore').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click' , function(){
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  score = 5;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "Guess . .";
  document.querySelector('.number').style.color='#D61C4E';
  document.querySelector(".highScore").textContent = highScore;
  document.querySelector('.SecreteNumber').textContent= '?';
  document.querySelector('.inputField').value=' ';
})

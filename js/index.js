const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const GuessNumber ={
   max:10,
   attemptsNumber : 0,
   numberDraw(){
      return Math.round(Math.random() * this.max);
   },
   showButtonRestart: function (){
      btnRestart.style.display ='flex';
   },
   clearInput:function(){
      inpultValue.value = "";

   },
   updateAttempt: function(value){
     attempt.innerHTML = value;

   },
   correctAnswear: function(){
     this.showButtonRestart();
     statusTitle.innerHTML ='Parabéns, Você acertou! 😁';
     statusTitle.classList.remove('incorrect-answear');
     statusTitle.classList.add('status-correct');

     result.classList.remove('result-box-default');
     result.classList.add('result-correct-answear');

     this.clearInput();
   },
   incorrectAnswear: function(message){

      statusTitle.innerHTML= message;
      statusTitle.classList.add('incorrect-answear');

      this.clearInput();

   }
   
}

const numberDraw = GuessNumber.numberDraw();


const statusTitle = document.getElementById('status');
const attempt = document.getElementById('attempt');
const inpultValue = document.getElementById('kick')
const result = document.getElementById('result');
const btnRestart = document.getElementById('btn-restart');


function handleSubmit(e){
 e.preventDefault();

 const kick = inpultValue.value;

 if(!kick){
   alert('Digite algum valor!');
   return;
 }

GuessNumber.updateAttempt(++GuessNumber.attemptsNumber);

 if (numberDraw == kick) {
   GuessNumber.correctAnswear();
   
 }else if(numberDraw > kick){
   GuessNumber.incorrectAnswear('O Número é Maior!');

}else if(numberDraw < kick){
   GuessNumber.incorrectAnswear('O Número é Menor!');
}

};

function restartGame(){
   document.location.reload(true);
};


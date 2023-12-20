document.querySelector('.js-start')
  .addEventListener('click',()=>{
    startTimer();
  })

function startTimer(){
  let seconds= 0;
  let minutes= 0;
  clock = setInterval(()=>{
    if (seconds<9 && minutes<10){
      document.querySelector('.js-time')
        .innerHTML =`0${minutes}:0${seconds+=1}` 
    }else if(seconds>=9 && seconds<59 && minutes<10){
      document.querySelector('.js-time')
        .innerHTML =`0${minutes}:${seconds+=1}` 
    }else if(seconds>=59 && minutes<10){
      document.querySelector('.js-time')
        .innerHTML =`0${minutes+=1}:00`
      seconds=0
      //finish 9 minutes
    }else if(seconds<9 && minutes>=10){
      document.querySelector('.js-time')
        .innerHTML =`${minutes}:0${seconds+=1}` 
    }else if(seconds>=9 && seconds<59 && minutes>=10){
      document.querySelector('.js-time')
        .innerHTML =`${minutes}:${seconds+=1}` 
    }else if(seconds>=59 &&minutes>=10 && minutes<59){
      document.querySelector('.js-time')
        .innerHTML =`${minutes+=1}:00`
      seconds=0
      //finish 59 minutes
    }else if(seconds===59 && minutes===59){
      document.querySelector('.js-time')
        .innerHTML =`00:00`
      seconds=0
      minutes=0
      //finish 59 minutes
      clearInterval(clock);
    }
  },1)
}

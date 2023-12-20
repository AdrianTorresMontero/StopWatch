document.querySelector('.js-start')
  .addEventListener('click',()=>{
    startTimer();
    document.querySelector('.js-start')
      .style.visibility = 'hidden';
  })

document.querySelector('.js-stop')
  .addEventListener('click',()=>{
    stopTimer();
  })

document.querySelector('.js-pause')
  .addEventListener('click',()=>{
    pause()
  })


function startTimer(seconds=0,minutes=0){
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
      document.querySelector('.js-start')
        .style.visibility = 'visible';
    }
  },1000)
}


function stopTimer(){
  document.querySelector('.js-time')
        .innerHTML =`00:00`
  clearInterval(clock);
  document.querySelector('.js-start')
      .style.visibility = 'visible';
}

function pause(){
  let status =document.querySelector('.js-pause')

  if(status.innerText === 'Pause'){
    status.innerHTML = 'Continue';
    clearInterval(clock);
  }else{
    status.innerHTML = 'Pause';
    let number= document.querySelector('.js-time').innerText
    let numbers= []
    numbers = number.split(":") 
    let min = Number(numbers[0])
    let sec = Number(numbers[1])
    startTimer(sec,min);
  }
}
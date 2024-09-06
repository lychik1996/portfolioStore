//calculate Date
const calculateTimeRemaining = (elapsedTime:number)=>{
    const remainingSeconds = Math.floor(elapsedTime / 1000);

    const days = Math.floor(remainingSeconds / (24 * 60 * 60));
    const hours = Math.floor((remainingSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };
  export default function timerIntervalFunc(startDate:Date, setEffect:Function){
    const timerInterval = setInterval(() => {   
      
      const elapsedTime = startDate.getTime() - new Date().getTime();
      if (elapsedTime >= 0) {
        const remainingTime = calculateTimeRemaining(elapsedTime);
        setEffect(remainingTime);
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);
    return timerInterval;
  };
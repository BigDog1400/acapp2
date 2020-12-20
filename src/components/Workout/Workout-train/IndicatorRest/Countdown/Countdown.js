import { setIn } from 'formik';
import React,{useState, useEffect} from 'react';

const Countdown = (props) => {
    const {minutes, seconds, stopTimer} = {...props};
    const [countDateTime, setCountDateTime] = useState(
      new Date(new Date().setMinutes(new Date().getMinutes() + minutes)).setSeconds(
        new Date().getSeconds() + seconds
      )
    );
    const [state, setState] = useState({
      minutes: minutes,
      seconds: seconds,
    });

    useEffect(()=>{
        console.log('tick tick')
        const tick= setInterval(()=> updateCountdown(),1000,1000)
        return () => clearInterval(tick) 
    }, [])

    const updateCountdown= ()=>{
        console.log('tick tick calculo')
        if(countDateTime){
            const currenTime= new Date().getTime();
            const difference = countDateTime - currenTime;
            console.log(difference)
            if(difference > 0){
                let minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60),
                  );
                  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setState({minutes: minutes, seconds: seconds})
            }else{
                stopTimer();
            }
        }   
    }
    return (
      <span>
        {state.minutes}:{state.seconds < 9 ? `0${state.seconds}` : state.seconds}
      </span>
    );
}

export default Countdown;

/** Goal time */
const date = '14 aug 2023';

/** HTML tags */
const days_el = document.getElementById('days')
const hours_el = document.getElementById('hours')
const minutes_el = document.getElementById('minutes')
const seconds_el = document.getElementById('seconds')


const counterDown = () => {
    const newDate = new Date(date);
    const currentDate = new Date();
    
    /** Convert to seconds */
    const totalSeconds = ( newDate - currentDate)/1000;
    
    const days = Math.floor(totalSeconds/3600/24)
    const hours = Math.floor(totalSeconds/3600%24)
    const minutes = (Math.floor(totalSeconds/60)%60)
    const seconds = Math.floor(totalSeconds)%60

    days_el.innerHTML = formatTime(days)
    hours_el.innerHTML = formatTime(hours)
    minutes_el.innerHTML = formatTime(minutes)
    seconds_el.innerHTML =  formatTime(seconds)
}

const formatTime =  (time) => {
    return time < 10 ? `0${time}` : time
}

counterDown();
setInterval(counterDown,1000)
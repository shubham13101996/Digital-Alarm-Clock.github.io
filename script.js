const display = document.getElementById("alarm_clock_time");

const alarmList = document.querySelector('#alarmList');
const addAlarm = document.querySelector('.alarm_clock_setAlarm');

// store all the set alarms 
const alarmArray = [];

// upadting time every second 
function setTime(){

    var time = new Date();
    const hour = convertTime(time.getHours());
    const minutes = convertTime(time.getMinutes());
    const seconds = convertTime(time.getSeconds());

    display.innerText=`${hour}:${minutes}:${seconds}`;
}


// set correct format of time 
// means convert single digit to double digit by prepending 0
// '1' to '01'

function convertTime(value){
    if(value<10 && value.length != 2){
        return '0'+ value;
    }
    return value;
}

function showNewAlarm(newAlarm){
    const html =`
    <li class = "alarm_clock_list">        
        <span class="time">${newAlarm}</span>
             
    </li>`
    alarmList.innerHTML += html
};

addAlarm.addEventListener('submit', e=> {
    e.preventDefault();
    // const newAlarm = addAlarm.alarmTime.value;
    let new_h=convertTime(addAlarm.a_hour.value);
    if(new_h === '0'){
        new_h = '00'
    }
    let new_m=convertTime(addAlarm.a_min.value);
    if(new_m === '0'){
        new_m = '00'
    }
    let new_s=convertTime(addAlarm.a_sec.value);
    if(new_s === '0'){
        new_s = '00'
    }
    
    const newAlarm = `${new_h}:${new_m}:${new_s}`

    // add new alarm to list 
    if(isNaN(newAlarm)){
        if(!alarmArray.includes(newAlarm)){
            alarmArray.push(newAlarm);
            console.log(alarmArray);
            console.log(alarmArray.length);
            showNewAlarm(newAlarm);
            addAlarm.reset();
        } else{
            alert(`Alarm ${newAlarm} Already Set.`);
        }
    }else{
        alert('Invalid');
    }
})

setInterval(setTime, 1000);
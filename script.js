const display = document.getElementById("alarm_clock_time");

const alarmList = document.querySelector('#alarmList');
const addAlarm = document.querySelector('.alarm_clock_setAlarm');

// setting audio for alarm
const audio = new Audio("./Batman.mp3");
audio.loop = true;


const alarmTimeout = null;

// store all the set alarms 
const alarmArray = [];

// updating time every second 
function setTime(){

    var time = new Date();
    const hour = convertTime(time.getHours());
    const minutes = convertTime(time.getMinutes());
    const seconds = convertTime(time.getSeconds());
    
    display.innerText=`${hour}:${minutes}:${seconds}`;

    const ringTime = `${hour}:${minutes}:${seconds}`;

    // check if the alarmArray include the ringtime then play the audio 
    if(alarmArray.includes(ringTime)){
        audio.play();
        alert(`Hey! it is ${now}`)
    }
}

// funtion to stop the ringing alarm 
stopAlarm = ()=>{
    audio.pause();
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert("Alarm Stopped");
    }
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

// removing alarm from UI 
alarmList.addEventListener('click', e=> {
    console.log("removing element")
    if(e.target.classList.contains("alarm_clock_deleteBtn")){
        e.target.parentElement.remove();
    }    
})

// add new alarm to the ul list as a new alarm on UI 
function showNewAlarm(newAlarm){
    const html =`
    <li class = "alarm_clock_list">        
        <span class="time">${newAlarm}</span>
        <button class="alarm_clock_deleteBtn" id="delete_button" onclick = "remove(this.value)" value=${newAlarm}>Delete Alarm</button>  
    </li>`
    alarmList.innerHTML += html
};

// eventlistener is set whenever form is submit with required set time 
addAlarm.addEventListener('submit', e=> {
    e.preventDefault();
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

// remove alarm from the array using filter()method when delete button is clicked
remove = (value)=>{
let newList = alarmArray.filter((item)=>{
    return item!=value;
});
alarmArray.length=0;
alarmArray.push.apply(alarmArray,newList);
console.log(newList);
console.log(alarmArray);
}

setInterval(setTime, 1000);
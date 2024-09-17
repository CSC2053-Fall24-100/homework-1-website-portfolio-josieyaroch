let hideScheduleButton = document.getElementById('toggle-schedule');

let scheduleContainer = document.getElementById('schedule-container');

hideScheduleButton.addEventListener('click', toggleSchedule);


function toggleSchedule(){
    const isVisible = scheduleContainer.style.display !== 'none';
    if(isVisible){
        scheduleContainer.style.display = 'none';
        hideScheduleButton.textContent = 'Show Schedule';
    }
    else{
        scheduleContainer.style.display = 'block';
        hideScheduleButton.textContent = 'Hode Schedule';
    }
}
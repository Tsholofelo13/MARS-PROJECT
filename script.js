let meetings = [];

function bookMeeting() {
    const participant = document.getElementById('participant').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const room = document.getElementById('room').value;

    const meeting = {
        participant,
        date,
        time,
        room
    };

    meetings.push(meeting);
    updateScheduleView();
    updatePersonStatus(participant);
    alert('Meeting booked successfully!');
}

function updateScheduleView() {
    const scheduleColumns = document.querySelectorAll('.schedule-column');
    scheduleColumns.forEach(column => {
        const roomName = column.querySelector('h3').textContent;
        const roomMeetings = meetings.filter(m => m.room === roomName);
        
        column.innerHTML = `<h3>${roomName}</h3>`;
        roomMeetings.forEach(meeting => {
            column.innerHTML += `
                <div class="meeting">
                    ${meeting.participant} - ${meeting.date} ${meeting.time}
                </div>
            `;
        });
    });
}

function updatePersonStatus(participant) {
    const personStatuses = document.querySelectorAll('.person-status');
    personStatuses.forEach(status => {
        const name = status.querySelector('div:first-child').textContent;
        if (name === participant) {
            status.querySelector('.status').textContent = 'Booked';
            status.querySelector('.status').className = 'status booked';
        }
    });
}

function generateCalendar() {
    const calendar = document.getElementById('calendar');
    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.classList.add('calendar-day', 'day-name');
        calendar.appendChild(dayElement);
    });

   
    for (let i = 1; i <= daysInMonth; i++) {
        const dateElement = document.createElement('div');
        dateElement.textContent = i;
        dateElement.classList.add('calendar-day');
        calendar.appendChild(dateElement);
    }
}


window.onload = generateCalendar;

const calendar = document.querySelector('.calendar');
const monthText = calendar.querySelector('.month');
const daysContainer = calendar.querySelector('.days');
const prevBtn = calendar.querySelector('.prev');
const nextBtn = calendar.querySelector('.next');

let currentDate = new Date();

renderCalendar(currentDate);

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

function renderCalendar(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;

    monthText.textContent = `${new Intl.DateTimeFormat('default', { month: 'long' }).format(date)} ${year}`;

    let daysHTML = '';

    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        const day = daysInPrevMonth - i;
        daysHTML += `<div class="prev-month">${day}</div>`;
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const day = i;
        const isToday = new Date(year, month, day).toDateString() === new Date().toDateString();
        const isWeekend = new Date(year, month, day).getDay() === 6 || new Date(year, month, day).getDay() === 0;
        daysHTML += `<div class="${isToday ? 'today' : ''} ${isWeekend ? 'weekend' : ''}">${day}</div>`;

    }

    const lastDayOfWeek = new Date(year, month, daysInMonth).getDay() === 0 ? 6 : new Date(year, month, daysInMonth).getDay() - 1;
    for (let i = 1; i <= 6 - lastDayOfWeek; i++)
    {
        const day = i;
        daysHTML += `<div class="next-month">${day}</div>`;
    }

    daysContainer.innerHTML = daysHTML;
}





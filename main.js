  const text = document.querySelector('.text');
  const day = document.querySelector('.current-day');
  const time = document.querySelector('.current-time');
  const daysLeft = document.querySelector('.days-left');
  let timerInterval;

const getTimeRemaining = () => {
  let date = new Date();
  const deadline = new Date(date.getFullYear() + 1, 0, 1);
  const hours = date.getHours();

  let text = '';
  switch (true) {
    case hours <= 12:
      text = 'Доброе утро';
      break;
    case hours <= 18:
      text = 'Добрый день';
      break;
    case hours <= 24:
      text = 'Добрый вечер';
      break;
    default:
      text = 'Доброй ночи';
      break;
  };

  const time = date.toLocaleTimeString('en');
  const dayOfWeek = date.toLocaleDateString('ru-Ru', { weekday: 'long' });
  let dateNow = date.getTime();
  let dateStop = new Date(deadline).getTime();
  let timeRemaining = (dateStop - dateNow) / 1000;
  let days = Math.floor(timeRemaining / 60 / 60 / 24);

  return {
    days,
    time,
    dayOfWeek,
    text,
  };
};

const updateClock = () => {

  let getTime = getTimeRemaining();

  text.textContent = getTime.text;
  day.textContent = `Сегодня: ${getTime.dayOfWeek}`;
  time.textContent = `Текущее время: ${getTime.time}`;
  daysLeft.textContent = `До нового года осталось ${getTime.days} дней`;
};

updateClock();

timerInterval = setInterval(updateClock, 1000);

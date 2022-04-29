setInterval(() => {
  if (([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].includes(new Date().getHours()) && new Date().getMinutes() === 0)) {
    if (window.confirm('Hey! I am Cristiano Ronaldo 7.I have a water reminder for you. Should I proceed?')) {
      window.open('https://raw.githubusercontent.com/TheRakeshPurohit/water-reminder/main/assets/banner.webp');
    }
  }
}, 60000);

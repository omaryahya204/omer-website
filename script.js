// ===== Counter Animation =====
const counters = document.querySelectorAll('.counter');
const speed = 100; // smaller = faster

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 25);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Animate when visible
const section = document.querySelector('.stats');
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animateCounters();
    observer.disconnect();
  }
}, { threshold: 0.5 });

observer.observe(section);
// end 
// start section audio
const playButton = document.getElementById("playButton");
const audio = document.getElementById("audio");
let isPlaying = false;

playButton.addEventListener("click", () => {
  const icon = playButton.querySelector("i");

  if (!isPlaying) {
    audio.play();
    icon.classList.replace("fa-play", "fa-pause");
  } else {
    audio.pause();
    icon.classList.replace("fa-pause", "fa-play");
  }

  isPlaying = !isPlaying;
});
// end section audio
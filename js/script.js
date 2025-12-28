// ===== Counter Animation =====
const counters = document.querySelectorAll('.counter');
const speed = 100;

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

const section = document.querySelector('.stats');
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animateCounters();
    observer.disconnect();
  }
}, { threshold: 0.5 });

observer.observe(section);


// ===== Audio Play Button =====
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

// project slider
var swiperProjects = new Swiper(".mySwiperProjects", {
    
    loop: true,
    autoplay: {
        delay: 3500, 
        disableOnInteraction: false,
    },
    
    pagination: {
        el: ".custom-pagination-container",
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        }
    },
    
    
    slidesPerView: 1,
    spaceBetween: 20, 

    breakpoints: {
        
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }
});



// slider highlihts
var highlightsSwiper = new Swiper(".highlightsSwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".highlights-pagination",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});


// scrollBtn
const scrollTopBtn = document.getElementById("scrollTopBtn");


window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});


scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


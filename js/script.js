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

// section 2

const animatedElements = document.querySelectorAll('.animate');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => sectionObserver.observe(el));



// section3 


const whyChooseElements = document.querySelectorAll('.animate');

const whyChooseObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

whyChooseElements.forEach(el => whyChooseObserver.observe(el));



// === Hero Section Animation ===

// اختار كل عناصر الهيرو اللي عليها الأنيميشن
const heroElements = document.querySelectorAll('.fade-hero');

const heroObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-anim');
        }
    });
}, { threshold: 0.2 });

heroElements.forEach(el => heroObserver.observe(el));


// project section



const animateSections = document.querySelectorAll('.fade-up');


const sectionRevealObserver2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-anim');
        }
    });
}, { threshold: 0.2 });


animateSections.forEach(section => {
    sectionRevealObserver2.observe(section);
});


// clients-section
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-clients");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active-anim");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  fadeElements.forEach((el) => observer.observe(el));
});





// Global fade observer
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active"); 
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-section').forEach((el) => {
  fadeObserver.observe(el);
});













// Fade-up animation global observer
const sectionFadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active"); // عشان لما ترفع الصفحة يختفي تاني
    }
  });
}, { threshold: 0.2 });

// Apply on all sections with fade-section class
document.querySelectorAll(".fade-section").forEach(section => {
  sectionFadeObserver.observe(section);
});


var typed=new Typed(".works",{
    strings:["","Live","Make Websites","Live Some More"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const btn   = document.querySelector('.like-you');
const video = document.getElementById('fireworks');

window.addEventListener('scroll', () => {
  const main = document.querySelector('main');
  const scrollThreshold = 600; // Adjust this value as needed

  if (window.scrollY > scrollThreshold) {
      main.classList.add('fade-out');
  } else {
      main.classList.remove('fade-out');
  }
});

btn.addEventListener('click', () => {
  // first click: show + play; later clicks: replay from start
  video.style.display = 'block';
  video.currentTime   = 0;
  video.play();

  // auto‑hide after 3 s (adjust to your clip length)
  setTimeout(() => video.style.display = 'none', 3000);
});
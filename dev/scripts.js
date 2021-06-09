// NAVBAR
let lastScrollTop = 0;
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
   const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop) {
      navbar.style.top = '-50px';
   } else {
      navbar.style.top = '0';
   }
   lastScrollTop = scrollTop;
});

// PROGRESS BAR
let progressBars = document.querySelectorAll('[data-role="progressbar"');
console.log(progressBars);
for (let progressBar of progressBars) {
   let bar = document.createElement('div');
   bar.classList.add('bar');
   let img = document.createElement('img');
   img.setAttribute('src', progressBar.getAttribute('data-src'));
   bar.appendChild(img);
   let text = document.createTextNode(' ' + progressBar.getAttribute('data-name'));
   bar.appendChild(text);
   progressBar.appendChild(bar);

   let progressBarValue = progressBar.getAttribute('data-value');
   let progress = document.createElement('div');
   progress.classList.add('progress');
   let progressbar = document.createElement('div');
   progressbar.classList.add('progress-bar', 'progress-bar-striped', 'progress-bar-animated');
   progressbar.setAttribute('role', 'progressbar');
   progressbar.setAttribute('aria-valuemin', '0');
   progressbar.setAttribute('aria-valuemax', '100');
   progressbar.setAttribute('aria-valuenow', progressBarValue);
   progressbar.style.width = progressBarValue + '%';
   progressbar.style.backgroundColor = progressBar.getAttribute('data-color');
   progressbar.textContent = progressBarValue + '%';
   progress.appendChild(progressbar);
   progressBar.appendChild(progress);
}

// TYPED
const typed = new Typed('.typed', {
   strings: [
      `Bonjour à toutes et à tous, je me présente, je m'appelle Vincent.`,
      `Lors de mes études, je me suis découvert une passion, celle de coder.
      Après une période sans emploi, je me met à jour en me formant en
      autodidacte aux langages Fullstack tels que CSS, PHP, NodeJS, Javascript
      et plusieurs de ses frameworks : VueJS, ReactJS et Angular.<br>
      De nature curieuse, j'aime comprendre comment fonctionne les choses.`,
   ],
   typeSpeed: 20,
   backSpeed: 5,
});

// COMPTEUR LIVE
let compteur = 0;
$(window).scroll(function () {
   const top = $('.counter').offset().top - window.innerHeight;

   if (compteur == 0 && $(window).scrollTop() > top) {
      $('.counter-value').each(function () {
         let $this = $(this),
            countTo = $this.attr('data-count');
         $({ countNum: $this.text() }).animate(
            { countNum: countTo },
            {
               duration: 10000,
               easing: 'swing',
               step: function () {
                  $this.text(Math.floor(this.countNum));
               },
               complete: function () {
                  $this.text(this.countNum);
               },
            },
         );
      });
      compteur = 1;
   }
});

// AOS
AOS.init();

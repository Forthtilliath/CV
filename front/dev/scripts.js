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

// MAIL
function after_form_submitted(data) {
   if (data.result == 'success') {
      $('form#reused_form').hide();
      $('#success_message').show();
      $('#error_message').hide();
   } else {
      $('#error_message').append('<ul></ul>');

      jQuery.each(data.errors, function (key, val) {
         $('#error_message ul').append('<li>' + key + ':' + val + '</li>');
      });
      $('#success_message').hide();
      $('#error_message').show();

      //reverse the response on the button
      $('button[type="button"]', $form).each(function () {
         $btn = $(this);
         label = $btn.prop('orig_label');
         if (label) {
            $btn.prop('type', 'submit');
            $btn.text(label);
            $btn.prop('orig_label', '');
         }
      });
   } //else
}

$('#reused_form').submit(function (e) {
   e.preventDefault();

   $form = $(this);
   //show some response on the button
   $('button[type="submit"]', $form).each(function () {
      $btn = $(this);
      $btn.prop('type', 'button');
      $btn.prop('orig_label', $btn.text());
      $btn.text('Sending ...');
   });

   $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/mail/send',
      data: $form.serialize(),
      success: after_form_submitted,
      dataType: 'json',
   });
});
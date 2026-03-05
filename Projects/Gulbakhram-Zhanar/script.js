function toggleMenu() {
  var nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      var nav = document.getElementById('nav');
      nav.classList.remove('active');
    });
  });

  var cards = document.querySelectorAll('.service-card');

  if (cards.length > 0) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach(function (card) {
      observer.observe(card);
    });
  }

  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Спасибо! Ваше сообщение отправлено.');
      form.reset();
    });
  }

  var anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        e.preventDefault();
        var target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var allNavLinks = document.querySelectorAll('.nav a');
  allNavLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.style.color = '#e7a6b1';
      link.style.fontWeight = '700';
    }
  });
});
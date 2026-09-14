(function () {
  var toggle = document.getElementById('themeToggle');
  var iconSun = document.getElementById('iconSun');
  var iconMoon = document.getElementById('iconMoon');
  var root = document.documentElement;
  var stored = localStorage.getItem('theme');

  function applyTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      root.setAttribute('data-theme', theme);
    } else {
      root.removeAttribute('data-theme');
    }
    var isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    iconSun.hidden = isDark;
    iconMoon.hidden = !isDark;
  }

  applyTheme(stored);

  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme');
    var isDark = current === 'dark' || (!current && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var next = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
})();

(function () {
  var mascot = document.getElementById('mascot');
  var bubble = document.getElementById('mascotBubble');
  var planet = document.getElementById('planet');
  if (!mascot || !bubble) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FINAL_QUESTION = 'How can we develop robots and safe algorithms to explore new worlds?';

  function showBubble(html, ms) {
    bubble.innerHTML = html;
    bubble.hidden = false;
    if (ms) {
      setTimeout(function () { bubble.hidden = true; }, ms);
    }
  }

  if (reduce) {
    if (planet) planet.classList.add('visible');
    mascot.style.left = '88%';
    mascot.style.bottom = 'calc(100vh - 203px)';
    mascot.classList.add('idle');
    showBubble(FINAL_QUESTION);
    return;
  }

  function walkTo(leftPercent, duration, done) {
    mascot.classList.add('walking');
    mascot.classList.remove('idle');
    mascot.style.left = leftPercent + '%';
    setTimeout(function () {
      mascot.classList.remove('walking');
      if (done) done();
    }, duration);
  }

  function flyToPlanet(done) {
    if (planet) planet.classList.add('visible');
    mascot.classList.add('launching');
    mascot.style.left = '88%';
    mascot.style.bottom = 'calc(100vh - 203px)';
    setTimeout(function () {
      mascot.classList.remove('launching');
      if (done) done();
    }, 2200);
  }

  setTimeout(function () {
    walkTo(20, 1800, function () {
      showBubble('How can we guarantee safety in learning-based methods?', 2800);
      setTimeout(function () {
        walkTo(60, 1800, function () {
          showBubble('How can we use learning and model-based methods together?', 2800);
          setTimeout(function () {
            walkTo(85, 1400, function () {
              mascot.classList.add('idle');
              setTimeout(function () {
                mascot.classList.remove('idle');
                flyToPlanet(function () {
                  mascot.classList.add('idle');
                  showBubble(FINAL_QUESTION, 4000);
                });
              }, 900);
            });
          }, 2800);
        });
      }, 2800);
    });
  }, 500);
})();

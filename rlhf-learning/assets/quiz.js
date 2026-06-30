// Reusable quiz + teach-back helpers for RLHF lessons.
// Markup contract:
//   <div class="quiz" data-answer="2">
//     <p class="q">Question?</p>
//     <ul class="opts">
//       <li><button class="opt">Option A</button></li> ...
//     </ul>
//     <p class="feedback right" data-when="right">Why it's right.</p>
//     <p class="feedback nope" data-when="nope">Nudge toward the right idea.</p>
//   </div>
// data-answer is the 1-based index of the correct option.

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.quiz').forEach(function (quiz) {
    var answer = parseInt(quiz.getAttribute('data-answer'), 10);
    var opts = Array.prototype.slice.call(quiz.querySelectorAll('button.opt'));
    var fbRight = quiz.querySelector('.feedback[data-when="right"]');
    var fbNope = quiz.querySelector('.feedback[data-when="nope"]');

    opts.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        var chosen = i + 1;
        opts.forEach(function (b, j) {
          b.disabled = true;
          if (j + 1 === answer) b.classList.add('correct');
        });
        if (chosen === answer) {
          btn.classList.add('correct');
          if (fbRight) fbRight.classList.add('show');
        } else {
          btn.classList.add('wrong');
          if (fbNope) fbNope.classList.add('show');
          if (fbRight) fbRight.classList.add('show');
        }
      });
    });
  });

  // Teach-back: simple local word counter + save to localStorage so notes persist.
  document.querySelectorAll('.teachback textarea').forEach(function (ta) {
    var key = 'teachback:' + (ta.id || location.pathname);
    var saved = localStorage.getItem(key);
    if (saved) ta.value = saved;
    var counter = document.querySelector('[data-count-for="' + ta.id + '"]');
    function update() {
      localStorage.setItem(key, ta.value);
      if (counter) {
        var words = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
        counter.textContent = words + ' words';
      }
    }
    ta.addEventListener('input', update);
    update();
  });
});

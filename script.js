let xp = Number(localStorage.getItem('ta_xp') || 0);
let streak = 0;

document.getElementById('xp').textContent = xp;

function openLesson(id) {
  document.querySelectorAll('.lesson').forEach(x =>
    x.classList.remove('show')
  );

  document.getElementById(id).classList.add('show');

  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

function check(btn, ok, msg) {
  const lesson = btn.closest('.lesson');
  const fb = lesson.querySelector('.feedback');

  lesson.querySelectorAll('.answer').forEach(b => {
    b.disabled = true;
  });

  fb.style.display = 'block';
  fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
  fb.innerHTML = (ok ? '✅ ' : '❌ ') + msg;

  if (ok) {
    xp += 25;
    streak++;

    localStorage.setItem('ta_xp', xp);

    document.getElementById('xp').textContent = xp;
    document.getElementById('streak').textContent = streak;

    let p = Math.min(100, 8 + xp / 3);

    document.getElementById('fill').style.width = p + '%';
    document.getElementById('pct').textContent =
      Math.round(p) + '%';

  } else {
    streak = 0;
    document.getElementById('streak').textContent = streak;
  }
}
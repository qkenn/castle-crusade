const formEl = document.getElementById('signup-form'),
  pwdEl = document.getElementById('password'),
  cPwdEl = document.getElementById('c_password'),
  PwdErrMsg = document.getElementById('pwd-err-msg'),
  errMsg = 'Passwords do not match';

let isMatch = false;

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!isMatch) {
    window.alert('Passwords does not match');
    return;
  }

  window.alert('Welcome to Castle Crusade');
});

formEl.addEventListener('keyup', function () {
  if (!pwdEl.value && !cPwdEl.value) return;

  pwdEl.value != cPwdEl.value ? (isMatch = false) : (isMatch = true);

  if (!isMatch) {
    cPwdEl.style.border = '2px solid hsl(0, 100%, 60%)';
  } else {
    cPwdEl.style.border = '2px solid hsl(120, 100%, 52%)';
  }

  isMatch ? (PwdErrMsg.textContent = '') : (PwdErrMsg.textContent = errMsg);
});

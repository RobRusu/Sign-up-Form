const pw = document.querySelector('#password');
const confirmpw = document.querySelector('#confirmPw');
const check = document.querySelector('.pwCheck');

function pwCheck (){
  if (pw.value !== confirmpw.value){
    check.textContent = 'Passwords do not match';
  } else {
    check.textContent = '';
  }
}

confirmpw.addEventListener('input', pwCheck)
pw.addEventListener('input', pwCheck)


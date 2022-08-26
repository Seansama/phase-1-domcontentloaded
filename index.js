const p = document.querySelector('p');

function whatFun(){
    p.textContent = 'This is really cool!'
}

document.addEventListener('DOMContentLoaded', whatFun)
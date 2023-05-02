const dbody = document.body;
const q1 = dbody.querySelector('.block1__imgParent');
const q2 = dbody.querySelector('.block1__textareaParent');
const q3 = dbody.querySelector('textarea');
const q4 = dbody.querySelector('.block1__textareaParent > div > span');
const q5 = dbody.querySelector('.block1');
const p1 = q3.getAttribute('maxlength');
q1.addEventListener('click',function (params) {
    q2.classList.toggle('block1__textareaNone')
})
q2.addEventListener('keyup',function (params) {
    q4.innerHTML = p1 - q3.value.length;
})
q2.addEventListener('keydown',function (params) {
    if(params.repeat) {
        q4.innerHTML = p1 - q3.value.length;
    }
})

document.addEventListener('keydown',function (params) {
    if (params.code === 'Escape') {
        q2.classList.add('block1__textareaNone')
    }
})
document.addEventListener('click',function (params) {
    if (!params.target.closest('.block1')) {
        q2.classList.add('block1__textareaNone')
    }
})
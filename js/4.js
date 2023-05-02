const dbody = document.body;
const doc = document.documentElement;
const q1 = dbody.querySelector('.link');
const q2 = dbody.querySelector('.block1');
const q3 = dbody.querySelector('.b1');
const q4 = dbody.querySelector('.b2');
const q5 = dbody.querySelector('.p1');
const q6 = dbody.querySelector('.footer__section1');
q5.style.cssText = `
border:2px solid red
`
let a = 0
q3.addEventListener('click',function (params) {
   q6.scrollIntoView({
    block:"center",
    behavior:"smooth"
   });
   console.log(q6.scrollTop);
})
q4.addEventListener('click',function (params) {
    window.scrollBy({
        left:0,
        top:-300,
        behavior:"smooth"})
    if (window.pageYOffset == 0) {
        console.log(window.pageYOffset); 
    } else {
       console.log(window.pageYOffset - 300); 
    }
})
doc.addEventListener('keydown',function (params) {
    if (params.code == 'KeyG') {
        q6.scrollBy({
            left:0,
            top:20,
            behavior:"smooth"})
    }
    else if(params.code == 'KeyH') {
        q6.scrollBy({
            left:0,
            top:-20,
            behavior:"smooth"})
    }
});
q1.style.border = '1px solid #000';
const q7 = q1.getBoundingClientRect().top; 
const q8 = q1.getBoundingClientRect().top + window.pageYOffset;
console.log(q7);
console.log(q8);

doc.addEventListener('click',function(a) {
    console.log(document.elementsFromPoint(a.clientX,a.clientY));
})
console.log(window.innerWidth - document.documentElement.clientWidth);

setTimeout(window.scrollBy,1000,{
    left:0,
    top:200,
    behavior:"smooth"})

console.log(q1.getBoundingClientRect().x);
console.log(q1.getBoundingClientRect().y);
console.log(q2.getBoundingClientRect());
console.log(q3.getBoundingClientRect());

let dbody = document.body;
/*console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

let html1 = document.body.firstChild;
let html2 = document.body.lastChild;
console.log(html1);
console.log(html2); 
console.log(dbody.childNodes);
console.log(dbody.hasChildNodes());
for (let i of dbody.childNodes) {
    console.log(i);
}*/
const q1 = dbody.querySelector('[data-say-hi]');
console.log(q1);
console.log(q1.dataset.sayHi);

const q2 = dbody.querySelectorAll('.like');
q2.insertAdjacentHTML('beforeend','<li>text</li>');






 
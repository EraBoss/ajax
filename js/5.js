const dbody = document.body;
const p1 = document.forms;
const p2 = document.forms.forma1
const p3 = p2.nameInput;
const p4 = p2.nameTextarea;
const p5 = p2.nameRadio;
const p6 = p2.nameFile;
const p7 = p2.nameSelect;


p2.addEventListener('submit',function(a) {
    if (p3.nextElementSibling) {
        p3.nextElementSibling.remove()
    }  
    if (!(p3.value.includes('@'))) {
        p3.insertAdjacentHTML('afterend','<div style="font-size: 30px; border: 5px solid purple;">Введите корректный Әмейл </div>');
        a.preventDefault();
    };
})

const dbody = document.body;
const q1 = dbody.querySelector('button');

q1.style.cssText = `
border: 3px solid #000;
width: 200px;
height: 100px;
margin: 100px;
border-radius: 30px;
font-size:30px;
background: green;
`;


const qu1 = dbody.querySelector('.first');
const qu2 = dbody.querySelector('.second');
const qu3 = dbody.querySelector('.third');

function f1(event) {
    console.log('block 1 (first)');
};
function f2(event) {
    console.log('block 2 (second)');
    //event.stopPropagation();
};
function f3(event) {
    console.log('block 3 (third)');
    
};

qu1.addEventListener('click',f1,{"capture":true});
qu2.addEventListener('click',f2,{"capture":false});
qu3.addEventListener('click',f3);

function f2(event) {
    console.log('Yeah!');
}

/*const q2 = dbody.querySelectorAll('.child') ;
q2.forEach(function (item) {
    item.addEventListener('click',f2)
});*/
const q4 = document.createElement('div');
q4.innerHTML = '<p>texasdlkhASB IFasodiaSDGGwq</p>';
q4.className = 'para';

const q3 = dbody.querySelector('.child');

q3.style = ' height:200px';

q3.addEventListener('mouseenter',function (a) {
   
        console.log('pereshel');
    
})

q3.addEventListener('mouseleave',function (a) {
    
        console.log('ushel');
})


const q5 = dbody.querySelector('.link');
q5.addEventListener('click',function (a) {
    console.clear()
    a.preventDefault()
})


const vlock = document.createElement('div');
vlock.style.cssText= `
margin:auto;
padding: 50px;
width:300px;
height:300px;
background:green;
`;
vlock.addEventListener('mousemove',function(a) {
    vlock.innerHTML = a.clientX + ' - Po osi X, <br>' + a.clientY + ' - Po osi Y'
})

q5.before(vlock);



const textar = dbody.querySelector('textarea');
const textarMLenght = textar.getAttribute('maxlength');
const textarSpan = dbody.querySelector('.span1')
textar.addEventListener('keyup',function (params) {
    textarSpan.innerHTML = textarMLenght - textar.value.length;
})
textar.addEventListener('keydown',function (params) {
    if (params.repeat) {
        textarSpan.innerHTML = textarMLenght - textar.value.length;
    }
})
setTimeout(console.log,5000,document.readyState)

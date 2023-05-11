const button = document.querySelector('.block1__button');
const title = document.querySelector('.block1__title');
const img = document.querySelector('img');
const block1 = document.querySelector('.block1')

function getCountry(countryName) {
    const request1 = new XMLHttpRequest();
    request1.open('GET','https://restcountries.com/v3.1/name/' + countryName);
    request1.send();
    request1.addEventListener('load',function() {
        block1.insertAdjacentHTML('afterbegin',
        `<div>
        <img class="era" src="${JSON.parse(request1.responseText)[0].coatOfArms.png}" alt="era">
        </div>`)
        console.log(JSON.parse(request1.responseText)[0].borders[0]);
        const request2 = new XMLHttpRequest();
        request2.open('GET','https://restcountries.com/v3.1/alpha/' + JSON.parse(request1.responseText)[0].borders[0]);
        request2.send();
        request2.addEventListener('load',function() {
            console.log(JSON.parse(request2.responseText)[0].name);
            block1.insertAdjacentHTML('afterbegin',
            `<div>
            <img class="era" src="${JSON.parse(request2.responseText)[0].coatOfArms.png}" alt="era">
            </div>`)
        })
    });
}
//getCountry('ua');

let contentContainer = document.querySelector('.block1__content');
let page = 0;
let isLoading = false;

const loadContent = async function() {
    if (!isLoading && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        await getContent();
    }
};

const getContent = async function() {
    try {
        isLoading = true;
        const response = await fetch('../source.html');
        if(response.ok) {
            const html = await response.text();
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const items = doc.querySelectorAll('.item');
            if(page == items.length) {
                window.removeEventListener('scroll', loadContent)
            };
            if(page < items.length) {
                contentContainer.insertAdjacentElement('beforeend',items[page]);
            };
            page++;
        };
        isLoading = false;
    } catch(err) {
        console.log(err);
        let storedSlidersArray = JSON.parse(localStorage.getItem('slidersArray'));
        let div = document.createElement('div');
        storedSlidersArray.forEach(element => {
            div.innerHTML += element;
        });
        let items = div.querySelectorAll('.item');
        if(page == items.length) {
            window.removeEventListener('scroll', loadContent)
        };
        if(page < items.length) {
            contentContainer.insertAdjacentElement('beforeend',items[page]);
        };
        page++;
        isLoading = false;
    }
};

window.addEventListener('scroll',loadContent);








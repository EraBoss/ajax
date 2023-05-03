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
getCountry('ukraine');

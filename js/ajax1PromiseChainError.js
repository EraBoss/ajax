const button = document.querySelector('.block1__button');
const title = document.querySelector('.block1__title');
const img = document.querySelector('img');
const block1 = document.querySelector('.block1')

// XMLHttpRequest
/* const request1 = new XMLHttpRequest();
    request1.open('GET','https://restcountries.com/v3.1/name/' + countryName);
    request1.send();
    request1.addEventListener('load',function() {});*/
/*
const getCountryData = function (countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(function(response) {
        console.log(response);
        if(!response.ok) {
            throw new Error('country not found');
            console.log(era);
        }
        console.log('eraera');
        return response.json()
        
    },)
    .then(function (data) {
        document.querySelector('.block1__img-cont').insertAdjacentHTML('beforeend',
        `<img class="era" src="${data[0].coatOfArms.png}" alt="">`)
    })
    .catch((a) => {
        console.log(a);
        derror(a);
    })
    .finally(() => {
    })
}
button.addEventListener('click',function () {
    getCountryData('ukraine');
})*/
const derror = function (message) {
    document.querySelector('p').innerHTML = 'что то пожло не так ' + message;
}

const getFetchData = function (fetchApi) {
    return fetch(`${fetchApi}`)
    .then((response) => response.json())
    .then((data) => data)
}

const reverseGeocode = function (lat, lon) {
    return getFetchData(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
    .then((data) => data);
};

const getCountryFromCode = function (countryCode) {
    return getFetchData(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    .then((data) => data);
};

const displayCoat = function(countryData) {
    document.querySelector('.block1__img-cont').insertAdjacentHTML('beforeend',
        `<img class="era" src="${countryData[0].coatOfArms.png}" alt="">`);
};
const getCountryCoatFromGeocode = function(lat, lon) {
    reverseGeocode(lat, lon)
    .then((data) =>  {
        if (!data.countryCode) {
            throw new Error('Country not found')
        };
        document.querySelector('.block1__img-cont').insertAdjacentHTML('beforeend',
        `<p> you are in ${data.city}, ${data.countryName} </p>`);
        return getCountryFromCode(data.countryCode);
    })
    .then((data) => {
        displayCoat(data);
        if (!data[0].borders) {
            throw new Error('Country without neighbours')
        };
        return data[0].borders[0]
    })
    .then((data) => getCountryFromCode(data))
    .then((data) => displayCoat(data))
    .catch((err) => {
        console.log(err);
        derror(err)
    })
};
/*
getCountryCoatFromGeocode(35.756,139.256);
getCountryCoatFromGeocode(48.857,2.358);
getCountryCoatFromGeocode(40.708,-74.051);

console.log('start');
setTimeout(console.log,'timer 0s',0)
Promise.resolve('promise').then((data) => {
    console.log(data);
})
console.log('end');
*/

const prom  = function () {
    return  new Promise(function(resolve,reject) {
     if(Math.random() > 0.5) {
        resolve(('win'))
    } else {
        reject(('lose'))
    }
}).then((a => console.log(a)))
.catch((a => console.log(a)));
}

//navigator.geolocation.getCurrentPosition(a => a);
const  wait = function(sec) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('прошло ' + sec + ' секунд');
            resolve()
        }, sec * 1000)
    })
}

const getUserPos = function () { 
    return new Promise(function (resolve,reject) {
        navigator.geolocation.getCurrentPosition(resolve,reject)
    })
}
getUserPos()
.then(data => {
    getCountryCoatFromGeocode(data.coords.latitude,data.coords.longitude)})
.catch(err => console.log(err));

const imgCont = document.querySelector('.block1__img-cont');

const createImgEl = function (ImagePath) {
    return new Promise(function(resolve,reject) {
       const imgEl = document.createElement('img');
       imgEl.classList.add('era');
       imgEl.src = ImagePath
       imgEl.addEventListener('load',function () {
        imgCont.prepend(imgEl);
        resolve(imgEl)
       });
       imgEl.addEventListener('error', function() {
        reject(new Error('Произошла ошибка возможно не правильный путь!'))
       })
    })
}

let currentImage;

createImgEl('../img/genj.jpg')
.then((image) => {
    currentImage = image;
    console.log('first image loaded');
    return wait(2);
})
.then(() => {
    currentImage.style.display = 'none';
    return createImgEl('../img/real.jpg')
})
.then((image) => {
    currentImage = image;
    console.log('second image loaded');
    return wait(2);
})
.then(() => {
    currentImage.style.display = 'none';
})
.catch((err) => console.log(err))


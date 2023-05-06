
const button = document.querySelector('.block1__button');
const title = document.querySelector('.block1__title');
const img = document.querySelector('img');
const block1 = document.querySelector('.block1');
const imgCont = document.querySelector('.block1__img-cont');

const  wait = function(sec) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('прошло ' + sec + ' секунд');
            resolve()
        }, sec * 1000)
    })
}

const derror = function (message) {
    document.querySelector('p').innerHTML = 'что то пожло не так ' + message;
}
 
const getFetchData = async function (fetchApi) {
    try {
       const FetchApiResponse = await fetch(`${fetchApi}`)
       if (!FetchApiResponse.ok) {
        throw new Error("Неправильный запрос, попробуйте еще!")
       }
       return await FetchApiResponse.json(); 
    } catch(err) {
        console.log(err);
    }
    
}

const reverseGeocode = async function (lat, lon) {
    return await getFetchData(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
};

const getCountryFromCode = async function (countryCode) {
    return await getFetchData(`https://restcountries.com/v3.1/alpha/${countryCode}`);
};

const displayCoat = function(countryData) {
    document.querySelector('.block1__img-cont').insertAdjacentHTML('beforeend',
        `<img class="era" src="${countryData[0].coatOfArms.png}" alt="">`);
};

const getUserPos = function () { 
    return new Promise(function (resolve,reject) {
        navigator.geolocation.getCurrentPosition(resolve,reject)
    })
}

const getCountryCoatFromGeocode = async function(lat, lon) {
    try {
        const countryData = await reverseGeocode(lat, lon)
        if (!countryData.countryCode) {
            throw new Error('Country not found')
        };
        document.querySelector('.block1__img-cont').insertAdjacentHTML('beforeend',
        `<p> you are in ${countryData.city}, ${countryData.countryName} </p>`);
        const countryFromCode = await getCountryFromCode(countryData.countryCode);
        displayCoat(countryFromCode);
        if (!countryFromCode[0].borders) {
            throw new Error('Country without neighbours')
        };
        const borderCountryCode =  countryFromCode[0].borders[0];
        const borderCountryData = await getCountryFromCode(borderCountryCode);
        displayCoat(borderCountryData); 
    } catch(err) {
        derror(err)
        //throw err;
    }
};

// getCountryCoatFromGeocode(35.756,139.256).then((data) => console.log(data)).catch((err)=> derror(err));
// const af =  function() {
//     console.log('era1');
//     wait(0).then(() => console.log('era3'))
//     console.log('era2');
// }

// console.log('start');getCountryCoatFromGeocode().then((data) => console.log(data)).catch((err)=> derror(err));
// console.log('end');

let getCapital = async function(countCode1) {
    const country = await getCountryFromCode(countCode1);
    return country[0].capital[0];
};

const createImgEl = function (ImagePath) {
    return new Promise(function(resolve,reject) {
       const imgEl = document.createElement('img');
       imgEl.classList.add('era');
       imgEl.src = ImagePath
       imgEl.addEventListener('load',function () {
        imgCont.append(imgEl);
        resolve(imgEl)
       });
       imgEl.addEventListener('error', function() {
        reject(new Error('Произошла ошибка возможно не правильный путь!'))
       })
    })
}


"use strict";

// createImgEl('../img/genj.jpg')
// .then((image) => {
//     currentImage = image;
//     console.log('first image loaded');
//     return wait(2);
// })
// .then(() => {
//     currentImage.style.display = 'none';
//     return createImgEl('../img/real.jpg')
// })
// .then((image) => {
//     currentImage = image;
//     console.log('second image loaded');
//     return wait(2);
// })
// .then(() => {
//     currentImage.style.display = 'none';
// })
// .catch((err) => console.log(err));

// setTimeout(function() {
//     console.log(currentImage);
// },2000);

const loadAndWait = async function() {
    try {
        let image = await createImgEl('../img/format/400x600.jpg');
        console.log('first image loaded');
        await wait(2)
        image.style.display = 'none';
        image = await createImgEl('../img/format/800x400.jpg');
        console.log('second image loaded');
        await wait(2);
        image.style.display = 'none';
        image = await createImgEl('../img/format/1300x200.jpg');
        console.log('third image loaded');
        await wait(2);
        image.style.display = 'none';
    } catch(err) {
        console.log(err);
    }
};

const arr = new Array('../img/format/400x600.jpg','../img/format/800x400.jpg','../img/format/1300x200.jpg')

const loadAllImages = async function(imagePathsArray) {
    try {
        let images = imagePathsArray.map(async function(item) {
        const resultPr = await createImgEl(item);
        return resultPr
        });
        const imagesResult = await Promise.all(images);
        console.log(imagesResult);
    } catch(err) {
        console.log(err);
    }
    
}
console.log(arr);
loadAllImages(arr)

// loadAndWait()
// (async function () {
//     try {
//         await getCountryCoatFromGeocode(48.857,2.358);
//         const cap = await getCapital('KZ');
//         console.log(cap);
//         const capList = await Promise.all([
//             getCapital('KZ'),
//             getCapital('UKR'),
//             getCapital('USA')
//         ]);
//         console.log(capList);
//     //     await getCountryCoatFromGeocode()
//     //     await getCountryCoatFromGeocode(35.756,139.256);
//     //     await getCountryCoatFromGeocode(40.708,-74.051);
//     //     await getCountryCoatFromGeocode(48.857,2.358);
//     } catch(err) {
//         derror(err)
//     }
// });

// Promise.any([
//     getCapital('KZa'),
//     getCapital('UKR'),
//     getCapital('USA')
// ]).then( data => (console.log(data))).catch(e => console.log(e));


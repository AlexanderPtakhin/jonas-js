'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

// const getCountryData = function(country){

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     const html = `
//       <article class="country">
//               <img class="country__img" src="${data.flags.svg}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//                 <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//               </div>
//             </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;

//   });

// }

// getCountryData('portugal')
// getCountryData('spain')
// getCountryData('brazil')
// getCountryData('germany')

// const renderCountry = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
//               <img class="country__img" src="${data.flags.svg}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//                 <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//               </div>
//             </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   //? AJAX вызыает страну  1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //? Отобразить страну 1
//     renderCountry(data);

//     //? Получить данные о соседней стране(страна 2)
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     console.log(neighbour);
//     //? AJAX вызыает страну  2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('canada');

// setTimeout(() => {
//   console.log('1 секунда назад ');
//   setTimeout(() => {
//     console.log('2 секунда назад ');
//     setTimeout(() => {
//       console.log('3 секунда назад ');
//       setTimeout(() => {
//         console.log('4 секунда назад ');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0])
//     });
//   };
// getCountryData('spain');

// const renderCountry = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
//               <img class="country__img" src="${data.flags.svg}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//                 <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//               </div>
//             </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = `Что то пошло не так`) {
//   return fetch(url).then(response => {
//     console.log(response);
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Страна не найдена (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'sdgsgasdg';

//       if (!neighbour) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Страна не найдена (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Что то пошло не так 💥💥💥 ${err.message}. Попытайся еще `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('spain');
// });
// getCountryData('germany')
// getCountryData('italy')
// getCountryData('vgjcfkcfj');

// const renderCountry = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
//               <img class="country__img" src="${data.flags.svg}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//                 <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//               </div>
//             </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };
// const getJSON = function (url, errorMsg = `Что то пошло не так`) {
//   return fetch(url).then(response => {

//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Страна не найдена')
//     .then(data => {console.log(data[0]);

//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       console.log(neighbour);

//       // const neighbour = 'sdgsgasdg';

//       if (!neighbour) throw new Error('Соседи не найдены')
//       // Country 2
//       return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Страна не найдена');
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Что то пошло не так 💥💥💥 ${err.message}. Попытайся еще `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('japan');
// });
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

// const renderCountry = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
//               <img class="country__img" src="${data.flags.svg}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//                 <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//               </div>
//             </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
//   )
//     .then(response => response.json())
//     .then(data => console.log(`Я нахожусь в ${data.city}, ${data.countryName}`))

//     .catch(err => console.error(`${err.message}💥💥💥`));
// };

// whereAmI(52.508, 13.381);
// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);

// const renderCountry = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
//               <img class="country__img" src="${data.flags.svg}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//                 <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//               </div>
//             </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const whereAmI = function (lat, lng) {
//   const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

//   fetch(url, {
//     headers: {
//       'User-Agent': 'JsCoursePractice/1.0 (your-real-email@example.com)'
//     }
//   })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Проблема с геолокацией (${response.status}) 🪥`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);

//       const address = data.address;
//       const country = address.country;

//       const city =
//         address.city ||
//         address.town ||
//         address.village ||
//         address.hamlet ||
//         address.municipality ||
//         address.city_district ||
//         'Unknown location';

//       console.log(`Я нахожусь в ${city}, ${country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Страна не найдена (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥💥💥`));
// };
// whereAmI(36.51543, -4.88583)
// whereAmI(19.037, 2.873);
// whereAmI(-33.933, 18.474);

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolve promise 1').then(res => console.log(res));
// Promise.resolve('Resolve 2').then(res => {
//   for (let i = 0; i < 10000; i++)
//   console.log(res);
// });
// console.log('test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Розыгрыш начался 🔮');

//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('Вы выиграли 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (seconds) {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(1)
//   .then(() => {
//     console.log('I waited for 1 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 3 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 4 seconds'));

// Promise.resolve('abc').then(res => console.log(res));
// Promise.reject(new Error('Problem!')).catch(res => console.error(res));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err),
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos.coords));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
//       return fetch(url, {
//         headers: {
//           'User-Agent': 'JsCoursePractice/1.0 (your-real-email@example.com)',
//         },
//       });
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Проблема с геолокацией (${response.status}) 🪥`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);

//       const address = data.address;
//       const country = address.country;

//       const city =
//         address.city ||
//         address.town ||
//         address.village ||
//         address.hamlet ||
//         address.municipality ||
//         address.city_district ||
//         'Unknown location';

//       console.log(`Я нахожусь в ${city}, ${country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Страна не найдена (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥💥💥`));
// };
// const renderCountry = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
//               <img class="country__img" src="${data.flags.svg}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//                 <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//               </div>
//             </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// btn.addEventListener('click', whereAmI);

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

let currentImg;
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEL = document.createElement('img');
    imgEL.src = imgPath;
    imgEL.addEventListener('load', () => {
      document.querySelector('.images').appendChild(imgEL);
      resolve(imgEL);
    });
    imgEL.addEventListener('error', () => {
      reject(new Error('Изображение не найдено 💩'));
    });
  });
};

// createImage('img/img-1.jpg').then(response => console.log('Изображение загружено', response)
// ).catch(err => console.error(err.message))

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Картинка 1 загружена');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Картинка 2 загружена');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.log(`💥 ${err.message}`));

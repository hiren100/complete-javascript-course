'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


/* const countriesData = function(country){

const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
request.send()



request.addEventListener('load',function(){
  //console.log(this.responseText)

  const data = JSON.parse(this.responseText)
  console.log(data[0])
  const html = `<article class="country">
  <img class="country__img" src="${data[0].flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data[0].name.common}</h3>
    <h4 class="country__region">${data[0].region}</h4>
    <p class="country__row"><span>👫</span>${(data[0].population / 1000000).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️ </span>${data[0].languages.por}</p>
    <p class="country__row"><span>💰</span>${data[0].currencies.EUR.name}</p>
  </div>
</article>`

countriesContainer.insertAdjacentHTML('beforeend', html);
countriesContainer.style.opacity = 1;

//console.log(data[1])


// const mapdata = data.map(m => m.maps)

// console.log(mapdata[1].googleMaps)

})

}

countriesData('Portugal') */


// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};


const renderCountry = function (data, className = '') {

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};




// const getCountryData = function(country){
//   fetch(`https://restcountries.com/v2/name/${country}`)
//   .then(function(response){
//     if(!response.ok){
//       throw new Error(`Country not found (${response.status})`) 
//     }
//     return response.json()
//   })
//   .then(function(data){
//     renderCountry(data[0])
//     const neighbour = data[0].borders[0]
//     if(!neighbour) return;

//     return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//   })
//   .then(function(response){
//     if(!response.ok){
//       throw new Error(`Country not found (${response.status})`) 
//     }
//     return response.json()
//   })
//   .then(function(data){
//     renderCountry(data, 'neighbour')
//   })
//   .catch(err => {
//     console.error(`${err} 💥💥💥`);
//     renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//   })
//   .finally(() => {
//     countriesContainer.style.opacity = 1;
//   });
// }

// getCountryData('USA')



//challenge 

/* const whereAmI = function(lat, lng){
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  .then(function(response){
    if(!response.ok){
      throw new Error(`Problem with geocoding (${response.status})`) 
    }
    return response.json()
  })
  .then(function(data){
    //console.log(data)
    console.log(`You are in ${data.city}, ${data.country}`);
    return fetch(`https://restcountries.com/v2/name/${data.country}`);
  })
  .then(res => {
    if (!res.ok) throw new Error(`Country not found (${res.status})`);

    return res.json();
  })
  .then(data => {
    console.log(data[0])
    renderCountry(data[0])
  })
  .catch(err => {
    console.error(`${err.message} 💥💥💥`);
  })
}

whereAmI(52.508, 13.381); */



const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
    getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {

     // console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[1]))
    .catch(err => console.error(`${err.message} 💥`));
};


whereAmI()


const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};


const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data[0])
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');
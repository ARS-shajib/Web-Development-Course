const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

loadCountries();

const displayCountries = countries => {
    // for(const country of countries){
    //     console.log(country);
    // }

    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country.name.common);
        const div = document.createElement('div');
        div.classList.add('country');

        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.name.official}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Deatils</button>
        `

        // const h3 = document.createElement('h3');
        // h3.innerHTML = country.name.common;
        // const p = document.createElement('p');
        // p.innerHTML = country.name.official;
        // div.appendChild(h3);
        // div.appendChild(p);
        countriesDiv.appendChild(div);
    })
}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]));
}

const displayCountryDetails = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h5>${country.name.official}</h5>
    <p>population: ${country.population}</p>
    <img width ="200px" src="${country.flags.svg}">
    `
}
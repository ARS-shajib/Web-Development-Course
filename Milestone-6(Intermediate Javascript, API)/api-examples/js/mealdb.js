const searchButton = document.getElementById("button-search");
const searchInput = document.getElementById("search-field");

searchInput.addEventListener("keypress", function (event) {
    // event.preventDefault();
    if (event.key === 'Enter')
        searchButton.click();
});

// Spinner...
const toggleSpineer = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

// Result...
const toggleResult = displayStyle => {
    document.getElementById('search-result').style.display = displayStyle;
}


const searchFood = () => {
    toggleSpineer('block');
    toggleResult('none');
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText)
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    // clear previous search result
    searchResult.textContent = ``;
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
    toggleSpineer('none');
    toggleResult('grid');
}
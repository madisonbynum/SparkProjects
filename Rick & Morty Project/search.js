// let state = {
//     id: '',
//     name: '',
//     status: '',
//     species: '',
//     gender: '',
//     origin: '',
//     image: '',
// };


let searchApiUrl = function () {

    const searchValue = document.getElementById('search-input').value;
    
    let apiUrl= (`https://rickandmortyapi.com/api/character/?name=${searchValue}`);

    return apiUrl;
}

let getCharacterUsingAsync = async function(){

    const apiUrl = searchApiUrl();

    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        searchResult(data.results[0]);

    } catch (err) {
        console.log('Error occured');
        console.error(err.stack);
        let error = document.getElementById('search-result-section');
        error.innerHTML = "<h4> Cannot Find Character </h4>";
    }
}

let searchResult = function (results) {
    const state = {
        id: results.id,
        name: results.name,
        status: results.status,
        species: results.species,
        gender: results.gender,
        origin: results.origin,
        image: results.image,
    };

    let characterSheet = document.getElementById('search-result-section');
    characterSheet.innerHTML = `
    
    <section class="block">

    <div id="" class="character-img-container">
            <img class= "block-img" src="${state.image}" alt="Rick and Morty Character">
    </div>
    <div class="character-stat-container">
            <dl class="text-container">
                     <dt>Character Name: </dt><dd id="character-name1">${state.name}</dd>
                    <br>
                    <br>
                    <dt>ID: </dt>
                    <dd id="character-id1">${state.id}</dd>
                    <br>
                    <br>
                    <dt>Status: </dt>
                    <dd id="character-status1">${state.status}</dd>
                    <br>
                    <br>
                    <dt>Species: </dt>
                    <dd id="character-species1">${state.species}</dd>
                    <br>
                    <br>
                    <dt>Gender: </dt>
                    <dd id="character-gender1">${state.gender}</dd>
                    <br>
                    <br>
                    <dt>Origin: </dt>
                    <dd id="character-origin1">${state.origin}</dd>
            </dl>
    </div>
</section>  `;
}





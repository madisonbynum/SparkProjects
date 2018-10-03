
//SearchApiUrl is my function for using the value from inputed from
//search-input and appending is the end of my Api Url using temporate
//literals
let searchApiUrl = function () {

    //gets the value from the input submitted
    const searchValue = document.getElementById('search-input').value;
    
    //Api requested using the filter /?name=
    let apiUrl= (`https://rickandmortyapi.com/api/character/?name=${searchValue}`);

    //returns the apiUrl outside the searchApiUrl
    return apiUrl;
}

    //This is my async function for the fetch call to the Api
let getCharacterUsingAsync = async function(){

    //declares apiUrl inside this function
    //Also calls for the function searchApiUrl
    const apiUrl = searchApiUrl();

    try{
        //fetching data with the api Url generated with searchApiUrl
        const response = await fetch(apiUrl);
        //awaiting the api data and storing the json request in js variable data
        const data = await response.json();

        //calls function searchResult
        //searchResult uses the data from the array
        searchResult(data.results[0]);

        //used in case of an error
        //very possible due to the fact that my search input will not 
        //pull characters from misspelled input
        //will not pull characters that do not exist
    } catch (err) {
        console.log('Error occured');
        console.error(err.stack);
        let error = document.getElementById('search-result-section');
        //This message below shows in search-result-section when
        //a character cannot be found using the name filter
        error.innerHTML = "<h4> Cannot Find Character </h4>";
    }
}

//called in getCharacterUsingAsync
//stores response from api in an array inside results
let searchResult = function (results) {
    //state stores information from array into 7 different fields
    const state = {
        id: results.id,
        name: results.name,
        status: results.status,
        species: results.species,
        gender: results.gender,
        origin: results.origin,
        image: results.image,
    };

    //CharacterSheet places the temporate literal HTML into the div with the
    //ID search-result-section
    //The block below is only created when a search is made.
    //Each block replaces the previous block with every search
    //temporate literals display information from state into character card
    let characterSheet = document.getElementById('search-result-section');
    characterSheet.innerHTML = 
    //I used innerHTML instead of create element because it was easier, but mitch let
    //me know that this method is actually a security risk and it's not often used.
    //Next time, I will use create element
    //This character block is the same from randomizer html page
    `
    
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





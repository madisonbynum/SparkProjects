//variable state, states what information
// I will get from the api
let state = {
    id: '',
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: '',
};


//This is my random page generator function
//I realize now that this is unnessesary because I can use
// .value and use a temperate literal to append the value
// to the end of the apiURl, but I didn't know how to do that
//when I made my randomizer
let randApiUrlPage = function () {
    //this is my random page expression. It generates a random number
    //between 1 and 25.
    switch (Math.ceil(Math.random() * 25)){

        //default case leads to a character on page 1
        //case 2-25 lands on the corresponding page.
        //ex 2 = page 2 ...
        case 2: apiUrl= ('https://rickandmortyapi.com/api/character/?page=2');
        return apiUrl;
        case 3: apiUrl= ('https://rickandmortyapi.com/api/character/?page=3');
        return apiUrl;
        case 4: apiUrl= ('https://rickandmortyapi.com/api/character/?page=4');
        return apiUrl;
        case 5: apiUrl= ('https://rickandmortyapi.com/api/character/?page=5');
        return apiUrl;
        case 6: apiUrl= ('https://rickandmortyapi.com/api/character/?page=6');
        return apiUrl;
        case 7: apiUrl= ('https://rickandmortyapi.com/api/character/?page=7');
        return apiUrl;
        case 8: apiUrl= ('https://rickandmortyapi.com/api/character/?page=8');
        return apiUrl;
        case 9: apiUrl= ('https://rickandmortyapi.com/api/character/?page=9');
        return apiUrl;
        case 10: apiUrl= ('https://rickandmortyapi.com/api/character/?page=10');
        return apiUrl;
        case 11: apiUrl= ('https://rickandmortyapi.com/api/character/?page=11');
        return apiUrl;
        case 12: apiUrl= ('https://rickandmortyapi.com/api/character/?page=12');
        return apiUrl;
        case 13: apiUrl= ('https://rickandmortyapi.com/api/character/?page=13');
        return apiUrl;
        case 14: apiUrl= ('https://rickandmortyapi.com/api/character/?page=14');
        return apiUrl;
        case 15: apiUrl= ('https://rickandmortyapi.com/api/character/?page=15');
        return apiUrl;
        case 16: apiUrl= ('https://rickandmortyapi.com/api/character/?page=16');
        return apiUrl;
        case 17: apiUrl= ('https://rickandmortyapi.com/api/character/?page=17');
        return apiUrl;
        case 18: apiUrl= ('https://rickandmortyapi.com/api/character/?page=18');
        return apiUrl;
        case 19: apiUrl= ('https://rickandmortyapi.com/api/character/?page=19');
        return apiUrl;
        case 20: apiUrl= ('https://rickandmortyapi.com/api/character/?page=20');
        return apiUrl;
        case 21: apiUrl= ('https://rickandmortyapi.com/api/character/?page=21');
        return apiUrl;
        case 22: apiUrl= ('https://rickandmortyapi.com/api/character/?page=22');
        return apiUrl;
        case 23: apiUrl= ('https://rickandmortyapi.com/api/character/?page=23');
        return apiUrl;
        case 24: apiUrl= ('https://rickandmortyapi.com/api/character/?page=24');
        return apiUrl;
        case 25: apiUrl= ('https://rickandmortyapi.com/api/character/?page=25');
        return apiUrl;
        default: apiUrl= ('https://rickandmortyapi.com/api/character/?page=1');
        return apiUrl;
        
    }
}

//This is my async function that calls the api using fetch
//This api call only calls one random character to load
//into my character-stat-card 1 on top left of the html page.
let getCharacterUsingAsync1 = async function(){
    
    //Call of the random page
    randApiUrlPage();

    //try/catch for the api Url
    try{
        //fetching data with the api Url generated with randApiUrlPage
        const response = await fetch(apiUrl);
        //awaiting the api data and storing the json request in js variable data
        const data = await response.json();
        // the data from json is storred in an array
        //index uses a formula to choose a random character from the array
        //organized by id
        let index = Math.floor(Math.random()*data.results.length);

        //some characters are not appropriate for the workplace so I've filtered these ID's
        //its about 21 different ids
        const excludeArray = [98, 99, 140, 151, 153, 157, 192, 238, 244, 247, 271, 275, 309, 323, 342, 436, 459, 30, 41, 55, 97];
        //My while loop to continue to choose a random ID until
        //a workplace approved ID is chosen
        while (excludeArray.includes(data.results[index].id)){
                index = Math.floor(Math.random()*data.results.length);
                console.log(index);
            }

        //after the loop, the character is stored in the state const from line 1
        state = data.results[index];
        //the state is used in updateCard1 function
        updateCard1();

        //in case there is an error
    } catch (err) {
        console.log('Error occured');
        console.error(err.stack);
    }
}

//This function uses getCharacterUsingAsync1 to update my first character
//card in the upper left of the html page
//1 in the id denotes the 1st character card
let updateCard1 = function() {

    //all of these individual statements connects the js variable
    //to the ID in the HTML document
    const id = document.getElementById('character-id1');
    const name = document.getElementById('character-name1');
    const status = document.getElementById('character-status1');
    const species = document.getElementById('character-species1');
    const gender = document.getElementById('character-gender1');
    const origin = document.getElementById('character-origin1');
    const img = document.querySelector('#character-img1>img');

    //each line changes the inner text of the ID's from above into
    //the data from the api
    id.innerText = state.id;
    name.innerText = state.name;
    status.innerText = state.status;
    species.innerText = state.species;
    gender.innerText = state.gender;
    origin.innerText = state.origin.name;
    img.src = state.image;
}

//This is my async function that calls the api using fetch
//This api call only calls one random character to load
//into my character-stat-card 2 on top right of the html page.
let getCharacterUsingAsync2 = async function(){

    //Call of the random page
    randApiUrlPage();

    //try/catch for the api Url
    try{
        //fetching data with the api Url generated with randApiUrlPage
        const response = await fetch(apiUrl);
        //awaiting the api data and storing the json request in js variable data
        const data = await response.json();
         // the data from json is storred in an array
        //index uses a formula to choose a random character from the array
        //organized by id
        let index = Math.floor(Math.random()*data.results.length);

         //some characters are not appropriate for the workplace so I've filtered these ID's
        //its about 21 different ids
        const excludeArray = [98, 99, 140, 151, 153, 157, 192, 238, 244, 247, 271, 275, 309, 323, 342, 436, 459, 30, 41, 55, 97];
         //My while loop to continue to choose a random ID until
        //a workplace approved ID is chosen
        while (excludeArray.includes(data.results[index].id)){
            index = Math.floor(Math.random()*data.results.length);
            console.log(index);
        }

        //after the loop, the character is stored in the state const from line 1
        state = data.results[index];
        //the state is used in updateCard2 function
        updateCard2();

         //in case there is an error
    } catch (err) {
        console.log('Error occured');
        console.error(err.stack);
    }
}

//This function uses getCharacterUsingAsync2 to update my second character
//card in the upper right of the html page
//2 in the id denotes the 2nd character card
let updateCard2 = function() {
    console.log(state);

    //all of these individual statements connects the js variable
    //to the ID in the HTML document
    const id = document.getElementById('character-id2');
    const name = document.getElementById('character-name2');
    const status = document.getElementById('character-status2');
    const species = document.getElementById('character-species2');
    const gender = document.getElementById('character-gender2');
    const origin = document.getElementById('character-origin2');
    const img = document.querySelector('#character-img2>img');

    //each line changes the inner text of the ID's from above into
    //the data from the api
    id.innerText = state.id;
    name.innerText = state.name;
    status.innerText = state.status;
    species.innerText = state.species;
    gender.innerText = state.gender;
    origin.innerText = state.origin.name;
    img.src = state.image;
}

//This is my async function that calls the api using fetch
//This api call only calls one random character to load
//into my character-stat-card 1 on bottom left of the html page.
let getCharacterUsingAsync3 = async function(){

    //Call of the random page
    randApiUrlPage();

    //try/catch for the api Url
    try{
        //fetching data with the api Url generated with randApiUrlPage
        const response = await fetch(apiUrl);
        //awaiting the api data and storing the json request in js variable data
        const data = await response.json();
         // the data from json is storred in an array
        //index uses a formula to choose a random character from the array
        //organized by id
        let index = Math.floor(Math.random()*data.results.length);

         //some characters are not appropriate for the workplace so I've filtered these ID's
        //its about 21 different ids
        const excludeArray = [98, 99, 140, 151, 153, 157, 192, 238, 244, 247, 271, 275, 309, 323, 342, 436, 459, 30, 41, 55, 97];
         //My while loop to continue to choose a random ID until
        //a workplace approved ID is chosen
        while (excludeArray.includes(data.results[index].id)){
            index = Math.floor(Math.random()*data.results.length);
            console.log(index);
        }

        //after the loop, the character is stored in the state const from line 1
        state = data.results[index];
        //the state is used in updateCard3 function
        updateCard3();

        //in case there is an error
    } catch (err) {
        console.log('Error occured');
        console.error(err.stack);
    }
}

//This function uses getCharacterUsingAsync3 to update my first character
//card in the bottom left of the html page
//3 in the id denotes the 3rd character card
let updateCard3 = function() {
    console.log(state);

    //all of these individual statements connects the js variable
    //to the ID in the HTML document
    const id = document.getElementById('character-id3');
    const name = document.getElementById('character-name3');
    const status = document.getElementById('character-status3');
    const species = document.getElementById('character-species3');
    const gender = document.getElementById('character-gender3');
    const origin = document.getElementById('character-origin3');
    const img = document.querySelector('#character-img3>img');

    //each line changes the inner text of the ID's from above into
    //the data from the api
    id.innerText = state.id;
    name.innerText = state.name;
    status.innerText = state.status;
    species.innerText = state.species;
    gender.innerText = state.gender;
    origin.innerText = state.origin.name;
    img.src = state.image;
}

//This is my async function that calls the api using fetch
//This api call only calls one random character to load
//into my character-stat-card 1 on bottom right of the html page.
let getCharacterUsingAsync4 = async function(){

    //Call of the random page
    randApiUrlPage();

    //try/catch for the api Url
    try{
        //fetching data with the api Url generated with randApiUrlPage
        const response = await fetch(apiUrl);
        //awaiting the api data and storing the json request in js variable data
        const data = await response.json();
         // the data from json is storred in an array
        //index uses a formula to choose a random character from the array
        //organized by id
        let index = Math.floor(Math.random()*data.results.length);

         //some characters are not appropriate for the workplace so I've filtered these ID's
        //its about 21 different ids
        const excludeArray = [98, 99, 140, 151, 153, 157, 192, 238, 244, 247, 271, 275, 309, 323, 342, 436, 459, 30, 41, 55, 97];
         //My while loop to continue to choose a random ID until
        //a workplace approved ID is chosen
        while (excludeArray.includes(data.results[index].id)){
            index = Math.floor(Math.random()*data.results.length);
            console.log(index);
        }

        //after the loop, the character is stored in the state const from line 1
        state = data.results[index];
        //the state is used in updateCard4 function
        updateCard4();

        //in case there is an error
    } catch (err) {
        console.log('Error occured');
        console.error(err.stack);
    }
}

//This function uses getCharacterUsingAsync4 to update my first character
//card in the bottom right of the html page
//4 in the id denotes the 4th character card
let updateCard4 = function() {
    console.log(state);

    //all of these individual statements connects the js variable
    //to the ID in the HTML document
    const id = document.getElementById('character-id4');
    const name = document.getElementById('character-name4');
    const status = document.getElementById('character-status4');
    const species = document.getElementById('character-species4');
    const gender = document.getElementById('character-gender4');
    const origin = document.getElementById('character-origin4');
    const img = document.querySelector('#character-img4>img');

    //each line changes the inner text of the ID's from above into
    //the data from the api
    id.innerText = state.id;
    name.innerText = state.name;
    status.innerText = state.status;
    species.innerText = state.species;
    gender.innerText = state.gender;
    origin.innerText = state.origin.name;
    img.src = state.image;
}

//Each of line between 352 and 360 adds an event listener 
//in the HTML next to the button with the ID more-characters
document.getElementById('more-characters')
        .addEventListener('click', getCharacterUsingAsync1);
document.getElementById('more-characters')
        .addEventListener('click', getCharacterUsingAsync2);
document.getElementById('more-characters')
        .addEventListener('click', getCharacterUsingAsync3);
document.getElementById('more-characters')
        .addEventListener('click', getCharacterUsingAsync4);

//calls the function getCharacterUsingAsync for all of the cards
getCharacterUsingAsync1();
getCharacterUsingAsync2();
getCharacterUsingAsync3();
getCharacterUsingAsync4();


let state = {
    id: '',
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: '',
};

let randApiUrlPage = function () {
    switch (Math.ceil(Math.random() * 25)){

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

let getCharacterUsingAsync1 = async function(){
    randApiUrlPage();

    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        let index = Math.floor(Math.random()*data.results.length);
        const excludeArray = [98, 99, 140, 151, 153, 157, 192, 238, 244, 247, 271, 275, 309, 323, 342, 436, 459, 30, 41, 55, 97];
        while (excludeArray.includes(data.results[index].id)){
                index = Math.floor(Math.random()*data.results.length);
                console.log(index);
            }
        state = data.results[index];
        updateCard1();
    } catch (err) {
        console.log('Error occured');
        console.error(err.stack);
    }
}

let updateCard1 = function() {

    const id = document.getElementById('character-id1');
    const name = document.getElementById('character-name1');
    const status = document.getElementById('character-status1');
    const species = document.getElementById('character-species1');
    const gender = document.getElementById('character-gender1');
    const origin = document.getElementById('character-origin1');
    const img = document.querySelector('#character-img1>img');

    id.innerText = state.id;
    name.innerText = state.name;
    status.innerText = state.status;
    species.innerText = state.species;
    gender.innerText = state.gender;
    origin.innerText = state.origin.name;
    img.src = state.image;
}

let getCharacterUsingAsync2 = async function(){
    randApiUrlPage();
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        let index = Math.floor(Math.random()*data.results.length);
        const excludeArray = [98, 99, 140, 151, 153, 157, 192, 238, 244, 247, 271, 275, 309, 323, 342, 436, 459, 30, 41, 55, 97];
        while (excludeArray.includes(data.results[index].id)){
            index = Math.floor(Math.random()*data.results.length);
            console.log(index);
        }
        state = data.results[index];
        updateCard2();
    } catch (err) {
        console.log('Error occured');
        console.error(err.stack);
    }
}

let updateCard2 = function() {
    console.log(state);

    const id = document.getElementById('character-id2');
    const name = document.getElementById('character-name2');
    const status = document.getElementById('character-status2');
    const species = document.getElementById('character-species2');
    const gender = document.getElementById('character-gender2');
    const origin = document.getElementById('character-origin2');
    const img = document.querySelector('#character-img2>img');

    id.innerText = state.id;
    name.innerText = state.name;
    status.innerText = state.status;
    species.innerText = state.species;
    gender.innerText = state.gender;
    origin.innerText = state.origin.name;
    img.src = state.image;
}

let getCharacterUsingAsync3 = async function(){
    randApiUrlPage();
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        let index = Math.floor(Math.random()*data.results.length);
        const excludeArray = [98, 99, 140, 151, 153, 157, 192, 238, 244, 247, 271, 275, 309, 323, 342, 436, 459, 30, 41, 55, 97];
        while (excludeArray.includes(data.results[index].id)){
            index = Math.floor(Math.random()*data.results.length);
            console.log(index);
        }
        state = data.results[index];
        updateCard3();
    } catch (err) {
        console.log('Error occured');
        console.error(err.stack);
    }
}

let updateCard3 = function() {
    console.log(state);

    const id = document.getElementById('character-id3');
    const name = document.getElementById('character-name3');
    const status = document.getElementById('character-status3');
    const species = document.getElementById('character-species3');
    const gender = document.getElementById('character-gender3');
    const origin = document.getElementById('character-origin3');
    const img = document.querySelector('#character-img3>img');

    id.innerText = state.id;
    name.innerText = state.name;
    status.innerText = state.status;
    species.innerText = state.species;
    gender.innerText = state.gender;
    origin.innerText = state.origin.name;
    img.src = state.image;
}

let getCharacterUsingAsync4 = async function(){
    randApiUrlPage();
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        let index = Math.floor(Math.random()*data.results.length);
        const excludeArray = [98, 99, 140, 151, 153, 157, 192, 238, 244, 247, 271, 275, 309, 323, 342, 436, 459, 30, 41, 55, 97];
        while (excludeArray.includes(data.results[index].id)){
            index = Math.floor(Math.random()*data.results.length);
            console.log(index);
        }
        state = data.results[index];
        updateCard4();
    } catch (err) {
        console.log('Error occured');
        console.error(err.stack);
    }
}

let updateCard4 = function() {
    console.log(state);

    const id = document.getElementById('character-id4');
    const name = document.getElementById('character-name4');
    const status = document.getElementById('character-status4');
    const species = document.getElementById('character-species4');
    const gender = document.getElementById('character-gender4');
    const origin = document.getElementById('character-origin4');
    const img = document.querySelector('#character-img4>img');

    id.innerText = state.id;
    name.innerText = state.name;
    status.innerText = state.status;
    species.innerText = state.species;
    gender.innerText = state.gender;
    origin.innerText = state.origin.name;
    img.src = state.image;
}

document.getElementById('more-characters')
        .addEventListener('click', getCharacterUsingAsync1);
document.getElementById('more-characters')
        .addEventListener('click', getCharacterUsingAsync2);
document.getElementById('more-characters')
        .addEventListener('click', getCharacterUsingAsync3);
document.getElementById('more-characters')
        .addEventListener('click', getCharacterUsingAsync4);


getCharacterUsingAsync1();
getCharacterUsingAsync2();
getCharacterUsingAsync3();
getCharacterUsingAsync4();


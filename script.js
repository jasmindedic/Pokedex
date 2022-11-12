let currentPokemon;
let pokemonList = [];
x = 151;
y = 0;

// Function to toggle hamburger menu
function toggleHamburger() {
    // Variables for hamburger menu
    let headline = document.querySelector(".headline");
    let searchBar = document.querySelector(".searchBar");
    let pokemonGens = document.querySelector(".pokemonGens");
    let mainBg = document.querySelector(".main-bg");
    let searchbar = document.querySelector(".search-bar");

    headline.classList.toggle("active");
    searchBar.classList.toggle("active");
    pokemonGens.classList.toggle("active");
    mainBg.classList.toggle("active");
    searchbar.classList.toggle("active");
}


function getId(id) {
    return document.getElementById(id);
}


async function init() {
    //first loading gen 1 pokemon and then header
    loadPokemon()
    await loadGen1()
}

function loadHeader() {
    getId('header').innerHTML =  /*html*/ ` 
        <h1 class="headline">Pokedex</h1>
        <form class="searchBar" onsubmit="onkeydown=filterPokemon(); return false;">
            <input id="searchBar" type="text" placeholder="🔍 Search for pokemon..." required>
        </form>
        <!--Hambuer Menu-->
        <a href="#" class="toggle-button" onclick="toggleHamburger()">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <!--Hambuer Menu-->
        <div class="pokemonGens">
            <button onclick="loadGen1()"><span> GEN</span> <span> 1</span></button>
            <button onclick="loadGen2()"><span> GEN</span> <span> 2</span></button>
            <button onclick="loadGen3()"><span> GEN</span> <span> 3</span></button>
            <button onclick="loadGen4()"><span> GEN</span> <span> 4</span></button>
            <button onclick="loadGen5()"><span> GEN</span> <span> 5</span></button>
            <button onclick="loadGen6()"><span> GEN</span> <span> 6</span></button>
            <button onclick="loadGen7()"><span> GEN</span> <span> 7</span></button>
            <button onclick="loadGen8()"><span> GEN</span> <span> 8</span></button>
        </div> `
}

// loading gif
function loadHeaderLoading() {
    getId('header').innerHTML =  /*html*/ ` 
        <img id="loadingGif" src="img/loading-shiggy.gif" alt=""> 
        <h2>LOADING</h2> 
        <div class="block-click">  </div>`
}


//basic function for load all pokemon
async function loadPokemon() {
    getId('cardBox').innerHTML = ` `;
    for (let i = 0; i < 905; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokemonList.push(currentPokemon);
        console.log("Loaded Pokemon", currentPokemon);
    }
}


async function loadGen1() {
    x = 151;
    getId('header').innerHTML = ` `;
    loadHeaderLoading();
    getId('cardBox').innerHTML = ` `;

    for (let i = 0; i < x; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        currentType = currentPokemon['types']['0']['type']['name']
        console.log("Loaded Pokemon", currentPokemon);
        renderPokemonInfo(i);
        bgColor(currentType, i)
    }

    loadHeader(); // prevents spamming buttons
}


async function loadGen2() {
    x = 251;
    getId('header').innerHTML = ` `;
    loadHeaderLoading();
    getId('cardBox').innerHTML = ` `;

    for (let i = 151; i < x; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);

        renderPokemonInfo(i);
        bgColor(currentType, i)
    }

    loadHeader();
}


async function loadGen3() {
    x = 386;
    getId('header').innerHTML = ` `;
    loadHeaderLoading();
    getId('cardBox').innerHTML = ` `;

    for (let i = 251; i < x; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);

        renderPokemonInfo(i);
        bgColor(currentType, i)
    }
    loadHeader();
}


async function loadGen4() {
    x = 493;
    getId('header').innerHTML = ` `;
    loadHeaderLoading();
    getId('cardBox').innerHTML = ` `;

    for (let i = 386; i < x; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);

        renderPokemonInfo(i);
        bgColor(currentType, i)
    }
    loadHeader();
}


async function loadGen5() {
    x = 649;
    getId('header').innerHTML = ` `;
    loadHeaderLoading();
    getId('cardBox').innerHTML = ` `;

    for (let i = 493; i < x; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);

        renderPokemonInfo(i);
        bgColor(currentType, i)
    }
    loadHeader();
}


async function loadGen6() {
    x = 721;
    getId('header').innerHTML = ` `;
    loadHeaderLoading();
    getId('cardBox').innerHTML = ` `;

    for (let i = 649; i < x; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);

        renderPokemonInfo(i);
        bgColor(currentType, i)
    }
    loadHeader();
}

async function loadGen7() {
    x = 809;
    getId('header').innerHTML = ` `;
    loadHeaderLoading();
    getId('cardBox').innerHTML = ` `;

    for (let i = 721; i < x; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);

        renderPokemonInfo(i);
        bgColor(currentType, i)
    }
    loadHeader();
}

async function loadGen8() {
    x = 905;
    getId('header').innerHTML = ` `;
    loadHeaderLoading();
    getId('cardBox').innerHTML = ` `;

    for (let i = 809; i < x; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);

        renderPokemonInfo(i);
        bgColor(currentType, i)
    }
    loadHeader();
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function renderPokemonInfo(i) {
    getId('cardBox').innerHTML += /*html*/ `
    <div onclick="openImage(${i})" id="pokemonCard${i}" class="pokemon-card ">
        <div id="pokemonId" class="poke-id">
            # ${currentPokemon['id']}
            <h1 id="pokemonName">${capitalizeFirstLetter(currentPokemon['name'])}</h1>
        </div>
        <img id="pokemonImage" src="${currentPokemon["sprites"]['other']['official-artwork']['front_default']}">
        <div id="pokemonType" class="pokemon-type">

            ${capitalizeFirstLetter(currentPokemon['types']['0']['type']['name'])}
    
        </div>
    </div>`;
}

function pokemonTypes() {
    type1 = currentPokemon['types']['0']['type']['name'];
    type2 = currentPokemon['types']['1']['type']['name'];

    if (type2 = ' ') {
    }
}

//COLOR
function bgColor(currentType, i) {
    currentType = currentPokemon['types']['0']['type']['name']

    if (currentType == 'fire') {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(255, 75, 75)'
    }
    if (currentType == 'water') {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(0, 128, 255)'
    }
    if (currentType == 'grass') {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(26, 167, 106)'
    }
    if (currentType == 'electric') {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(255, 191, 0)'
    }
    if (currentType == 'psychic') {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(255, 106, 0)'
    }
    if (currentType == 'ground') {
        getId('pokemonCard' + i).style.backgroundColor = '#C09D74'
    }
    if (currentType == 'fighting') {
        getId('pokemonCard' + i).style.backgroundColor = '#CF887C'
    }
    if (currentType == 'fairy') {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(227, 85, 255)'
    }
    if (currentType == 'normal') {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(63, 61, 61)'
    }
    if (currentType == 'bug') {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(97, 189, 58)'
    }
    if (currentType == 'poison') {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(153, 0, 255)'
    }
    if (currentType == 'dark') {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(29, 36, 91)'
    }
    if (currentType == 'ghost') {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(62, 69, 120)'
    }
    if (currentType == 'ice') {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(22, 164, 200)'
    }
    if (currentType == 'rock') {
        getId('pokemonCard' + i).style.backgroundColor = '#CFC393'
    }
    if (currentType == 'dragon') {
        getId('pokemonCard' + i).style.backgroundColor = '#889AD1'
    }
}



async function filterPokemon()//filter pokemon by names
{
    let search = getId('searchBar').value;
    search = search.toLowerCase() //converts big to little chars
    console.log(search);

    getId('cardBox').innerHTML = ' ';
    getId('header').innerHTML = ` `;
    loadHeaderLoading();

    for (let i = 0; i < 905; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);

        if (currentPokemon['name'].toLowerCase().includes(search)) //if search input contains a char matching the user names then filter and show
        {
            renderPokemonInfo(i);
            bgColor(currentType, i)
        }
    }
    // work around for preventing spamming the input/enter key ---> loadHeader();
    loadHeader();
}


// Function to make big image onclick visible
function openImage(i) {

    let currentImage = pokemonList[i]["sprites"]['other']['official-artwork']['front_default'];
    let currentName = pokemonList[i]['name'];
    let currentType1 = pokemonList[i]['types']['0']['type']['name'];
    let attack = pokemonList[i]['stats'][1]['base_stat'];
    let defense = pokemonList[i]['stats'][2]['base_stat'];
    let spAtk = pokemonList[i]['stats'][3]['base_stat'];
    let currentHp = pokemonList[i]['stats'][0]['base_stat'];
    let currentId = pokemonList[i]['id'];
    let currentWeight = pokemonList[i]['weight'];
    let currentHeight = pokemonList[i]['height']
    //document.querySelector('#cardBox').classList.add('d-none'); --

    document.querySelector('.bigImageContainer').classList.remove('d-none');
    document.querySelector('.bigImageContainer').innerHTML = popupTemplate(attack, defense, spAtk, currentImage, currentName, currentType1, currentId, currentWeight, currentHeight, currentHp, i);
}


function closeImage() {
    document.querySelector('#cardBox').classList.remove('d-none');
    document.querySelector('.bigImageContainer').classList.add('d-none');
}


function nextImage(i) {
    if (i >= x - 1) {
        closeImage()
    } else {
        i++
        openImage(i)
    }
}


function prevImage(i) {
    if (i < 1) {
        closeImage()
    } else {
        i--;
        openImage(i)
    }
}


function popupTemplate(attack, defense, spAtk, currentImage, currentName, currentType1, currentId, currentWeight, currentHeight, currentHp, i) {

    if (currentWeight <= 500) {
        currentWeight = currentWeight / 10;
    }
    else if (currentWeight <= 2000) {
        currentWeight = currentWeight / 30;
    }
    else if (currentWeight >= 2001) {
        currentWeight = currentWeight / 60;
    }

    if (attack || defense || spAtk || currentHp < 110) {
        attack = attack / 2;
        defense = defense / 2;
        spAtk = spAtk / 2;
        currentHp = currentHp / 2;
    }
    else {
        attack = attack / 3;
        defense = defense / 3;
        spAtk = spAtk / 3;
        currentHp = currentHp / 3;
    }

    return /*html*/ ` 
    <div id="popUpBg${i}" class="currentimage">

        <div class="image-stats">   
            <div class="popUp-upper">
                <div class="center">
                # ${currentId}
                    <h1 id="pokemonName">${capitalizeFirstLetter(currentName)} </h1>
                </div>
                <img id="currentimage" src="${currentImage}">
            </div>
        </div>  
    </div>
    <div class="currentstats">
        <div class="image-stats">
            <div class="popUp-down">
                <div class="stats-container">
                    <div class="weight">
                        <p>Weight:</p>
                    </div>
                    <div class="basic-info" id="myProgress">
                        <div id="myBar" style="width: ${currentWeight}%">${currentWeight.toFixed(2)}</div>
                    </div>
                </div>
                <div class="stats-container">
                    <div class="weight">
                        <p>Height:</p>
                    </div>
                    <div class="basic-info" id="myProgress">
                        <div id="myBar" style="width: ${currentHeight}%">${currentHeight}</div>
                    </div>
                </div>
                <div class="stats-container">
                    <div class="weight">
                        <p>HP:</p>
                    </div>
                    <div class="basic-info" id="myProgress">
                        <div id="myBar" style="width: ${currentHp}%">${currentHp}</div>
                    </div>
                </div>
                <div class="stats-container">
                    <div class="weight">
                        <p>Attack:</p>
                    </div>
                    <div class="basic-info" id="myProgress">
                        <div id="myBar" style="width: ${attack}%">${attack}</div>
                    </div>
                </div>
                <div class="stats-container">
                    <div class="weight">
                        <p>Defense:</p>
                    </div>
                    <div class="basic-info" id="myProgress">
                        <div id="myBar" style="width: ${defense}%">${defense}</div>
                    </div>
                </div>
                <div class="stats-container">
                    <div class="weight">
                        <p>Sp.Attack:</p>
                    </div>
                    <div class="basic-info" id="myProgress">
                        <div id="myBar" style="width: ${spAtk}%">${spAtk}</div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    <div class="buttons">
            <i onclick="prevImage(${i})" class="fa-solid fa-arrow-left-long"></i>
            <i onclick="closeImage()" class="fa-solid fa-x"></i>
            <i onclick="nextImage(${i})"  class="fa-solid fa-arrow-right"></i>
    </div>`;
}



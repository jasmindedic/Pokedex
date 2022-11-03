let currentPokemon;
let pokemonList = [];



function getId(id)
{
    return document.getElementById(id);
}

x = 151;
y = 0;



async function init()
{   
     //first loading gen 1 pokemon and then header
            loadPokemon() 
    await   loadGen1() 
            
           
}

function loadHeader()
{
    getId('header').innerHTML =  /*html*/ ` 

        <h1>Pokedex</h1>

        <form onsubmit="onkeydown=filterPokemon(); return false;">
            <input id="searchBar" type="text" placeholder="🔍 Search for pokemon..." required>
        </form>
    
        <div class="pokemonGens">
            <button onclick="loadGen1()">Generation 1</button>
            <button onclick="loadGen2()">Generation 2</button>
            <button onclick="loadGen3()">Generation 3</button>
            <button onclick="loadGen4()">Generation 4</button>
            <button onclick="loadGen5()">Generation 5</button>
            <button onclick="loadGen6()">Generation 6</button>
            <button onclick="loadGen7()">Generation 7</button>
            <button onclick="loadGen8()">Generation 8</button>
            
        </div> `

    
}

// loading gif
function loadHeaderLoading()
{
    getId('header').innerHTML =  /*html*/ ` 

        <img id="loadingGif" src="img/loading-shiggy.gif" alt=""> 
        <h2>LOADING</h2> 
        <div class="block-click">  </div>`
       
        
}




//basic function for load all pokemon

async function loadPokemon() 
{    
    getId('cardBox').innerHTML = ` `;

    for (let i = 0; i < 905 ; i++)

    {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokemonList.push(currentPokemon);
        console.log("Loaded Pokemon", currentPokemon);
    
        
         
    }    
    
}


async function loadGen1() 
{    
    
    x = 10;
   
    getId('header').innerHTML = ` `;
    loadHeaderLoading();
    getId('cardBox').innerHTML = ` `;

    for (let i = 0; i < x ; i++)

    {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        curerntType = currentPokemon['types']['0']['type']['name']

        console.log("Loaded Pokemon", currentPokemon);
    
       
         renderPokemonInfo(i); 
         bgColor(curerntType, i)
    }    

    loadHeader(); // prevents spamming buttons
    
   
   
}


async function loadGen2()

{
    x = 251;

    getId('header').innerHTML = ` `;

    loadHeaderLoading();

    getId('cardBox').innerHTML = ` `;
    
    for (let i = 151; i < x ; i++)

    {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        
        console.log("Loaded Pokemon", currentPokemon);
    
        
         renderPokemonInfo(i); 
         bgColor(curerntType, i)
         
    }

    loadHeader();
}


async function loadGen3()

{
    x = 386;

    getId('header').innerHTML = ` `;

    loadHeaderLoading();

    getId('cardBox').innerHTML = ` `;
    
    for (let i = 251; i < x ; i++)

    {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);
        
        
        renderPokemonInfo(i); 
        bgColor(curerntType, i)
    } 
    loadHeader();
}


async function loadGen4()

{
    x = 493 ;

    getId('header').innerHTML = ` `;

    loadHeaderLoading();

    getId('cardBox').innerHTML = ` `;
    
    for (let i = 386; i < x ; i++)

    {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);
    
        
        renderPokemonInfo(i); 
        bgColor(curerntType, i)
    } 
    loadHeader();
}


async function loadGen5()

{
    x = 649 ;

    getId('header').innerHTML = ` `;

    loadHeaderLoading();

    getId('cardBox').innerHTML = ` `;
    
    for (let i = 493; i < x ; i++)

    {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);
    
        
         renderPokemonInfo(i); 
         bgColor(curerntType, i)
    } 
    loadHeader();
    
}


async function loadGen6()

{
    x = 721  ;

    getId('header').innerHTML = ` `;

    loadHeaderLoading();

    getId('cardBox').innerHTML = ` `;
    
    for (let i = 649; i < x ; i++)

    {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);
    
        
         renderPokemonInfo(i); 
         bgColor(curerntType, i)
    } 
    loadHeader();
}

async function loadGen7()

{
    x = 809  ;

    getId('header').innerHTML = ` `;

    loadHeaderLoading();

    getId('cardBox').innerHTML = ` `;
    
    for (let i = 721; i < x ; i++)

    {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);
    
        
         renderPokemonInfo(i); 
         bgColor(curerntType, i)
    } 
    loadHeader();
}

async function loadGen8()

{
    x = 905  ;

    getId('header').innerHTML = ` `;

    loadHeaderLoading();

    getId('cardBox').innerHTML = ` `;
    
    for (let i = 809; i < x ; i++)

    {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);
    
        
         renderPokemonInfo(i); 
         bgColor(curerntType, i)
    } 
    loadHeader();
}




function capitalizeFirstLetter(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  

    function renderPokemonInfo(i)
{
    

    getId('cardBox').innerHTML += `<div onclick="openImage(${i})" id="pokemonCard${i}" class="pokemon-card ">

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

function pokemonTypes()
{
    type1 = currentPokemon['types']['0']['type']['name'];
    type2 = currentPokemon['types']['1']['type']['name'];

    if(type2 = ' ')
    {
        
    }
}

//COLOR

function bgColor(curerntType, i)
{
   curerntType = currentPokemon['types']['0']['type']['name']

    if(curerntType == 'fire')
    {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(255, 75, 75)'
    }
    if(curerntType == 'water')
    {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(0, 128, 255)'
    }
    if(curerntType == 'grass')
    {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(26, 167, 106)'
    }
    if(curerntType == 'electric')
    {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(255, 191, 0)'
    }
    if(curerntType == 'psychic')
    {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(255, 106, 0)'
    }
    if(curerntType == 'ground')
    {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(255, 75, 75)'
    }
    if(curerntType == 'fighting')
    {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(105, 105, 105)'
    }
    if(curerntType == 'fairy')
    {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(227, 85, 255)'
    }
    if(curerntType == 'normal')
    {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(63, 61, 61)'
    }
    if(curerntType == 'bug')
    {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(97, 189, 58)'
    }
    if(curerntType == 'poison')
    {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(153, 0, 255)'
    }
    if(curerntType == 'dark')
    {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(29, 36, 91)'
    }
    if(curerntType == 'ghost')
    {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(62, 69, 120)'
    }
    if(curerntType == 'ice')
    {
        getId('pokemonCard' + i).style.backgroundColor = 'rgb(22, 164, 200)'
    }

   /*  --Water: rgb(0, 128, 255);
    --Fire: rgb(255, 75, 75);
    --Grass: rgb(26, 167, 106);
    --Electric: rgb(255, 191, 0);
    --Poison: rgb(153, 0, 255);
    --Bug: rgb(97, 189, 58);
    --Flying: rgb(91, 181, 217);
    --Fairy: rgb(227, 85, 255);
    --Ground: rgb(144, 93, 72);
    --Psychic: rgb(255, 106, 0);
    --Fighting: rgb(105, 105, 105); */
}
async function filterPokemon()//filter pokemon by names
{

    let search = getId('searchBar').value;

    search = search.toLowerCase() //converts big to little chars
    console.log(search);

   
    getId('cardBox').innerHTML = ' '; 
    getId('header').innerHTML = ` `;
    loadHeaderLoading();
       
       for (let i = 0; i < 905; i++)

       {
           let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
           let response = await fetch(url);
           currentPokemon = await response.json();
           console.log("Loaded Pokemon", currentPokemon);
       
           
           if(currentPokemon['name'].toLowerCase().includes(search)) //if search input contains a char matching the user names then filter and show
           {

            renderPokemonInfo(i);

           }
          

       }    

      // work around for preventing spamming the input/enter key ---> loadHeader();

      loadHeader();
}

 function pokemonDontExist()
{
 return   getId('cardBox2').innerHTML = `<div id="dontExist" class="dont-exist">

    <div class="upper-text">
        
        <h2>This Pokemon </h2>
    </div>


    <img  src="img/ditto.png">

    <div class="down-text">
        
        <h2>has yet to be created</h2>
    </div>
    
    
    </div>
</div>`
}





// Function to make big image onclick visible
function openImage(i) {
    let currentImage = pokemonList[i]["sprites"]['other']['official-artwork']['front_default'];
    let currentName  = pokemonList[i]['name'];
    let currentType1 = pokemonList[i]['types']['0']['type']['name'];
    let currentType2 = pokemonList[i]['types']['1']['type']['name'];

    let currentId = pokemonList[i]['id'];
    let currentWeight = pokemonList[i]['weight'];
    let currentHeight = pokemonList[i]['height']
    //document.querySelector('#cardBox').classList.add('d-none'); --


    document.querySelector('.bigImageContainer').classList.remove('d-none');
    document.querySelector('.bigImageContainer').innerHTML = popupTemplate(currentImage,currentName,currentType1,currentId,currentWeight,currentHeight,currentType2, i);

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


function popupTemplate(currentImage,currentName,currentType1,currentId,currentWeight,currentHeight,currentType2, i) {
    return /*html*/ ` 
<div class="currentimage">

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
            
            <div class="basic-info" >
               <span> Weight : ${currentWeight}</span>
               <span>   ${capitalizeFirstLetter(currentType1)}</span>
            </div>
                
            <div class="types basic-info">
            <span>Height : ${currentHeight}  </span>
            <span>   ${capitalizeFirstLetter(currentType2)}</span>
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

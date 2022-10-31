let currentPokemon;

// Function to load pokemons

function getId(id)
{
    return document.getElementById(id);
}
async function loadPokemon() 
{
   
        
    for (let i = 0; i < 151; i++)

    {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log("Loaded Pokemon", currentPokemon);
    
        //getId('pokemonName').innerHTML += `<div> ${currentPokemon["name"]} </div>`
         renderPokemonInfo(i); 
    } 
    
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  

    function renderPokemonInfo(i)
{
    let pokemoneName =
    
    getId('cardBox').innerHTML += `<div id="pokemonCard${i}" class="pokemon-card">

    <div id="pokemonId" class="poke-id">
        # ${currentPokemon['id']}
        <h1 id="pokemonName">${capitalizeFirstLetter(currentPokemon['name'])}</h1>
    </div>

    <img id="pokemonImage" src="${currentPokemon["sprites"]['other']['dream_world']['front_default']}">

    <div id="pokemonType" class="pokemon-type">
    
    ${capitalizeFirstLetter(currentPokemon['types']['0']['type']['name'])}
    </div>
</div>`;
    
}




let currentPokemon;

// Function to load pokemons
async function loadPokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon/charmander";
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log("Loaded Pokemon", currentPokemon);

    renderPokemonInfo();
}

function renderPokemonInfo() {
    document.getElementById("pokemonName").innerHTML = currentPokemon["name"];
}



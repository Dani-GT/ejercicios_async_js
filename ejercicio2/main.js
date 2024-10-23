const getPokemons = async () => {
    try {
        const data = await fetch ("https://pokeapi.co/api/v2/pokemon/?limit=151");
        const dataJSON = await data.json();
        const pokemons = dataJSON.results;
        const randomIndex = randomPokemon(pokemons.length);
        const randomPokemonURL = pokemons[randomIndex].url;
        const pokemonData = await fetch(randomPokemonURL);
        const pokemonJSON = await pokemonData.json();
        printPokemon(pokemonJSON);
    } catch (error) {
        console.log("NO está tu Pokemon");
    }
};

function randomPokemon(max) {
    return Math.floor(Math.random() * max);
}

function printPokemon(pokemon) {
    const imgElement = document.querySelector(".random-image");
    imgElement.src = pokemon.sprites.other.home.front_default; 
    imgElement.alt = pokemon.name; 
    const nameElement = document.createElement("h2");
    nameElement.textContent = pokemon.name.toUpperCase(); 
    imgElement.after(nameElement);   
    createSearchButton();
}

function createSearchButton() {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Buscar otro Pokémon";
    document.body.appendChild(buttonElement);
    buttonElement.addEventListener("click", () => {
        window.location.reload();
    });
}

getPokemons ();




   

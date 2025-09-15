import { addPokeCard } from "./ui.js";

const path = "https://pokeapi.co/api/v2/pokemon/";
let pokeIndex = 1;

async function fetchPokemon() {
  try {
    while (pokeIndex <= 15) {
      const res = await fetch(path + pokeIndex);
      if (!res.ok) throw new Error("Something went wrong!");
      const data = await res.json();
      //   console.log(data);

      addPokeCard(data);
      //   console.log(pokeIndex);

      pokeIndex++;
    }
  } catch (error) {
    console.log(error.message);
  } finally {
  }
}

export { fetchPokemon };

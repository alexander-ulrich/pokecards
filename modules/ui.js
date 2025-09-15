const pokeContainer = document.getElementById("pokemon-container");

export function addPokeCard(pokeData) {
  const id = pokeData.id;
  const name = pokeData.name;
  const img = pokeData.sprites.front_default;
  const types = pokeData.types;
  const allTypes = {
    normal: "[#A8A77A]",
    fire: "[#EE8130]",
    water: "[#6390F0]",
    electric: "[#F7D02C]",
    grass: "[#7AC74C]",
    ice: "[#96D9D6]",
    fighting: "[#C22E28]",
    poison: "[#A33EA1]",
    ground: "[#E2BF65]",
    flying: "[#A98FF3]",
    psychic: "[#F95587]",
    bug: "[#A6B91A]",
    rock: "[#B6A136]",
    ghost: "[#735797]",
    dragon: "[#6F35FC]",
    dark: "[#705746]",
    steel: "[#B7B7CE]",
    fairy: "[#D685AD]",
  };

  //   Create Elements
  const pokeCard = document.createElement("div");
  const pokeId = document.createElement("span");
  const pokeName = document.createElement("span");
  const nameContainer = document.createElement("div");
  const pokeType1 = document.createElement("span");
  const pokeType2 = document.createElement("span");
  const typeContainer = document.createElement("div");
  const pokeTypes = [pokeType1, pokeType2];
  const pokeImg = document.createElement("img");
  // Fill Elements with data
  pokeId.textContent = "#" + id + " ";
  pokeName.textContent = name;
  pokeImg.src = img;
  pokeTypes[0].textContent = types[0].type.name;
  if (types.length > 1) {
    pokeTypes[1].textContent = types[1].type.name;
  } else {
    pokeTypes[1].textContent = "";
  }

  //   Append Elements to Container
  nameContainer.appendChild(pokeId);
  nameContainer.appendChild(pokeName);
  pokeCard.appendChild(nameContainer);
  typeContainer.appendChild(pokeTypes[0]);
  typeContainer.appendChild(pokeTypes[1]);
  pokeCard.appendChild(typeContainer);
  pokeCard.appendChild(pokeImg);
  pokeContainer.appendChild(pokeCard);

  //   Style Elements
  pokeType1.classList.add(
    `bg-${allTypes[types[0].type.name]}`,
    "inline-block",
    "py-[2px]",
    "px-[5px]",
    "mr-[5px]",
    "rounded",
    "border-gray-500",
    "border-[2px]",
    "capitalize"
  );
  if (types.length > 1) {
    pokeType2.classList.add(
      `bg-${allTypes[types[1].type.name]}`,
      "inline-block",
      "py-[2px]",
      "px-[5px]",
      "mr-[5px]",
      "rounded",
      "border-gray-500",
      "border-[2px]",
      "capitalize!"
    );
  }
  nameContainer.classList.add("text-lg");
  typeContainer.classList.add("mt-[0.5rem]", "mb-[1rem]");
  pokeName.classList.add("capitalize");
  pokeImg.classList.add("m-auto", "rounded");
  pokeCard.classList.add(
    "text-center",
    "font-bold",
    "bg-blue-200",
    "hover:bg-blue-400",
    "rounded-lg",
    "my-4",
    "py-10"
  );
}

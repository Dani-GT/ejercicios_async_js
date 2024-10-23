const getCharacters = async () => {
    try {
    const data = await fetch("https://thronesapi.com/api/v2/Characters");
    const dataJson = await data.json();
    printCharacters(dataJson)
    } catch (error) {
    console.log(error.message);
    }
};

const printCharacters = (characters) => {
    const select = document.getElementById("character-list");
    for (const character of characters) {
        const option = document.createElement("option");
        option.value = character.imageUrl;
        option.textContent = character.fullName;
        select.appendChild(option);
      }
};

const showCharacterImage = () => {
    const select = document.getElementById("character-list");
    const image = document.querySelector(".character-image");
    // Cambiamos el atributo `src` de la imagen con la opción seleccionada
    image.src = select.value; // El value es la URL de la imagen
  };

document.getElementById("character-list").addEventListener("change", showCharacterImage);

getCharacters();

  
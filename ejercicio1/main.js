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
    for (const character of characters) {
        
        
        
    }
};

getCharacters();
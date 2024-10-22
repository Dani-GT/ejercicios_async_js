const getCharacters = async () => {
    try {
    const data = await fetch("https://thronesapi.com/api/v2/Characters");
    const dataJson = await data.json();
    console.log(dataJson)
} catch (error) {
    console.log(error.message);
}
};

getCharacters();
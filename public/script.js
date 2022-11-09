//Asynkron funksjon som henter data fra API-et, via fetch metoden
async function getInfo() {
    const response = await fetch(url);
    const data = await response.json();
    const { title } = data;

    //forsøker å hente ut tittel til sakene
    document.getElementById("title").textContent = title;

}

//Definerer urlen så man slipper å skrive hele hver gang, hvis det blir aktuelt
const url = "https://services.api.no/api/acpcomposer/v1.1/search/content/?publicationDomain=www.ba.no&sort=lastPublishedDate&types=story";

getInfo();
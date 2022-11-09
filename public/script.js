//Har basically prøvd masse shit her men ingenting av det gir mening

//Asynkron fetch funksjon som henter data fra API-et
async function getInfo() {
    const response = await fetch(url).then(data => {
        data.forEach(_embedded => {
            const cases = `<li>${_embedded.title}</li>`;
            document.querySelector(`ul`).insertAdjacentHTML(`cases`)
            //Forsøkte å hente ut kun tittel i første omgang og legge det i en liste, men lykkes ikke
    });
    //const data = await response.json();
    //const { title } = data;
    console.log(data.title);

    data.forEach(_embedded => {
        const cases = `<li>${_embedded.title}</li>`;

        document.querySelector(`ul`).insertAdjacentHTML(`cases`)
    });

    //forsøker å hente ut tittel til sakene
    document.getElementById("title").textContent = title;

})}

//Definerer urlen så man slipper å skrive hele hver gang, hvis det blir aktuelt
const url = "https://services.api.no/api/acpcomposer/v1.1/search/content/?publicationDomain=www.ba.no&sort=lastPublishedDate&types=story";

getInfo();
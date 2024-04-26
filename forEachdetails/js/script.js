const API_URL="https://restcountries.com/v3.1/all"

function reqListener() {
const countriesData=JSON.parse(this.responseText);
countriesData.forEach(element => {
    console.log(element.name.common,element.capital,element.flags.png)
})
}
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", API_URL);
req.send();
const API_URL="https://restcountries.com/v3.1/all"

function reqListener() {
const countriesData=JSON.parse(this.responseText);
let p=0
console.log(countriesData.reduce((accum,value) => {
        return accum+value.population
    },0))
}
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", API_URL);
req.send();
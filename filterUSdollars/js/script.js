const API_URL="https://restcountries.com/v3.1/all"

function reqListener() {
const countriesData=JSON.parse(this.responseText);
console.log(...countriesData.filter((value)=>{
    return value.currencies?.USD
}))
}
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", API_URL);
req.send();
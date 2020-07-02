const slideTown = document.querySelector("#town-driving");
const slideLongDist = document.querySelector("#long-distance-driving");
const valueTown = document.querySelector(".town-travel");
const valueLongDist = document.querySelector(".long-distance");
const whitchTechnologyResult = document.querySelector(".compare-result");
const savedMoney = document.querySelector(".economy-result");

var combustionTravel = 0;
var hybridTravel = 0;
var combustionTown = 0;
var hybridTown = 0;


const townSliderFunction = (e) => {
    combustionTown = e.target.value * 4.5 * 8 / 100;
    hybridTown = e.target.value * 4.5 * 4 / 100;
    valueTown.innerText = `${e.target.value} km`;
    compareResultFunction();
}
slideTown.addEventListener("input", townSliderFunction);

const travelSliderFunction = (e) => {
    combustionTravel = e.target.value * 4.5 * 5 / 100;
    hybridTravel = e.target.value * 4.5 * 7 / 100;
    valueLongDist.innerText = `${e.target.value} km`;
    compareResultFunction();
}
slideLongDist.addEventListener("input", travelSliderFunction);

const compareResultFunction = () => {
    let combustion = combustionTown + combustionTravel;
    let hybrid = hybridTown + hybridTravel;
    var moneyEarned = 0;
    if (combustion < hybrid) {
        whitchTechnologyResult.innerText = 'SPALINOWY';
        moneyEarned = hybrid - combustion;
    } else if (combustion > hybrid) {
        whitchTechnologyResult.innerText = 'HYBRYDOWY';
        moneyEarned = combustion - hybrid;
    } else {
        whitchTechnologyResult.innerText = 'obydwa opłacają się tak samo';
        savedMoney.innerHTML = 0;
    }
    savedMoney.innerHTML = Math.floor(moneyEarned);
}
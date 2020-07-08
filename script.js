document.addEventListener("DOMContentLoaded", function () {
  const slideTown = document.querySelector("#town-driving");
  const slideLongDist = document.querySelector("#long-distance-driving");
  const valueTown = document.querySelector(".town-travel");
  const valueLongDist = document.querySelector(".long-distance");
  const whitchTechnologyResult = document.querySelector(".compare-result");
  const savedMoney = document.querySelector(".economy-result");

  let combustionTravel = 0;
  let hybridTravel = 0;
  let combustionTown = 0;
  let hybridTown = 0;

  const combTownConst = (4.5 * 8) / 100;
  const hybrTownConst = (4.5 * 4) / 100;
  const combTravConst = (4.5 * 5) / 100;
  const hybrTravConst = (4.5 * 7) / 100;

  valueTown.innerText = "500 km";
  valueLongDist.innerText = "500 km";

  const townSliderFunction = (e) => {
    combustionTown = e.target.value * combTownConst;
    hybridTown = e.target.value * hybrTownConst;
    valueTown.innerText = `${e.target.value} km`;
    compareResultFunction();
  };
  slideTown.addEventListener("input", townSliderFunction);

  const travelSliderFunction = (e) => {
    combustionTravel = e.target.value * combTravConst;
    hybridTravel = e.target.value * hybrTravConst;
    valueLongDist.innerText = `${e.target.value} km`;
    compareResultFunction();
  };
  slideLongDist.addEventListener("input", travelSliderFunction);

  const compareResultFunction = () => {
    let combustion = combustionTown + combustionTravel;
    let hybrid = hybridTown + hybridTravel;
    let moneySaved = 0;
    if (combustion < hybrid) {
      whitchTechnologyResult.innerText = "SPALINOWY";
      moneySaved = hybrid - combustion;
    } else if (combustion > hybrid) {
      whitchTechnologyResult.innerText = "HYBRYDOWY";
      moneySaved = combustion - hybrid;
    } else {
      whitchTechnologyResult.innerText = "obydwa opłacają się tak samo";
      savedMoney.innerHTML = 0;
    }
    savedMoney.innerHTML = Math.floor(moneySaved);
  };
});

// Calculate the total oil price that I have to pay

const dieselPrice = 114;
const prtrolPrice = 130;
const octanePrice = 90;

function oilPrice(diesel, petrol, octane) {
  return diesel * dieselPrice + petrol * prtrolPrice + octane * octanePrice;
}

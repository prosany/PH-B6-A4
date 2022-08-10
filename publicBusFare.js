const perBusSeat = 50;
const perMicrobusSeat = 11;
const publicBusPrice = 250;

function publicBusFare(people) {
  const peopleRemaining = people % perBusSeat;
  const remaingForMicrobus = peopleRemaining % perMicrobusSeat;
  const totalPublicBusCost = publicBusPrice * remaingForMicrobus;
  return totalPublicBusCost;
}

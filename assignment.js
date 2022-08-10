// 1. Radian to Degree

function radianToDegree(radian) {
  return (radian * 180) / Math.PI;
}

// 2. Check whether the given file name is a javascript file not not

function isJavaScriptFile(fileName) {
  return fileName.endsWith(".js");
}

// 3. Calculate the total oil price that I have to pay

const dieselPrice = 114;
const prtrolPrice = 130;
const octanePrice = 90;

function oilPrice(diesel, petrol, octane) {
  return diesel * dieselPrice + petrol * prtrolPrice + octane * octanePrice;
}

// 4. Public Bus Fare

const perBusSeat = 50;
const perMicrobusSeat = 11;
const publicBusPrice = 250;

function publicBusFare(people) {
  const peopleRemaining = people % perBusSeat;
  const remaingForMicrobus = peopleRemaining % perMicrobusSeat;
  const totalPublicBusCost = publicBusPrice * remaingForMicrobus;
  return totalPublicBusCost;
}

// 5. Is Best Friend

const friendOne = { name: "Tom", friend: "Rock" };
const friendTwo = { name: "Rock", friend: "Tom" };

function isBestFriend(friendOne, friendTwo) {
  if (
    friendOne.name === friendTwo.friend &&
    friendTwo.name === friendOne.friend
  ) {
    return true;
  } else {
    return false;
  }
}

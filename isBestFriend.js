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

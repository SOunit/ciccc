function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const mario = document.querySelector("#avatar");
console.log(mario.style);

const position = { top: 0, left: 0 };
mario.style.left = position.left;
mario.style.top = position.top;
const moveNum = 50;

const generateCoin = (coin) => {
  console.log("generateCoin");
  console.log(coin);

  const coinPos = [
    [moveNum * 10, moveNum * 15],
    [moveNum * 25, moveNum * 25],
    [moveNum * 18, moveNum * 13],
  ];
  const randomIndex = Math.floor(Math.random() * 3) + 0;

  coin.style.top = coinPos[randomIndex][0] + "px";
  coin.style.left = coinPos[randomIndex][0] + "px";

  console.log(coin.style.top);
  console.log(coin.style.left);
};

const coin = document.querySelector("#coin");
generateCoin(coin);

document.addEventListener("keypress", (event) => {
  console.log("click", event.code);
  if (event.code === "KeyA") {
    console.log("left");
    position.left -= moveNum;
    mario.style.left = position.left + "px";
  } else if (event.code === "KeyF") {
    console.log("right");
    position.left += moveNum;
    mario.style.left = position.left + "px";
  } else if (event.code === "KeyU") {
    console.log("top");
    position.top -= moveNum;
    mario.style.top = position.top + "px";
  } else if (event.code === "KeyN") {
    console.log("down");
    position.top += moveNum;
    mario.style.top = position.top + "px";
  }

  if (isTouching(mario, coin)) {
    console.log("touch");
    generateCoin(coin);
  }
});

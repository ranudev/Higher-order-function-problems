function randomnum() {
  return Math.random();
  //Math.random fnction used to generate a random number
}

setInterval(() => {
  let num = randomnum();
  console.log(num);
}, 3000);

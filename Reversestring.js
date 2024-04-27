function revstring(str) {
  return str.split("").reverse().join("");
}

//split is uded to convert string to array
//reverse method is used to revserse a array

let input = "hey";

setTimeout(() => {
  let reverse = revstring(input);
  console.log(reverse);
}, 1000);

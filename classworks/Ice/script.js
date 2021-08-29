const select = document.querySelectorAll(".flavor");
const btn = document.getElementById("btn");
const van = document.getElementById("vanille");
const aar = document.getElementById("aardbeien");
const flav1 = document.getElementsByClassName("vanille");
const flav2 = document.getElementsByClassName("aardbeien");



btn.addEventListener("click", () => {
  let flavorV = 0.9;
  let flavorA = 0.7;

  let valueV = van.value;
  let valueA = aar.value;

  // if (flav1 != flav2) {
  //   calculate(valflav1, valflav2, valueT);
  // } else {
  //   alert("Choose Different Flavors.");
  // }

console.log(valueV + valueA + " Toonmij")
let valueT = +valueV + +valueA
// https://stackoverflow.com/questions/14496531/adding-two-numbers-concatenates-them-instead-of-calculating-the-sum
console.log(valueT + " ToonTot")

});



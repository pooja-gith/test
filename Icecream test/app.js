/*const queue = document.getElementById("chooseonly3");
function checking(chooseonly3) {
  queue.push(id);
  if (queue.length === 3) {
    queue[0].checked = false;
    queue.shift();
  }
}
console.log(queue); */

document.querySelector("form.alertSubmit").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      alert("You can head over to the counter to collect your icecream! =)");
    },
    false
  );
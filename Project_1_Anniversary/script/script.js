console.log("working");

function currentDateReflesh() {
  var today = new Date();
  var hh = String(today.getHours()).padStart(2, "0");
  var min = String(today.getMinutes()).padStart(2, "0");

  var sec = String(today.getSeconds()).padStart(2, "0");

  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var secNew = sec;
  today = mm + "/" + dd + "/" + yyyy + " " + hh + ":" + min + " " + sec;
  document.getElementById("todaysDate").innerHTML = today;
}
currentDateReflesh();
setInterval(currentDateReflesh, 1000);

const anniversary = "1 Jan 2021";
function countdown() {
  const anniversaryDate = new Date(anniversary);
  const currentDate = new Date();
  const seconds = (anniversaryDate - currentDate) / 1000;
  const days = seconds / (3600 * 24);
  const hoursLeft = (days % 1) * 24;
  const minsLeft = (hoursLeft % 1) * 60;
  const secondsLeft = (minsLeft % 1) * 60;
  console.log(secondsLeft);
  document.getElementById("days").innerHTML = Math.floor(days);
  document.getElementById("hours").innerHTML = Math.floor(hoursLeft);
  document.getElementById("minutes").innerHTML = Math.floor(minsLeft);
  document.getElementById("seconds").innerHTML = Math.floor(secondsLeft);
}
countdown();
setInterval(countdown, 1000);

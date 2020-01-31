window.onload = oppstart;
function oppstart() {
  document.getElementById('fugl0').addEventListener('click', fugl);
  document.getElementById('fugl1').addEventListener('click', fugl);
}
var fugler = {
  0: {navn:"Dette er en svartmeis!", lyd:"svartmeis.mp3"},
  1: {navn:"Dette er en flaggspett!", lyd: "flaggspett.mp3"},
}
var ut = "";

function bruh() {
  var alderVar = document.getElementById('alder').value;
  var navnVar = document.getElementById('navn').value;
  if (alderVar < 11) {
    ut = "Hei, " +navnVar+ "! Håper du har stelt pent med småfuglene."
  }
  else if (alderVar > 10 && alderVar < 15) {
    ut = "Hei, " +navnVar+ "! Her kan du lære deg sangen til småfuglene på fuglebrettet."
  }
  else {
    ut = "Hei, " +navnVar+ "! Ikke glem og legg ut mat til fuglene om vinteren."
  }
  document.getElementById('utskrift').innerText = ut;
}
function fugl(event) {
  var i = event.target.alt;
  console.log(i)
  document.getElementById('nyttbilde').src = "fugl"+i+".jpg";
  console.log(fugler[i].navn)
  var intFugl = fugler[i].navn;
  var sangFugl = fugler[i].lyd;
  document.getElementById('fuglnavn').innerText = intFugl;
  document.getElementById('audio1').src = "fugl"+i+".mp3";
  document.getElementById('audio1').play();
  document.getElementById('nyttbilde').style.right = "1400px";
  document.getElementById('nyttbilde').style.cssFloat = "none";
  document.getElementById('nyttbilde').style.position = "absolute";
  document.getElementById('nyttbilde').style.opacity = "1";
  document.getElementById('storbilde').style.opacity = "0";
  document.getElementById('tilbakeBtn').style.opacity = "1";
}
function tilbake() {
  document.getElementById('nyttbilde').style.right = "0px";
  document.getElementById('nyttbilde').style.opacity = "0";
  document.getElementById('storbilde').style.opacity = "1";
}
function quiz() {
  document.getElementById('trekknapp').style.opacity = "1";
  document.getElementById('startQuiz').style.opacity = "0";
}
function trekke() {
  var randTall = Math.floor((Math.random() * 8) + 0);
  document.getElementById('quizImg').src = "fugl"+randTall+".jpg";
}

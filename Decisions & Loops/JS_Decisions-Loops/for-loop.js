var scores8 = [84, 882, 47];
var arrayLength8 = scores8.length;
var roundNumber = 0;
var msg8 = "";
for (var i = 0; i < arrayLength8; i++) {
  roundNumber = i + 1;

  msg8 = msg8 +  "Runda " + roundNumber + ": " +  scores8[i] + "<br />";
}

document.getElementById("answer8").innerHTML = '<h3>Użycie pętli for</h3>' + '<br / >' + msg8;

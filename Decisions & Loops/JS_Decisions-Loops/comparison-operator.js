var pass = 50;   
var score = 90;
var hasPassed = score >= pass;


var el = document.getElementById('answer');
el.innerHTML = '<h3>Użycie operatórów porównania</h3>' + '<p>Test zaliczony: ' + hasPassed ;
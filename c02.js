var price; //cena
var quantity; //ilosc
var total; //suma

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = total + "$"
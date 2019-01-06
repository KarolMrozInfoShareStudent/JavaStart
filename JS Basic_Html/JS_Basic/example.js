var greeting = 'Janusz ';
var name = 'Molly';
var message = ', sprawdź zamówoenie : ';

var welcome = greeting + name + message;

var sign = 'JANUSZ THE BEST';
var tiles = sign.length;
var subTotal = tiles * 10;
var shipping = 7;
var grandTotal = subTotal + shipping;


var el = document.getElementById('greetingE');

el.textContent = welcome;


var elSign = document.getElementById('userSignE');
elSign.textContent = sign;

var elTiles = document.getElementById('tilesE');
elTiles.textContent = tiles;


var elSubTotal = document.getElementById('subTotalE');
elSubTotal.textContent =  subTotal + ' zł';


var elShipping = document.getElementById('shippingE');
elShipping.textContent = shipping + ' zł';


var elGrandTotal = document.getElementById('grandTotalE');
elGrandTotal.textContent = grandTotal + ' zł';


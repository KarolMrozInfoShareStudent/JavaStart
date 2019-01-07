var msg = '<p class="opis">Użycie oboektowego modelu dom</p>';
msg +='<p><b>nazwa strony</b>: ' + document.title + ' ';
msg += '<b>adres strony: </b>' + document.URL + ' ';
msg += '<b>ostatnia modyfikacja: </b>' + document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML = msg;
// //Pobranie elementu na podstawie wartości atrybutu id
// var el = document.getElementById('one')
//     el.className = 'cool';


//Pobieranie elementu na podstawie wartości atrybutu class

    // var elements = document.getElementsByClassName('hot');
    //     //Wyszukanie elementow o klasie hot
    //     if(elements.length > 1){ //jeśli znajdą znalezione conajmniej dwa
    //         var el = elements[2]; // z kolekcji NodeList wybierz trzeci 
    //             el.className = 'cool' //zmiaana warosci atrybutu class wybranego elementu
    //     }


//Pobranie elementu na podstawie wartości nazwy znacznieka

    // var elements = document.getElementsByTagName('li');
        
    //     if(elements.length > 1){
    //         var el = elements[0];
    //             el.className = 'cool'
    //     }


//Pobranie elementu na podstwie selektorów CSS

// //mETODA querySelector() zwraca jedynie pierwsze dopasowanie
//    var el = document.querySelector('li.hot');
//         el.className = 'cool'

//     //metoda querySelectorAll() zwraca kolekcje NodeList    
//     var els = document.querySelectorAll('li.hot');
//         els[1].className = 'cool'

// Iteracja poprzez kolekcje NodeList


// var hotItems = document.querySelectorAll('li.hot');

//     if (hotItems.length > 0){
        
//         for( i = 0; i<hotItems.length; i++){
//             hotItems[i].className = 'cool'
//         }
//     }



//Pierwszy i ostatni element potomy

// var startItem = document.getElementsByTagName('ul')[0];
// var firstItem = startItem.firstChild;
// var lastItem = startItem.lastChild;

// firstItem.setAttribute('class', 'complete');
// lastItem.setAttribute('class', 'cool')


//Uzyskanie dostępu do wezła tekstowego i jego zamiana

// var itemTwo = document.getElementById('two');
// var elTekst = itemTwo.firstChild.nodeValue;

// elTekst = elTekst.replace('pine nuts', 'kapusta');

// itemTwo.firstChild.nodeValue = elTekst;


// var firstItem = document.getElementById('one');
// var showTextContent = firstItem.textContent;
// var showInnerText = firstItem.innerText;

// var msg = '<p>textContent:' + showTextContent + '</p>';
//     msg += '<p>innerText:' +  showInnerText + '</p>';

// var el = document.getElementById('scriptResults');
//     el.innerHTML = msg;

//     firstItem.textContent = 'chleb ze smalecem'


// var firstItem = document.getElementById('one');
// var itemContent = firstItem.innerHTML;

// firstItem.innerHTML = '<a href=\"https://github.com/MrozKarol\">' + itemContent + '</a>'


// var newEl = document.createElement('li');
// var newText = document.createTextNode('owsianka na mleku');

// newEl.appendChild(newText);

// var position = document.getElementsByTagName('ul')[0];
//     position.appendChild(newEl);

// var removeEl = document.getElementsByTagName('li')[3]

// var containerEl = removeEl.parentNode;
//     containerEl.removeChild(removeEl)


// var firstItem = document.getElementById('one');

//     if (firstItem.hasAttribute('class')){
//         var attr = firstItem.getAttribute('class');

//         var el = document.getElementById('scriptResults');
//             el.innerHTML = '<p> Pierwszy element z listy ma klase o nazwie : ' + attr + '</p>'
//     }


var firstItem = document.getElementById('one');
    firstItem.className = 'complete';

    var fourthItem = document.getElementsByTagName('li')[3];
        fourthItem.setAttribute('class', 'cool');
        fourthItem.innerHTML = 'tło zmieni sie na błekitne'
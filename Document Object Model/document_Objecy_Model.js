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

    var elements = document.getElementsByTagName('li');
        
        if(elements.length > 1){
            var el = elements[0];
                el.className = 'cool'
        }
   
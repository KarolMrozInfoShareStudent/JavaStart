var i = 1;

var msg9 = ''


    while(i<10){
        msg9 += i + ' x 5 = '+ (i * 5) + '<br />';
        i++
    }






document.getElementById("answer9").innerHTML = '<h3>Użycie pętli while</h3>'  + msg9;
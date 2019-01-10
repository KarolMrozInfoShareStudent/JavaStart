var tebleloop = 3
var operator = 'addition';

var i = 1;
var msgExampleLoop = '';

    if(operator !== 'addition'){

        while(i < 11){
            msgExampleLoop += i + ' + ' + tebleloop + ' = ' + (i + tebleloop) + '<br />';;
            i++;
        }
    }   
       else{
            while(i <11){
                msgExampleLoop += i + ' x ' + tebleloop + ' = ' + (i * tebleloop) + '<br />';
                i++;
            }    
       
        }
       
    



var elExampleLoop = document.getElementById('blackboard');
    elExampleLoop.innerHTML = '<h3>Przykład decyzje i pętle</h3>' + msgExampleLoop;


    
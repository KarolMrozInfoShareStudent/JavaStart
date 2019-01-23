// function checkUsername() {
//     var elMsg = document.getElementById('feedback');
//     var elUsername = document.getElementById('username');
//     if (elUsername.value.length < 5) {
//       elMsg.textContent = 'Nazwa urzytkownika musi miec prznyjamniej 5 znaków';
//     } else {
//       elMsg.textContent = '';                            
//     }
//   }
//////////////////////////////////////////////////////////////////////////////////////////
// function checkUsername(){
//   var elMsg = document.getElementById('feedback');
  
//       if(this.value.length < 5){
//         elMsg.textContent = 'Nazwa uzytkownika musu zawierac przynajmniej 5 znaków';
//       }else{
//         elMsg.textContent = '';
//       }
// }


// var elUserName = document.getElementById('username');
//     elUserName.onblur = checkUsername;
//////////////////////////////////////////////////////////////////////////////////////////////// 

//Użycie obserwatora zdarzeń
// function checkUsername(){
//   var elMsg = document.getElementById('feedback');
  
//       if(this.value.length < 5){
//         elMsg.textContent = 'Nazwa uzytkownika musu zawierac przynajmniej 5 znaków';
//       }else{
//         elMsg.textContent = '';
//       }
// }

// var elUserName = document.getElementById('username');

//     elUserName.addEventListener('blur', checkUsername, false)
///////////////////////////////////////////////////////////////////////////////

var elUserName = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength){
  
      if(elUserName.value.length < minLength){
        elMsg.textContent = 'Nazwa uzytkownika musu zawierac przynajmniej' + minLength+ 'znaków';
      }else{
        elMsg.textContent = '';
      }
}


    elUserName.addEventListener('blur', function(){
        checkUsername(4)
    },false);
 ///////////////////////////////////////////////////////////////////   
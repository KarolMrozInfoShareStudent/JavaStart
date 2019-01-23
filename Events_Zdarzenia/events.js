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

// var elUserName = document.getElementById('username');
// var elMsg = document.getElementById('feedback');

// function checkUsername(minLength){
  
//       if(elUserName.value.length < minLength){
//         elMsg.textContent = 'Nazwa uzytkownika musu zawierac przynajmniej' + minLength+ 'znaków';
//       }else{
//         elMsg.textContent = '';
//       }
// }


//     elUserName.addEventListener('blur', function(){
//         checkUsername(4)
//     },false);
 ///////////////////////////////////////////////////////////////////
 
 
 function setup(){
   var textInput = document.getElementById('username');

   textInput.focus();
 }

 window.addEventListener('load', setup, false)
 ////////////////////////////////////////////////////////////

 function checkUsername(){
   var username = el.value;
      if(username.length < 5){
        elMsg.className = 'warning';
        elMsg.textContent = 'Nazwa nadal zbyt krótka';
      }else{
        elMsg = '';
      }
 }

 function tipUsername(){
   elMsg.className = 'tip';
   elMsg.textContent = 'Nazwa uzytkownika musi miec przynajminej 5 znaków'
 }


 var el = document.getElementById('username');
 var elMsg = document.getElementById('feedback')


 el.addEventListener('focus', tipUsername, false);
 el.addEventListener('blur', checkUsername, false)
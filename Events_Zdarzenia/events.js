function checkUsername() {
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('username');
    if (elUsername.value.length < 5) {
      elMsg.textContent = 'Nazwa urzytkownika musi miec prznyjamniej 5 znaków';
    } else {
      elMsg.textContent = '';                            
    }
  }
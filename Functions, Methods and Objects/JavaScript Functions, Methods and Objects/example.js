(function() {

   
    var hotel = {
      name: 'U Jadzi',
      roomRate: 240,
      discount: 15, 
      offerPrice: function() {
        var offerRate = this.roomRate * ((100 - this.discount) / 100);
        return offerRate;
      }
    };
  
    
    var hotelName, roomRate, specialRate;                    
  
    hotelName = document.getElementById('hotelNameExamole');       
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');
  
    hotelName.textContent = hotel.name;                      
    roomRate.textContent =  hotel.roomRate.toFixed(2) + 'zł';
    specialRate.textContent =  hotel.offerPrice() + 'zł';
  
    var expiryMsg; 
    var elEnds;    
  
    function offerExpires(today) {
    
      var weekFromToday, day, date, month, year, dayNames, monthNames;
  
    
      weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  
   
      dayNames = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
      monthNames = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpien', 'Wrzesień', 'Parzdziernik', 'Listopad', 'Grudzień'];
  
      day = dayNames[weekFromToday.getDay()];
      date = weekFromToday.getDate();
      month = monthNames[weekFromToday.getMonth()];
      year = weekFromToday.getFullYear();
  
      expiryMsg = 'Oferta wygasa ';
      expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
      return expiryMsg;
    }
  
    today = new Date();                             
    elEnds = document.getElementById('offerEnds'); 
    elEnds.innerHTML = offerExpires(today);        
  
  }());
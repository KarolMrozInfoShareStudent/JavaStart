var hotel2 = {
    name : 'Oaza',
    rooms : 30,
    booked : 25,
    checkAvailability : function() {
      return this.rooms - this.booked; 
    }
  };
  

  var elName = document.getElementById('hotelName'); 
  elName.textContent = hotel2.name;                   
  
  var elRooms = document.getElementById('rooms');    
  elRooms.innerHTML = hotel2.checkAvailability(); 
  

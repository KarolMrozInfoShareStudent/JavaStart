var hotel = {
    name : 'Park',
    rooms : 31,
    booked : 25,
    checkAvailability : function() {
      return this.rooms - this.booked; 
    }
  };
  

  var elName = document.getElementById('hotelName2'); 
  elName.textContent = hotel.name;                   
  
  var elRooms = document.getElementById('rooms2');    
  elRooms.innerHTML = hotel.checkAvailability(); 
  

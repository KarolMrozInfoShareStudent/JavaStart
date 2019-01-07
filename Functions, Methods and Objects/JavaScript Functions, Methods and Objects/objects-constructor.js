var hotel3 = new Object();

hotel3.name = "Park3";
hotel3.rooms = 32;
hotel3.booked = 25;
hotel3.checkAvailability3 = function(){
    return this.rooms - this.booked;
};

var elName3 = document.getElementById("hotelName3");
    elName3.textContent = hotel3.name;

var elRooms3 = document.getElementById("rooms3");
    elRooms3.innerHTML = hotel3.checkAvailability3();
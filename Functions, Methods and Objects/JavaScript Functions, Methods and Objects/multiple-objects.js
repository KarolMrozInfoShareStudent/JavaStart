function Hotel (name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailabilityH = function(){
        return this.rooms - this.booked;
    };
}


var oazaHotel = new Hotel ('Oaza', 30, 25);
var parkHotel = new Hotel ('Park', 31, 25);

var details1 = 'pokoje w hotelu ' + oazaHotel.name + ': ';
    details1 += oazaHotel.checkAvailabilityH();

var elHotel1 = document.getElementById("hotel1");
    elHotel1.textContent = details1;



var details2 = 'pokoje w hotelu' + parkHotel.name + ': ' + parkHotel.checkAvailabilityH();

var elHotel2 = document.getElementById("hotel2");
    elHotel2.innerHTML = details2
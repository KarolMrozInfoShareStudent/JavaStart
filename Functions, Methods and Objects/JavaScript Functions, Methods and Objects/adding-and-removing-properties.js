var hotel4 = {
    name : 'Park4',
    rooms : 120,
    booked : 77.

};


hotel4.gym = false
hotel4.pool = true;
delete hotel4.booked;


var elName4 = document.getElementById('hotelName4');
    elName4.innerHTML = hotel4.name;

var elPoll4 = document.getElementById('pool')    ;
    elPoll4.className = hotel4.pool;

var elGym4 = document.getElementById('gym');
    elGym4.className = hotel4.gym
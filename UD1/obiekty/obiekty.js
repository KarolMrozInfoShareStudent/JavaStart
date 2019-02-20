var div = document.getElementById('one');

div.innerHTML = "nowa treść";

function person(imie, nazwisko, wiek)
{
    this.name = imie;
    this.surname = nazwisko;
    this.age = wiek;
    this.toString =function()
    {
        return this.name + " " + this.surname + " " + this.age;
    };
}
var x = new person("Karol", "Mróz", 5);
var y = new person("Stefan", "Kozaki", "55")
var z = new person("Joanna", "Dzonski", "30" )

person.prototype.specifiedValue = 12
div.innerHTML = x.specifiedValue + "<br>" + y + "<br>" + z
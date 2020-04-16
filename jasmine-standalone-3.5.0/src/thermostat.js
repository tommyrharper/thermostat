function Thermostat() {
  this.temp = 20;
  this.savingOn = false;
}

Thermostat.prototype.increase = function(degrees) {
  this.temp += degrees
  if (this.temp > 25 && this.savingOn == true) {
    this.temp = 25;
  } else if (this.temp > 32) {
    this.temp = 32
  }
}

Thermostat.prototype.decrease = function(degrees) {
  this.temp -= degrees
  if (this.temp < 10) {
    this.temp = 10;
  }
}

Thermostat.prototype.powerSavingOn = function() {
  this.savingOn = true;
  if (this.temp > 25) {
    this.temp = 25
  }
}

function Thermostat() {
  this.DEFUALT_TEMP = 20;
  this.HIGH_USAGE = 25;
  this.MEDIUM_USAGE = 18
  this.temp = this.DEFUALT_TEMP;
  this.savingOn = true;
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

Thermostat.prototype.powerSavingOff = function() {
  this.savingOn = false;
}

Thermostat.prototype.reset = function() {
  this.temp = this.DEFUALT_TEMP;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temp >= this.HIGH_USAGE) {
    return 'high-usage'
  } 
  if (this.temp >= this.MEDIUM_USAGE) {
    return "medium-usage"
  }
    return "low-usage"
}
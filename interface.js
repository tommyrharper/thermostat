$(function() {  
  var thermostat = new Thermostat()

  var updateTemp = function() {
    $("#temp").html(thermostat.temp)
    $("#energy-usage").html(thermostat.energyUsage())
    $("#temp").attr("class", thermostat.energyUsage())
  }
  var setPowerSavingMode = function(onOrOff) {
    $("#powersaving-mode").html(onOrOff)
  }
  $("#temp-increase").click(function() { 
    thermostat.increase(1);
    updateTemp()
  })
  $("#temp-decrease").click(function() { 
    thermostat.decrease(1);
    updateTemp()
  })
  $("#reset").click(function() { 
    thermostat.reset();
    updateTemp()
  })
  $("#powersaving-on").click(function() { 
    thermostat.powerSavingOn();
    updateTemp()
    setPowerSavingMode("On")
  })
  $("#powersaving-off").click(function() { 
    thermostat.powerSavingOff();
    updateTemp()
    setPowerSavingMode("Off")
  })
  updateTemp()
  setPowerSavingMode("On")
})

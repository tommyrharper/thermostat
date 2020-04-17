$(function() {  

  var thermostat = new Thermostat()

  $("#update-weather").click(function(e) {
    e.preventDefault()
    var city = $('#location').val();
    updateWeather(city)
  })

  var updateWeather = function(city) {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#london-weather').text("Weather: " + data.weather[0].description)
      $('#london-temp').text("Temperature: " + data.main.temp + "°C")
    })
  }

  var updateTemp = function() {
    $("#temp").html(thermostat.temp)
    $("#energy-usage").html(thermostat.energyUsage())
    $("#temp").attr("class", thermostat.energyUsage())
    $("#temp2").attr("class", thermostat.energyUsage())
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

$("#powersaving-switch").click(function() { 
if (thermostat.savingOn == true) {
  thermostat.powerSavingOff();
  updateTemp()
  $("#powersaving-switch").text("Powersaving Off")
} else {
  thermostat.powerSavingOn();
  updateTemp()
  $("#powersaving-switch").text("Powersaving On")
}
})

  updateTemp()
  setPowerSavingMode("On")
  updateWeather()
})

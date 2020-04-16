
describe('Thermostat', function() {
    var thermostat;
  
    beforeEach(function() {
      thermostat = new Thermostat()
    });

    it ( "Has has a starting temp of 20", function () {
        expect (thermostat.temp).toEqual(20)
    }) 

    it('temp can be increased', function() {
      thermostat.increase(2)
      expect(thermostat.temp).toEqual(22)
    })

    it('temp can be decreased', function() {
      thermostat.decrease(2)
      expect(thermostat.temp).toEqual(18)
    })

    it('temp has minimum value of 10', function() {
      thermostat.decrease(11)
      expect(thermostat.temp).toEqual(10)
    })

    it('temp has maximum value of 25 when power saving is on', function() {
      thermostat.powerSavingOn()
      thermostat.increase(6)
      expect(thermostat.temp).toEqual(25)
    })

    it('when power saving is turned on, if the temp is above 25 it gets set to 25', function() {
      thermostat.increase(6)
      thermostat.powerSavingOn()
      expect(thermostat.temp).toEqual(25)
    })

    it('temp has maximum value of 32 when power saving is off', function(){
      thermostat.increase(100)
      expect(thermostat.temp).toEqual(32)
    })
}); 


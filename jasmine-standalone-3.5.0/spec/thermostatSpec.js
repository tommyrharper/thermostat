
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
      thermostat.powerSavingOff()
      thermostat.increase(100)
      expect(thermostat.temp).toEqual(32)
    })

    it('power saving mode is on by default', function() {
      expect(thermostat.savingOn).toEqual(true)
    })

    it('reset can be used to reset temp to 20', function() {
      thermostat.increase(10)
      thermostat.reset()
      expect(thermostat.temp).toEqual(20)
    })

    describe('energyUsage', function(){

      it('returns low-usage when temp is less than 18', function(){
        thermostat.decrease(3)
        expect(thermostat.energyUsage()).toEqual("low-usage")
      })

      it('returns medium-usage when temp is less than 25 but not less than 18', function(){
        expect(thermostat.energyUsage()).toEqual("medium-usage")
      })

    })
}); 



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

    
}); 


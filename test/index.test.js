/* test/test.js */
const route = require('../index');
const expect = require('chai').expect;
const location = {lat: 37.4219999, lng: -122.0840575}
const radius = 200; // 5km
describe('#route()',  () => {
    context('with places',  () => {
        it('should result places',  (done) => {
            route.findPlaces(location, radius, 'electric_vehicle_charging', process.env.API_KEY,(results) => {
                console.log('Datas => ', results)
                expect(results).to.not.be.null;
                done(); // Testinizin tamamlandığını bildirmek için done() fonksiyonunu çağırın
            });
        })
    });
})

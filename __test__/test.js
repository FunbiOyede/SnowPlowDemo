const supertest = require("supertest");
const app = require('../index')
const request = supertest(app);
const {clearMicroCache,GetNumberOfEvents, Delay} = require('./util/util')


 //After every test clear micro cache
  beforeEach(async () => {

  const response = await clearMicroCache();
    expect(response.data.total).toBe(0);
    expect(response.data.good).toBe(0);
    expect(response.data.bad).toBe(0);

});


describe("/STATUS", () => {

  it('Number of good events should be equals 1 and bad events equals 0 when the uptime of the server is checked', async ()=>  {

    const response = await request
    .get('/status')
    .set('Accept', 'application/json');
    expect(response.status).toBe(200);
  
  
    //delay
    await Delay(1000)
  
    const data = await GetNumberOfEvents();
    expect(data.good).toBe(1);
    expect(data.bad).toBe(0);
  });

  

});


describe("/Bookings", () => {

  it('Number of good events should be equals 1 and bad events equals zero when list of bookings is fetched', async ()=>  {

    const response = await request
    .get('/bookings')
    .set('Accept', 'application/json');
    expect(response.status).toBe(200);


    //delay
    await Delay(1000)

 const data = await GetNumberOfEvents();
 expect(data.good).toBe(1);
 expect(data.bad).toBe(0);
});

it('Number of good events should be equals 1 and bad events equals zero when a booking is made', async ()=>  {

    const response = await request
    .post('/booking')
    .set('Accept', 'application/json');
    expect(response.status).toBe(201);
    //delay
    await Delay(1000)
        
 const data = await GetNumberOfEvents();
 expect(data.good).toBe(1);
 expect(data.bad).toBe(0);

});


    it('Number of good events should be equals 1 and bad events equals zero when a booking is canceled', async ()=>  {

    const response = await request
    .delete('/cancel/booking')
    .set('Accept', 'application/json');
    expect(response.status).toBe(202);
    //delay
    await Delay(1000)
      
    const data = await GetNumberOfEvents();
    expect(data.good).toBe(1);
    expect(data.bad).toBe(0);
    });






 });

  

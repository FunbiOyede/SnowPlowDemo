 const {client } = require('../util/redis');
 const bookingData = require('../data/booking.json')
class Service{

    async CreateBooking(userId) {
        try {
      
          const booking = await client.set(userId,JSON.stringify(bookingData));
         return booking;
        } catch (error) {
          console.log(error)
        
        }
      }

      async AllBookings(userId){
        try {
          const bookings = await client.GET(userId);
         return JSON.parse(bookings);
        } catch (error) {
          console.log(error)
    
        }
        
      }

      async CancelBooking(userId) {
        try {
          const booking = await client.del(userId);
         return booking
        } catch (error) {
          console.log(error)
  
        }
        
      }

  


}

module.exports = new Service();
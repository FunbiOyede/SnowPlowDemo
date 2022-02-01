
const express = require("express"),
cors = require("cors"),
bodyParser = require("body-parser"),
http = require('http'),
service = require("./services/service");
const TrackEvent = require('./util/tracker');
const {connectClient} = require('./util/redis')

const user = {
  userId: '1',
    userName: "PeterParker",
}

//express config
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//redis connection
connectClient();

app.get("/status", async (req, res) => {
  const event =  TrackEvent({ category: 'Server Uptime', action: 'uptime' })
    res.status(200).json({ message: "Ready!, Up and running", event});
  });


app.post("/booking", async (req,res) =>{
   const booking = await service.CreateBooking(user.userId);
   const reponse =  TrackEvent({ category: 'hotel booking', action: 'booking' })
   res.status(201).json({message:'booking successful', booking, event:reponse});
   
})

app.get("/bookings", async (req,res) =>{
  const bookings = await service.AllBookings(user.userId);
  const reponse =  TrackEvent({ category: 'hotel booking', action: 'All bookings' })
  res.status(200).json({message:'booking successful', bookings, event:reponse});
})

app.delete('/cancel/booking', async(req,res) =>{
  const booking = await service.CancelBooking(user.userId);
  const reponse =  TrackEvent({ category: 'hotel booking', action: 'All bookings' })
  res.status(202).json({message:'booking successful', booking, event:reponse});
})


const server = http.createServer(app);

server.listen(3000, () =>{
    console.log("server started")

})

module.exports = app
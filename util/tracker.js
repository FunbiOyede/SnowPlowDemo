const {tracker, gotEmitter, HttpProtocol,HttpMethod, buildStructEvent} = require('@snowplow/node-tracker');

//event
const emitter = gotEmitter('127.0.0.1',HttpProtocol.HTTP,9090,HttpMethod.POST,1,5);

const eventTracker = tracker(emitter,'snowplowProject','snowplowDemo',false);

const TrackEvent = (event) => eventTracker.track(buildStructEvent(event));


 
 module.exports = TrackEvent;
    


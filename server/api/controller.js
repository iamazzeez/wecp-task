
const Events = require('./schema/events');

module.exports = function(app) {
 

//Create User Actions
app.post('/event', (req,res, next) => {
  const event = new Events({
    userId: req.body.userId,
    eventType: req.body.eventType,
    image: req.body.image
  });
  console.log(event);
   event.save()
   .then(result =>  res.send(result))
   .catch(err => res.send(err))
      
})
  

  //Get User Actions 
  app.get('/:id/admin', (req, res) => {  
  
    Events.find({userId: req.params.id})
    .then(actions => {
      res.json(actions);
    })
    .catch(error => {
      res.json(error);
    });
  });


  

};


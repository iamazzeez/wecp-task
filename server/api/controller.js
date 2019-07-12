
const User = require('./schema/user');

module.exports = function(app) {
 

//Create User Actions
app.post('/:id', (req,res, next) => {
  const user = new User({
      _id: req.params.id,
      actions: req.body.actions
  })
   user.save()
   .then(result =>  res.send(result))
   .catch(err => res.send(err))
      
})
  

  //Get User Actions 
  app.get('/:id/admin', (req, res) => {  
  
    User.find({_id: req.params.id})
    .then(actions => {
      res.json(actions);
    })
    .catch(error => {
      res.json(error);
    });
  });


  

};


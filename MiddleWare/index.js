//middleWare are function that are pass by argument for the action method of express like get ,post... and we use  `use` method to use 
//middle ware for all action imoplemented in the server part.



const express = require('express');

const app = express();
//defint a function(middleware) which will authenicate the user.
function auth(req,res,next){
    let username = req.headers.username;
    let password = req.headers.password;
    if((username != "princeprakhar" && password != "prince"))
    {
      //implentmenting the logic on the username and password.
        res.status(400).json({
          "msg":"Something up with the inputs"
        })
    
    }
    next();
}
// defining the middleWare which will authencicate kidneyId
function authKidney(req,res,next)
{
  let kidneyId = req.query.kidneyId;
  if(kidneyId !=1  && kidneyId !=2)
  {
    res.status(400).json({"msg":" something up with your code"});
  }
  next();
}

//defing the get action.
app.get('/health-checkup', auth, authKidney, function (req,res){
 
  res.json({
    "msg":"Your kidney is fine."
  });
});
app.listen(3000);

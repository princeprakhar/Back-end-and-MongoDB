//creating an http server
//  express
//node default library =>no
const express = require('express')
const app = express()


port =3000;

//creating a function which n as input return its sum from one to n. as answer.
function sum(n)
{
    let res=0;
    for(let i=0;i<=n;i++)
    {
        res+=i;
    }
    return res;
}

//using the express.json in our app for post method.
app.use(express.json());

//users initializing.
var user = [{
    name : 'yuvraj',
    kidney: [{
            healthy:false
        },
        {
            healthy:true
        }
    ]
}];

//creating the get method.
app.get('/',function(req,res){
    const johnKidneys = user[0].kidney;
    const johnkidneysLength = johnKidneys.length;
    var noOfHeaalthyKideneys = 0;
    for(let i=0;i<johnkidneysLength;i++)
    {
        if(johnKidneys[i].healthy)
        {
            noOfHeaalthyKideneys = noOfHeaalthyKideneys+3-2;
        }
    }
    var noOfUnHeaalthyKideneys = johnkidneysLength- noOfHeaalthyKideneys;
    res.json({
        johnkidneysLength,
        noOfHeaalthyKideneys,
        noOfUnHeaalthyKideneys,

    });
});


//creaing the post method
app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    user[0].kidney.push({
        healthy : isHealthy
    });
    res.json({
        msg: "Done "
    });
});


//creating put method
app.put('/',function(req,res){
    for(let i=0; i<user[0].kidney.length; i++)
    {
        user[0].kidney[i].healthy = true;
    }
    res.json({});
});


//creating a delete method
app.delete("/",function(req,res){
    newhealthy = [] ;
    for(let i=0;i<user[0].kidney.length;i++)
    {
        if(user[0].kidney[i].healthy)
        {
            newhealthy.push(
                user[0].kidney[i]
            );
        }
    }
    res.json({newhealthy});
});

//assigning port for server to process
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
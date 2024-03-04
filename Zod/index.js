const express = require("express");
const z = require("zod");
 app = express();
 //defining a schema for validation purpose;
 const validationSchema = z.object({
    "username":z.string().email(),
    "password": z.string().min(8)
 });
app.use(express.json());
//defining the post method to verify the username and pasword validation.
app.post('/login',function(req,res){
    const username = req.body;
    if(validationSchema.safeParse(username).success )
    {
        res.send({
            msg : "valid input for the login"
        });
        return;
    }
    res.status(500).send(validationSchema.safeParse(username));
});
app.listen(3000);




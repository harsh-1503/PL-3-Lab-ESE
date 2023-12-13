const express = require('express')
const app = express();
const connectDB = require('./db')
const userSchema = require('./schema')
const port = 4000
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.post('/submitForm', async (req, res) => {
    try {
        const { name,
            mobile,
            idProof,
            address,
            userId,
            department,
            class1,
            password } = req.body
    
            const user = new userSchema({
                name:name,
            mobile:mobile,
            idProof:idProof,
            address:address,
            userId:userId,
            department:department,
            class1:class1,
            password:password
            })    
            await userSchema.save();
                res.json({
                    success:true,
                    data
                })
    } catch (error) {
        console.log(error);
        res.json({success:"An Error Occured"})
    }

})

app.listen(() => {
    console.log(`Server is listening at port ${port}`);
    connectDB();
})
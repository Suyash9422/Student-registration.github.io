const express = require("express");
const cors = require('cors');
const path = require("path");
const app = express();
require("./db/conn");
const Register = require("./models/stud_registers");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname,"../public");
const allowedOrigins = ['https://suyash9422.github.io/Student-registration.github.io/'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.get("/",(req, res) => {
    res.render("index")
});
app.post("/index",async(req, res) => {
    try {

        const registerStud = new Register({
            name: req.body.name,
            class: req.body.class,
            rollno: req.body.rollno,
            email: req.body.email,
            pass:req.body.pass
        })

        const registered = await registerStud.save();
        res.status(201).render("quiz-1");

    } catch (error){
        res.status(400).send(error);
    }
});
app.get("/quiz-1",(req,res) =>{
    res.render("quiz-1")
})
app.listen(port, () => {
    console.log('Server is running at port no ${port}');
});
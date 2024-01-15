const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Register = require("./models/register"); // Updated model name

const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const dburl = "mongodb+srv://ps133937:lmzavBuill2NxP93@cluster0.ntijrig.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (request, response) => {
  Register.find() // Updated model name
    .then(result => {
      response.render("index", { data: result });
      console.log(result);
    });
});

app.post("/", (request, response) => {
    const register = new Register({
      name: request.body.name,
      mobile: request.body.mobile,
      whatsapp: request.body.whatsapp,
      college: request.body.college,
      class: request.body.class,
    });
  
    register.save()
      .then(result => {
        console.log("Registration added:", result);
        response.redirect("/");
      })
      .catch(error => {
        console.error("Error adding registration:", error);
        response.status(500).send("Error adding registration");
      });
  });
  

app.delete("/:id", (request, response) => {
  Register.findByIdAndDelete(request.params.id) // Updated model name
    .then(result => {
      console.log(result);
      response.send("Registration deleted successfully");
    })
    .catch(error => {
      console.error("Error deleting registration:", error);
      response.status(500).send("Error deleting registration");
    });
});

app.listen(port, () => {
  console.log("Server is running fast on port " + port);
});

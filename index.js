const express = require("express");
const app = express();
app.use((req, res, next) =>{
    var time = new Date
    
    if ((time.getDay() == 0 || time.getDay() == 6) && (time.getHours() > 19 || time.getHours() < 9)) {
        res.type('html')
        res.write('<h1>service disponible du lundi au vendredi et de 9h a 17h</h1>', 'utf8');
        res.status(404).end()
    }
    next();
});
app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/services", (req, res) => {
    res.render("services");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.listen(8080, () => console.log(`Server active sur http://localhost:8080`));
const express = require ('express');
const path = require ('path');
const hbs = require ('hbs');

const app=express();
const port = process.env.PORT || 9000;
const staticPath = path.join(__dirname , "../public");
const template_path = path.join(__dirname , "../templates/views");
const partials_path = path.join(__dirname , "../templates/partials");
app.set('view engine','hbs');
app.set('views',template_path);
app.use(express.static(staticPath));
hbs.registerPartials(partials_path);

app.get("",(req,res)=>{
    res.render('index')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render('404err',{
        errormessage:'OOPS PAGE NOT FOUND'
    })
})
app.listen(port,()=>{
    console.log(`listening to the port at ${port}`)
})
const express=require('express');
const port=1020;
const app=express();
const path=require('path');
const checkpost=(req,res,next)=>{
  let id=req.query.id;
  if(id>=18){
  return next()  
}else{
    return res.render('index')
}
}

app.use(express.static(path.join(__dirname,"/public")))

app.set('view engine','ejs');
//index
app.get('/',(req,res)=>{
    return res.render('index');
})
//sample
app.get('/sample',checkpost,(req,res)=>{
    return res.render('sample');
})
//table
app.get('/table',checkpost,(req,res)=>{
    return res.render('table');
})
//typography
app.get('/typography',checkpost,(req,res)=>{
    return res.render('typography');
})
//icon
app.get('/icon',checkpost,(req,res)=>{
    return res.render('icon');
})
//form
app.get('/form',checkpost,(req,res)=>{
    return res.render('form');
})
//dropdown
app.get('/dropdown',checkpost,(req,res)=>{
    return res.render('dropdown');
})
//documentation
app.get('/documentation',checkpost,(req,res)=>{
    return res.render('documentation');
})
//chart
app.get('/chart',checkpost,(req,res)=>{
    return res.render('chart');
})
//button
app.get('/button',checkpost,(req,res)=>{
    return res.render('button');
})


app.set(checkpost);

app.listen(port,(err)=>{
    if(err){
        console.log('port not start');
    }
    console.log('port start'+port);
})
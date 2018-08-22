var exp=require('express');
var app=exp();
app.use(exp.static(__dirname +"/public"));
app.get('/player',function(req,res)
{
    var query=req.query;
    console.log("query value"+ JSON.stringify(query));
    res.write("name ="+query.name);
    res.end("class ="+query.class);
    res.end(JSON.stringify(query));
})
var port=process.env.PORT || 40000;
app.listen(port,function()
{
    console.log("sever is running in 40000");
})
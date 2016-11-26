/*jshint asi:true,node: true*/
"use strict"
var express = require('express')
var app = express()
app.use('/:time',function(req,res){
    var time = req.params.time
    var unixtime = null
    var naturaltime = null
    var date = null
    if(!isNaN(time)){
        unixtime = time
        date = new Date(Number(time)*1000)
        naturaltime=monthName[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()
    }else if(!isNaN(Date.parse(time))){
        date = new Date(time)
        unixtime = Date.parse(date)/1000
        naturaltime = time
    }
    var obj = {unix:unixtime,natural:naturaltime}
    // var obj = showdate(date)
    res.send(JSON.stringify(obj))
})
app.listen(3000);
var monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:3000/');
});

app.get('/', call); 

function call(req, res) { 
  var spawn = require("child_process").spawn; 
  var process = spawn('python',["print.py", req.query.ecg, req.query.emg, req.query.HR, req.query.RESP, req.query.footGSR, req.query.handGSR, req.query.NNRR, req.query.AVNN, req.query.SDNN, req.query.RMSSD, req.query.pNN50]); 
  process.stdout.on('data', function(data) { 
    var level = data.toString();
    if(level.toString().trim() === 'low')
      res.sendFile('/mnt/c/PythonVirtualEnvironment/low.html');
    else if ( level.toString().trim() == 'medium')
      res.sendFile('/mnt/c/PythonVirtualEnvironment/medium.html');
    else if ( level.toString().trim() == 'high')
      res.sendFile('/mnt/c/PythonVirtualEnvironment/high.html');   
    else
      res.send(data.toString());
  } ) 
} 


app.get('/data', second); 

function second(req, res) { 
  var spawn = require("child_process").spawn; 
  var process = spawn('python',["printing.py", req.query.one, req.query.two, req.query.three, (4-req.query.four), (4-req.query.five), req.query.six, (4-req.query.seven), req.query.eight, req.query.nine, req.query.ten]); 

  process.stdout.on('data', function(data) {
    var level = data.toString();
    if(level.toString().trim() === 'low')
      res.sendFile('/mnt/c/PythonVirtualEnvironment/low.html');
    else if (level.toString().trim() === 'medium')
      res.sendFile('/mnt/c/PythonVirtualEnvironment/medium.html');
    else
      res.sendFile('/mnt/c/PythonVirtualEnvironment/high.html');   
  } ) 
} 
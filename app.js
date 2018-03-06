var express = require('express');
var port = process.env.PORT || 80;
var app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();


app.listen(port, function() {
  console.log('Chatfuel Bot-Server listening on port 80...');
});
app.get('/api', function(req, res) {
	var jsonResponse = [];
var Chatfueldata = req.query.field1;
// jsonResponse.push({ "text": "Hell yeah! You got "+ field1 +" from Chafuel" });

xhr.onreadystatechange = function () {

    if (this.readyState != 4) return;
    console.log('send status', this.status)
    if (this.status == 200) {
        xhr2.open("GET", "https://api.thingspeak.com/channels/432121/fields/1.json?results=1", true);
        xhr2.send();

        // we get the returned data
    }

    // end of state change: it can be after some time (async)
};
xhr2.onreadystatechange = function () {

    if (this.readyState != 4) return;

    if (this.status == 200) {
        var data = JSON.parse(this.responseText);
        var lijst= JSON.stringify(data.feeds)
       // console.log(jsonResponse);
       //jsonResponse.push({ "text": "En je we krijgen data van Chatfuel nl:"+data.feeds[0].field1+" naar thingspeak" });
       res.send(jsonResponse);



        // we get the returned data
    }

    // end of state change: it can be after some time (async)
};



xhr.open("GET", "https://api.thingspeak.com/update?api_key=2NKZDTZS094GBVN4&field1="+Chatfueldata, true);
xhr.send();


		jsonResponse.push({ "text": "Your wish is my command" });
});



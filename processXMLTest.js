sax = require('sax'),
    fs = require('fs');

var data ="";
var from, 
to,
firstStop;

parser = sax.parser(false, {
    trim: true
});

parser.ontext = function(t) {
    if(parser.tag.name === "ODVNAMEELEM" && t !== "") {
        if(!from){
            from = t;
        } else {
            to = t;
        }
    }
    if(parser.tag.name === "ITDODVASSIGNEDSTOP" && t !== "") {
        if(!firstStop){
            firstStop = t;
        }
    }
};

parser.onattribute = function (attr) {
    //console.log(parser.tag.name, attr);

  // an attribute.  attr has "name" and "value"
};

parser.onopentag = function(node) {
console.log(parser.tag.name, parser.tag.attributes);
    };

parser.onend = function(){
    data += "from: " + from
            + " - to: " + from
            + " - first sstop : " + firstStop;
    console.log(data);
}

try {
    var file_buf = fs.readFileSync('./tflResponse.xml');
    parser.write(file_buf.toString('utf8')).close();
} catch(ex) {
    console.log(ex);
// keep 'em silent
}
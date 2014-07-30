var https = require('https');

exports.createSession = createSession;


function createSession(username, password) {
  return new Session(username, password);
}

function Session(username, password) {
  this.username = username;
  this.password = password;
  this.base = 'https://live.bullionvault.com/secure/api/v2/';
  this.cookie = false;
}


Session.prototype.viewMarket = function(currency, security, min_quantity, width) {
  var response = https_get(this.base + 'view_market_xml.do');
} 




function https_get(url, callback) {
  https.get(url, function(res) {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    this.cookie = headers['set-cookie'];
    var buf = '';
    res.on('data', function(data) {
      console.log('data', data);
      buf += data;
    });
    res.on('error', function(error) {
      console.log('error', error);
      callback(error);
    });
    res.on('end', function() {
      callback(null, buf);
    });
  });
}

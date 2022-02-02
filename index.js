let express = require('express');
let mustacheExpress = require('mustache-express');
let bodyParser = require('body-parser');

let app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());
app.use (bodyParser.urlencoded( {extended : true} ) );

app.use(express.static('wwwroot'));

app.get ('/', function(req,res) {
    res.render('index', {pageTitle: "Home"});
});

app.get ('/qualifications', function(req,res) {
    res.render('qualifications', {pageTitle: "Qualifications"});
});

app.get ('/portfolio', function(req,res) {
    res.render('portfolio', {pageTitle: "Portfolio"});
});

app.listen(5014,function() {
    console.log("Running on port 5014.");
});

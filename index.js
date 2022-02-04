let express = require('express');
let mustacheExpress = require('mustache-express');
let bodyParser = require('body-parser');
const fs = require('fs');

let app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());
app.use (bodyParser.urlencoded( {extended : true} ) );

app.use(express.static('wwwroot'));

app.get ('/', function(req,res) {
    res.render('index', {pageTitle: "Home"});
});

app.get ('/post', function(req,res) {
    res.render('post', {pageTitle: "Post"});
});

app.get ('/post/create', function(req,res) {
    res.render('create', {pageTitle: "Create Post"});
});

app.get ('/qualifications', function(req,res) {
    res.render('qualifications', {pageTitle: "Qualifications"});
});

app.get ('/portfolio', function(req,res) {
    const projectsFolder = './projects/';

    var projects = [];

    fs.readdirSync(projectsFolder).forEach(file => {
        const data = fs.readFileSync("./projects/" + file, 'utf8');
        var topush = JSON.parse(data);
        topush.id = file.split('.json')[0];
        projects.push(topush);
    })

    res.render('portfolio', {pageTitle: "Portfolio", projects: projects});
});

app.listen(5014,function() {
    console.log("Running on port 5014.");
});

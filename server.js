var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one':{
    title: 'Article one',
    heading: 'Article one',
    content: 'This is content for article one'
},
'article-two':{
    title: 'Article two',
    heading: 'Article two',
    content: 'This is content for article two'
},
'article-three':{
    title: 'Article three',
    heading: 'Article three',
    content: 'This is content for article three'
}
};
function createTemplate (data) {
     var title=data.title;
     var heading=data.heading;
     var content=data.content;
     var htmlTemplate= `<html>
     <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="con">
            <div>
                <a href="/">Home</a>
            </div>
            <div>
               <h3>${heading}</h3>
            </div>
            <div>
                <p>${content}</p>
            </div>
            </div>
        </body>
    
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter;
app.get('/counter', function (req, res) {
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/back.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'back.jpg'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

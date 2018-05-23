const express = require('express'); //do I need version num here? (doc shows)
const app = express();
const bodyParser = require('body-parser')

// var jsonParser = bodyParser.json()

app.use(express.static('client'));

app.get('/', (req, res) => {
	console.log(req.url);
	res.send('Hello World!');
});

// app.post('/converter', jsonParser, (req,res)=> {
// 	// console.log(req)
// 	console.log(req.body);
// 	res.send('hello world');
// });

var csvConverter = function(data) {
  //console.log(JSON.parse(data.slice(0,-1)))
  var dataToConvert = [JSON.parse(data.slice(0,-1))]; //removes the semicolon at the end which caused error
  //var columnName = [] //column names
  var names = []; //data
  var recursion = function(node) { //recurse to retrieve the data
    var currNode = node || dataToConvert[0];
    names.push(currNode.firstName);
    if (currNode.children){
      currNode.children.forEach(function(elem){
    	recursion(elem);
      });
    }
    //console.log(names)
  }
  recursion()
  console.log(names)
  //console.log(dataToConvert[0].firstName)
}

app.post('/converter', (req,res) => {
	var body = []
	req.on('data',(chunk) =>{
		body.push(chunk);
	}).on('end', () => {
		body = Buffer.concat(body).toString();
		console.log(body)
		csvConverter(body)
	})
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))



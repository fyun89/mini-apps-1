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

var dataToString = function(data) {
  //console.log(JSON.parse(data.slice(0,-1)))
  var dataToConvert = [JSON.parse(data.slice(0,-1))]; //removes the semicolon at the end which caused error
  //var columnName = [] //column stringDataArray
  var stringDataArray = []; //data
  var recursion = function(node) { //recurse to retrieve the data
    var currNode = node || dataToConvert[0];
    stringDataArray.push([currNode.firstName, currNode.lastName, currNode.county, currNode.city, currNode.role, currNode.sales]);
    if (currNode.children){
      currNode.children.forEach(function(elem){
    	recursion(elem);
      });
    }
  }
  recursion()
  var output = stringDataArray.reduce((reduction, arr)=>{
  	reduction = reduction + '<br>';
  	return reduction+= arr.join(',');
  })
  var columns = 'firstName,lastName,county,city,role,sales</br>'
  var finalOutput = columns + output;
  return finalOutput;
}

app.post('/converter', (req,res) => {
	var body = []
	req.on('data',(chunk) =>{
		body.push(chunk);
	}).on('end', () => {
		body = Buffer.concat(body).toString();
		//console.log(body)
		res.send(dataToString(body))
	})
})


app.listen(3000, () => console.log('CSV generator listening on port 3000!'))



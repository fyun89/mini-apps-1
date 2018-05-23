const express = require('express'); //do I need version num here? (doc shows)
const app = express();
const bodyParser = require('body-parser')

app.use(express.static('client'));

app.get('/', (req, res) => {
	console.log(req.url);
	res.send('Hello World!');
});


var dataToString = function(data) {
  var dataToConvert = [JSON.parse(data.slice(0,-1))]; //removes the semicolon at the end which caused error
  var stringDataArray = []; //data
  var recursion = function(node) { //recurse to retrieve the data
    var currNode = node || dataToConvert[0];
    stringDataArray.push([currNode.firstName, currNode.lastName, currNode.county, currNode.city, currNode.role, currNode.sales]);
    if (currNode.children){
      currNode.children.forEach(function(elem){
    	recursion(elem);
      });
    }
  };
  recursion();
  var output = stringDataArray.reduce((reduction, arr)=>{
  	reduction = reduction + '<br>';
  	return reduction+= arr.join(',');
  })
  var columns = 'firstName,lastName,county,city,role,sales</br>'
  var finalOutput = columns + output;
  return finalOutput;
};

app.post('/converter', (req,res) => {
	var body = []
	req.on('data',(chunk) =>{
		body.push(chunk);
	}).on('end', () => {
		body = Buffer.concat(body).toString();
		res.send(dataToString(body))
	});
});


app.listen(3000, () => console.log('CSV generator listening on port 3000!'))



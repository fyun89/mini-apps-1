const express = require('express'); //do I need version num here? (doc shows)
const app = express();

app.use(express.static('client'));

app.get('/', (req, res) => {
	console.log(req.url);
	res.send('Hello World!');
});

app.get('/test', (req,res)=> {
	res.send('HELLO');
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))


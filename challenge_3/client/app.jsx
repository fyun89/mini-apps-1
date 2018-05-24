class App extends React.Component {
	
	constructor(props) {
	  super(props);
	  this.state = {
	  	currentPage: 0,
	  	name: null,
	  	email: null,
	  	password: null,
	  	shipTo1: null,
	  	shipTo2: null,
	  	city: null,
	  	state: null,
	  	zip: null,
	  	phone: null,
	  	creditCard: null,
	  	exp: null,
	  	cvv: null,
	  	creditCardZip: null,
	  };
	}

	handleButtons() {
		if (this.state.currentPage === 0){
			this.setState({currentPage: 1})
		} else if (this.state.currentPage === 1) {
			this.setState({currentPage: 2})
		} else if (this.state.currentPage === 2) {
			this.setState({currentPage: 3})
		} else if (this.state.currentPage === 3) {
			this.setState({currentPage: 0})
		}
	}

	handleInput(event) {
		//console.log(event.target.id)
		var currInput = event.target.id
		this.setState({[currInput]: event.target.value})
	}

	render(){
		console.log(
	  	this.state.name,
	  	this.state.email,
	  	this.state.password,
	  	this.state.shipTo1,
	  	this.state.shipTo2,
	  	this.state.city,
	  	this.state.state,
	  	this.state.zip,
	  	this.state.phone,
	  	this.state.creditCard,
	  	this.state.exp,
	  	this.state.cvv,
	  	this.state.creditCardZip)
		var home
		var currentInput

		if (this.state.currentPage === 0) {
			home = <Home button={this.handleButtons.bind(this)} />;
		}else if (this.state.currentPage === 1) {
			home = <F1 button={this.handleButtons.bind(this)} type={this.handleInput.bind(this)} />; 
		}else if (this.state.currentPage === 2) {
			home = <F2 button={this.handleButtons.bind(this)} type={this.handleInput.bind(this)} />;
		}else if (this.state.currentPage === 3) {
			home = <F3 button={this.handleButtons.bind(this)} type={this.handleInput.bind(this)} />;
		}

		return (
			<div> 
				{home}
			</div>
		)
	}
}

var Home = (props) => (
	
	<button id="checkoutButton" onClick={props.button} >Checkout</button>
	
)

var F1 = (props) => (
	<div>
		<button id="nextButton1" onClick={props.button} >Next</button>
	 	<h4>Name</h4>
	 	<textarea onChange={props.type} cols="40" rows="2" placeholder="Your name here" id="name"></textarea>
		<h4 id="emailInput">Email</h4>
	 	<textarea onChange={props.type} cols="40" rows="2" placeholder="Your email here" id="email"></textarea>
	 	<h4>Password</h4>
	 	<textarea onChange={props.type} cols="40" rows="2" placeholder="Your password here" id="password"></textarea>
	</div>
)

var F2 = (props) => (
	<div>
		<button id="nextButton2" onClick={props.button} >Next</button>
	 	<h4>Ship-To Address</h4>
	 	<textarea onChange={props.type} cols="40" rows="2" placeholder="Your address here" id="shipTo1"></textarea>
	 	<br></br>
	 	<textarea onChange={props.type} cols="40" rows="2" placeholder="Additional address here" id="shipTo2"></textarea>
		<h4>City</h4>
	 	<textarea onChange={props.type} cols="40" rows="2" placeholder="City" id="city"></textarea>
	 	<h4>State</h4>
	 	<textarea onChange={props.type} cols="40" rows="2" placeholder="State" id="state"></textarea>
	 	<h4>Zip</h4>
	 	<textarea onChange={props.type} cols="40" rows="2" placeholder="Zip Code" id="zip"></textarea>
	 	<h4>Phone</h4>
	 	<textarea onChange={props.type} cols="40" rows="2" placeholder="Your phone number here" id="phone"></textarea>
	</div>
)

var F3 = (props) => (
	<div>
		<button id="nextButton3" onClick={props.button} >Purchse!</button>
	 	<h4>Credit Card</h4>
	 	<textarea onChange={props.type} cols="40" rows="2" id="creditCard"></textarea>
		<h4>Expiration Date</h4>
	 	<textarea onChange={props.type} cols="40" rows="2" id="exp"></textarea>
	 	<h4>CVV Code</h4>
	 	<textarea onChange={props.type} cols="40" rows="2" id="cvv"></textarea>
	 	<h4>Zip Code</h4>
	 	<textarea onChange={props.type} cols="40" rows="2" id="creditCardZip"></textarea>
	</div>
)


// const loadHome = <Home />
// const loadF1 = <F1 />
// const loadF2 = <F2 />
// const loadF3 = <F3 />

// var load = loadF1


ReactDOM.render(
	<App />, 
	document.getElementById('app')
);


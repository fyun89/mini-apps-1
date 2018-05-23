class App extends React.Component {
	
	constructor(props) {
	  super(props);
	  this.state = {
	  	currentPage: 0
	  };
	}

	checkoutButtonClickHandle() {
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

	render(){

		var home

		if (this.state.currentPage === 0) {
			home = <Home button={this.checkoutButtonClickHandle.bind(this)} />;
		}else if (this.state.currentPage === 1) {
			home = <F1 button={this.checkoutButtonClickHandle.bind(this)} />; 
		}else if (this.state.currentPage === 2) {
			home = <F2 button={this.checkoutButtonClickHandle.bind(this)} />;
		}else if (this.state.currentPage === 3) {
			home = <F3 button={this.checkoutButtonClickHandle.bind(this)} />;
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
	 	<textarea cols="40" rows="2" placeholder="Your name here" id="nameInput"></textarea>
		<h4 id="emailInput">Email</h4>
	 	<textarea cols="40" rows="2" placeholder="Your email here" id="emailInput"></textarea>
	 	<h4>Password</h4>
	 	<textarea cols="40" rows="2" placeholder="Your password here" id="passwordInput"></textarea>
	</div>
)

var F2 = (props) => (
	<div>
		<button id="nextButton2" onClick={props.button} >Next</button>
	 	<h4>Ship-To Address</h4>
	 	<textarea cols="40" rows="2" placeholder="Your address here" id="shipToInputLn1"></textarea>
	 	<br></br>
	 	<textarea cols="40" rows="2" placeholder="Additional address here" id="shipToInputLn2"></textarea>
		<h4>City</h4>
	 	<textarea cols="40" rows="2" placeholder="City" id="cityInput"></textarea>
	 	<h4>State</h4>
	 	<textarea cols="40" rows="2" placeholder="State" id="stateInput"></textarea>
	 	<h4>Zip</h4>
	 	<textarea cols="40" rows="2" placeholder="Zip Code" id="zipInput"></textarea>
	 	<h4>Phone</h4>
	 	<textarea cols="40" rows="2" placeholder="Your phone number here" id="phoneInput"></textarea>
	</div>
)

var F3 = (props) => (
	<div>
		<button id="nextButton3" onClick={props.button} >Purchse!</button>
	 	<h4>Credit Card</h4>
	 	<textarea cols="40" rows="2" id="creditCardInput"></textarea>
		<h4>Expiration Date</h4>
	 	<textarea cols="40" rows="2" id="expInput"></textarea>
	 	<h4>CVV Code</h4>
	 	<textarea cols="40" rows="2" id="cvvInput"></textarea>
	 	<h4>Zip Code</h4>
	 	<textarea cols="40" rows="2" id="zipCodeInput"></textarea>
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


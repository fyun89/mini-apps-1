class Welcome extends React.Component {
	render() {
		return <h1>Cart</h1>;
	}
}

class F1 extends React.Component {
	render() {
		return (
			<div>
			 	<h4>Name</h4>
			 	<textarea id="nameInput"></textarea>
				<h4 id="emailInput">Email</h4>
			 	<textarea id="emailInput"></textarea>
			 	<h4>Password</h4>
			 	<textarea id="passwordInput"></textarea>
			</div>

		)
	}
}

class F2 extends React.Component {
	render() {
		return (
			<div>
			 	<h4>Ship-To Address</h4>
			 	<textarea id="shipToInputLn1"></textarea>
			 	<textarea id="shipToInputLn2"></textarea>
				<h4>Email</h4>
			 	<textarea id="emailInput"></textarea>
			 	<h4>Password</h4>
			 	<textarea id="passwordInput"></textarea>
			</div>

		)
	}
}

class F3 extends React.Component {
	render() {
		return (
			<div>
			 	<h4>Credit Card</h4>
			 	<textarea id="creditCardInput"></textarea>
				<h4>Expiration Date</h4>
			 	<textarea id="expInput"></textarea>
			 	<h4>CVV Code</h4>
			 	<textarea id="cvvInput"></textarea>
			 	<h4>Zip Code</h4>
			 	<textarea id="zipCodeInput"></textarea>
			</div>

		)
	}
}

const Homepage = <Welcome name='Cart' />
const F1 = <F1 />
const F2 = <F2 />
const F3 = <F3 />

ReactDOM.render(
	element2, 
	document.getElementById('app')
)


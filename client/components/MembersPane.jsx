let {Input, Col} = ReactBootstrap;


MembersPane = React.createClass({

	getInitialState: function() {
		return {
			field: ''
		};
	},

	onAddMember(event) {
		event.preventDefault();
		var organization = Organization.at(this.props.organizationAddress)
		organization.addMember(this.state.field, {from: web3.eth.accounts[0]})
	},

	onFieldChange(event) {
		this.setState({
			field: event.target.value
		});
	},

	render() {

		let {field} = this.state;

		return (

	      	<Col xs={6} xsOffset={3}>
				<form onSubmit={this.onAddMember}>
			        <Input type="text" placeholder="Address of new member" label="Set value" value={field} onChange={this.onFieldChange}></Input>
			        <Input type="submit"></Input>
			     </form>  
			</Col>     
		);
	}

});
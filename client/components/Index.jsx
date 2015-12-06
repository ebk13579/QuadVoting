Index = React.createClass({

	getInitialState: function() {
		return {
			field: ''
		};
	},

	onFieldChange(event) {
		this.setState({
			field: event.target.value
		});
	},

	onCreateOrganization(event) {

		event.preventDefault();

		Organization.new({
			data: '6060604052606460066000505560006007600050555b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550600060056000508190555060006004600050819055505b61172a806100656000396000f3606060405236156100f8576000357c010000000000000000000000000000000000000000000000000000000090048063013cf08b146100fa57806308ae4b0c1461013c57806308d103f7146101685780630b1ca49a146101945780631cdc044b146101ac57806323b161ab146101cf57806327e235e3146101f25780632d87017c1461021e578063400e394914610241578063446a37e0146102645780634698d1101461027c578063612032651461029f57806361ebccfd146102d8578063790b71331461030257806383197ef014610323578063c34c356f14610332578063ca6d56dc1461034a578063d8af4d0e14610362576100f8565b005b6101106004808035906020019091905050610478565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61015260048080359060200190919050506103f0565b6040518082815260200191505060405180910390f35b61017e6004808035906020019091905050610430565b6040518082815260200191505060405180910390f35b6101aa6004808035906020019091905050610e63565b005b6101b9600480505061045d565b6040518082815260200191505060405180910390f35b6101dc6004805050610454565b6040518082815260200191505060405180910390f35b6102086004808035906020019091905050610415565b6040518082815260200191505060405180910390f35b61022b6004805050610466565b6040518082815260200191505060405180910390f35b61024e600480505061046f565b6040518082815260200191505060405180910390f35b61027a6004808035906020019091905050610c60565b005b610289600480505061044b565b6040518082815260200191505060405180910390f35b6102ac60048050506103ca565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103006004808035906020019091908035906020019091908035906020019091905050610806565b005b61032160048080359060200190919080359060200190919050506107b3565b005b6103306004805050610dcf565b005b6103486004808035906020019091905050610a44565b005b61036060048080359060200190919050506106b8565b005b6103c86004808035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509090919080359060200190919080359060200190919050506104ba565b005b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b60026000506020528060005260406000206000915090505481565b60036000506020528060005260406000206000915090505481565b60046000505481565b60056000505481565b60066000505481565b60076000505481565b60086000505481565b600960005081815481101561000257906000526020600020900160005b9150909054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610518576106b2565b600760005054420183101561052c576106b2565b83838360405161075780610fd383390180806020018481526020018381526020018281038252858181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156105a55780820380516001836020036101000a031916815260200191505b50945050505050604051809103906000f090506009600050805480600101828181548183558181151161060a5781836000526020600020918201910161060991906105eb565b8082111561060557600081815060009055506001016105eb565b5090565b5b5050509190906000526020600020900160005b83909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505060086000818150548092919060010191905055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055505b50505050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610714576107b0565b6001600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083021790555060046000818150548092919060010191905055506000600260005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055506107af600660005054826107b3565b5b50565b81600560008282825054019250508190555081600260005060008373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055505b5050565b6000600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151561084d57610a3e565b6001600260005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054101561088a57610a3e565b600183101561089857610a3e565b600260005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505483840211156108d657610a3e565b8190508073ffffffffffffffffffffffffffffffffffffffff166309eef43e33604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506020604051808303816000876161da5a03f11561000257505050604051805190602001501561096c57610a3e565b828302600260005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505403925050819055508073ffffffffffffffffffffffffffffffffffffffff166361ebccfd858533604051847c0100000000000000000000000000000000000000000000000000000000028152600401808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200193505050506000604051808303816000876161da5a03f11561000257505050610a3e565b50505050565b60006000829150600090505b8173ffffffffffffffffffffffffffffffffffffffff1663bfcddbbc604051817c01000000000000000000000000000000000000000000000000000000000281526004018090506020604051808303816000876161da5a03f11561000257505050604051805190602001508160ff161015610c5a578173ffffffffffffffffffffffffffffffffffffffff1663bfcddbbc604051817c01000000000000000000000000000000000000000000000000000000000281526004018090506020604051808303816000876161da5a03f11561000257505050604051805190602001508273ffffffffffffffffffffffffffffffffffffffff16633d79d1c8604051817c01000000000000000000000000000000000000000000000000000000000281526004018090506020604051808303816000876161da5a03f115610002575050506040518051906020015004600260005060008473ffffffffffffffffffffffffffffffffffffffff1663da58c7d985604051827c0100000000000000000000000000000000000000000000000000000000028152600401808260ff1681526020019150506020604051808303816000876161da5a03f115610002575050506040518051906020015073ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055505b8080600101915050610a50565b5b505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054141515610cbf57610dcb565b8190508073ffffffffffffffffffffffffffffffffffffffff166394f0873d604051817c01000000000000000000000000000000000000000000000000000000000281526004018090506020604051808303816000876161da5a03f1156100025750505060405180519060200150600360005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081905550610d6982610a44565b8073ffffffffffffffffffffffffffffffffffffffff166383197ef0604051817c01000000000000000000000000000000000000000000000000000000000281526004018090506000604051808303816000876161da5a03f115610002575050505b5050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610e6057600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141580610ef75750600160005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b15610f0157610fd0565b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690830217905550600460008181505480929190600190039190505550600260005060008273ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505460056000828282505403925050819055506000600260005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055505b50566060604052604051610757380380610757833981016040528080518201919060200180519060200190919080519060200190919050505b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055508260016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100b057805160ff19168380011785556100e1565b828001600101855582156100e1579182015b828111156100e05782518260005055916020019190600101906100c2565b5b50905061010c91906100ee565b8082111561010857600081815060009055506001016100ee565b5090565b505081600760005081905550806008600050819055505b505050610623806101346000396000f3606060405236156100b6576000357c01000000000000000000000000000000000000000000000000000000009004806306fdde03146100b857806309eef43e146101335780633197cbb61461015f5780633d79d1c81461018257806361ebccfd146101a557806378e97925146101cf57806383197ef0146101f257806394f0873d14610201578063bd108fd414610224578063bfcddbbc14610247578063d6b225be1461026a578063da58c7d91461028d576100b6565b005b6100c560048050506102cf565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156101255780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101496004808035906020019091905050610370565b6040518082815260200191505060405180910390f35b61016c60048050506103fb565b6040518082815260200191505060405180910390f35b61018f60048050506103e9565b6040518082815260200191505060405180910390f35b6101cd600480803590602001909190803590602001909190803590602001909190505061040d565b005b6101dc60048050506103f2565b6040518082815260200191505060405180910390f35b6101ff60048050506105c9565b005b61020e600480505061059b565b6040518082815260200191505060405180910390f35b61023160048050506103d7565b6040518082815260200191505060405180910390f35b6102546004805050610404565b6040518082815260200191505060405180910390f35b61027760048050506103e0565b6040518082815260200191505060405180910390f35b6102a36004808035906020019091905050610395565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60016000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103685780601f1061033d57610100808354040283529160200191610368565b820191906000526020600020905b81548152906001019060200180831161034b57829003601f168201915b505050505081565b600260005060205280600052604060002060009150909054906101000a900460ff1681565b600360005081815481101561000257906000526020600020900160005b9150909054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046000505481565b60056000505481565b60066000505481565b60076000505481565b60086000505481565b60096000505481565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561046957610596565b821561048657816004600082828250540192505081905550610499565b8160056000828282505401925050819055505b6001600260005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055506003600050805480600101828181548183558181151161052e5781836000526020600020918201910161052d919061050f565b80821115610529576000818150600090555060010161050f565b5090565b5b5050509190906000526020600020900160005b83909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555050818202600660008282825054019250508190555060096000818150548092919060010191905055505b505050565b600060056000505460046000505411156105bc57600190506105c6566105c5565b600090506105c6565b5b90565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610620575b5b56',
			from: web3.eth.accounts[0]
		},
		function(err, myContract) {
			if (!err) {
				// NOTE: The callback will fire twice!
				// Once the contract has the transactionHash property set and once its deployed on an address.

				// e.g. check tx hash on the first call (transaction send)
				if (!myContract.address) {
					// check address on the second call (contract deployed)
				} else {
					console.log(myContract.address)
					var organizationAddress = myContract.address
					//console.log("num", myContract.proposals(0).toString())

					myContract.makeProposal("Buy more beer", moment().add(5, 's').unix(), moment().add(30,'s').unix(), {
						from: web3.eth.accounts[0]
					});
					//console.log("num", myContract.proposals(0).toString())

					myContract.makeProposal("Install solar panels", moment().add(10, 's').unix(), moment().add(1,'day').unix(), {
						from: web3.eth.accounts[0]
					});
					//console.log("num", myContract.proposals(0).toString())

					FlowRouter.go("/orgs/" + organizationAddress + "/proposals")

				}
			} else {
				console.log("Err", err);
				Meteor.disconnect();
			}
		});
	},

	render: function() {

		let {field} = this.state

		return (
		<form onSubmit={this.onCreateOrganization}>
	        Create Organization:
	        <input type="text" name="value" value={field} onChange={this.onFieldChange}></input>
	        <input type="submit"></input>
	     </form>  
		);
	}

});




// import "Proposal";

// contract Organization {

// 	address public organizer;
// 	mapping (address => bool) public members;
// 	mapping (address => uint) public balances;
// 	mapping (address => int) public propResults;
// 	uint public numMembers;
// 	uint public token_count;
// 	uint public base_tokens = 100;
// 	uint public minNotice = 0;
// 	uint public numProposals;
// 	address[] public proposals;

// 	event NewMember(address _new); // so you can log the event
// 	event DeletedMember(address _old); // so you can log the event
// 	event Dispatch(uint amount);
// 	event Vote(uint balance);

// 	function Organization() {
// 		organizer = msg.sender;		
// 		token_count = 0;
// 		numMembers = 0;
// 	}

// 	function makeProposal(string name, uint startTime, uint endTime) {
// 		if( msg.sender != organizer ) { return; }
// 		if( startTime < now + minNotice ) { return; }
// 		Proposal prop = new Proposal(name, startTime, endTime);
// 		proposals.push(prop);
// 		numProposals++;
// 		propResults[prop] = -1;
// 	}

// 	function addMember(address newMember) {
// 		if(msg.sender != organizer) { return; }
// 		members[newMember] = true;
// 		numMembers++;
// 		balances[newMember] = 0;
// 		giveTokens(base_tokens, newMember);
// 	}

// 	function removeMember(address member) {
// 		if(msg.sender != organizer || !members[member]) { return; }
// 		members[member] = false;
// 		numMembers--;
// 		token_count -= balances[member];
// 		balances[member] = 0;
// 	}

// 	function giveTokens(uint amount, address dest) {
// 		token_count += amount;
// 		balances[dest] += amount;
// 	}

// 	function vote(bool decision, uint weight, address proposal) {

// 		if( !members[msg.sender] ) { return; }
// 		if( balances[msg.sender] < 1) { return; }
// 		if( weight < 1 ) { return; }
// 		if( weight*weight > balances[msg.sender] ) { return; }
		
// 		Proposal prop = Proposal(proposal);

// 		if(prop.hasVoted(msg.sender)) { return; }

// 		//if( now >= prop.startTime() && now < prop.endTime() ) {
// 			balances[msg.sender] -= weight*weight;
// 			prop.vote(decision, weight, msg.sender);
// 						return;
// 		//}
// 	}

// 	function dispatchBalance(address proposal) {
// 		Proposal p = Proposal(proposal);
// 		for(var i=0; i < p.nbVoters(); i++) {
// 			balances[p.voters(i)] += (p.bal() / p.nbVoters());	
// 		}
// 	}
	
// 	function getResult (address proposalAddress) {
// 		if (propResults[proposalAddress] != -1) { return; }
// 		Proposal p = Proposal(proposalAddress);
// 		//if(now >= p.endTime() ){
// 			propResults[p] = p.Results();
// 			dispatchBalance(proposalAddress);
// 			p.destroy();
// 		//}
// 	}

// 	function destroy() {
// 		if (msg.sender == organizer) { // without this funds could be locked in the contract forever!
// 			suicide(organizer);
// 		}
// 	}

// }
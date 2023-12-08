// =============================================================================
//                                  Config
// =============================================================================

var web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

// Constant we use later
var GENESIS = '0x0000000000000000000000000000000000000000000000000000000000000000';

// This is the ABI for your contract (get it from Remix, in the 'Compile' tab)
// ============================================================
var abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "t_s",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "a_s",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "t_r",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "a_r",
				"type": "int256"
			}
		],
		"name": "addBet",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "int256",
				"name": "amount",
				"type": "int256"
			}
		],
		"name": "addMoneyToWallet",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "confirmBet",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "createUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "settleBet",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "winner",
				"type": "string"
			}
		],
		"name": "setWinner",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "int256",
				"name": "amount",
				"type": "int256"
			}
		],
		"name": "withdrawMoneyFromWallet",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllBets",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "receiver",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "team_sender",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "team_receiver",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "amount_sender",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "amount_receiver",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "team_winner",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "confirmed",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "is_settled",
						"type": "bool"
					}
				],
				"internalType": "struct Betwork.Bet[]",
				"name": "bet_list",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "int256",
				"name": "balance",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getBet",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "receiver",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "team_sender",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "team_receiver",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "amount_sender",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "amount_receiver",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "team_winner",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "confirmed",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "is_settled",
						"type": "bool"
					}
				],
				"internalType": "struct Betwork.Bet",
				"name": "thisbet",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserList",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "userlist",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // FIXME: fill this in with your contract's ABI //Be sure to only have one array, not two

// ============================================================
abiDecoder.addABI(abi);
// call abiDecoder.decodeMethod to use this - see 'getAllFunctionCalls' for more

var contractAddress = '0xa221cca7244718EBB0d7A1852b136c5F2ba188A4'; // FIXME: fill this in with your contract's address/hash
var BlockchainSplitwise = new web3.eth.Contract(abi, contractAddress);
// web3.eth.defaultAccount = getDefault();
getDefault().then(data => {
	web3.eth.defaultAccount = data;
})
//web3.eth.defaultAccount = accounts[0]; //I am the sender

async function getDefault() {
	var accounts = await web3.eth.getAccounts();
	console.log(accounts);
	return accounts[0];
}

// =============================================================================
//                            Functions To Implement
// =============================================================================

async function getUserList() {
	return BlockchainSplitwise.methods.getUserList().call({from:web3.eth.defaultAccount}); 
}

async function createUser(user) {
	return BlockchainSplitwise.methods.createUser(user).send({from:web3.eth.defaultAccount, gas:1000000});
}

async function addBalance(user, amount) {
	return BlockchainSplitwise.methods.addMoneyToWallet(user, amount).send({from:web3.eth.defaultAccount, gas:1000000});
}

async function withdrawBalance(user, amount) {
	return BlockchainSplitwise.methods.withdrawMoneyFromWallet(user, amount).send({from:web3.eth.defaultAccount, gas:1000000});
}

async function getBalance(user) {
	return BlockchainSplitwise.methods.getBalance(user).call({from:web3.eth.defaultAccount});
}

async function sendBet(betid, user, receiver, t_s, a_s, t_r, a_r) {
	return BlockchainSplitwise.methods.addBet(betid, user, receiver, t_s, a_s, t_r, a_r).send({from:web3.eth.defaultAccount, gas:1000000});
}

async function confirmBet(user, betid) {
	return BlockchainSplitwise.methods.confirmBet(user, betid).send({from:web3.eth.defaultAccount, gas:1000000});
}

async function setWinner(betid, winner) {
	return BlockchainSplitwise.methods.setWinner(betid, winner).send({from:web3.eth.defaultAccount, gas:1000000});
}

async function settleBet(user, betid) {
	return BlockchainSplitwise.methods.settleBet(user, betid).send({from:web3.eth.defaultAccount, gas:1000000});
}

async function getBet(betid) {
	return BlockchainSplitwise.methods.getBet(betid).call({from:web3.eth.defaultAccount});
}

async function getAllBets() {
	return BlockchainSplitwise.methods.getAllBets().call({from:web3.eth.defaultAccount});
}

function check(name, condition) {
	if (condition) {
		console.log(name + ": SUCCESS");
		return 3;
	} else {
		console.log(name + ": FAILED");
		return 0;
	}
}

// async function init() {
// 	const { address, privateKey } = web3.eth.accounts.create();

// 	console.log('Address:', address);
// 	console.log('Private Key:', privateKey);
// 	// await createUser("samlzx96");
// 	// console.log(await getUserList)
// }

// init()

async function sanityCheck() {
	console.log ("\nTEST", "Simplest possible test: only runs one add_IOU; uses all client functions: lookup, getTotalOwed, getUsers, getLastActive");

	var accounts = await web3.eth.getAccounts();

	const sender = accounts[0];
	const receiver = accounts[1];
	web3.eth.defaultAccount = sender; //I am the sender
	console.log(`Sender: ${sender}; Receiver: ${receiver}`)
	
	//get users
	var users = await getUserList()
	console.log(`Initial getUserList() has: ${users}`)
	
	//create users from addresses
	var transac = await createUser(sender)
	transac = await createUser(receiver)
	
	users = await getUserList()
	check("getUserList() has 2 users", users.length === 2);

	//check initial balance
	var balance_sender = parseInt(await getBalance(sender))
	console.log(`Sender has initial balance: ${balance_sender}`);

	var balance_receiver = parseInt(await getBalance(receiver))
	console.log(`Receiver has initial balance: ${balance_receiver}`);

	//withdraw all balance and check if zero
	if(balance_sender > 0)
	{
		transac = await withdrawBalance(sender, balance_sender)
		balance_sender = parseInt(await getBalance(sender))
		check("After withdrawal, sender has balance 0", balance_sender === 0)
	}
	if(balance_receiver > 0)
	{
		transac = await withdrawBalance(receiver, balance_receiver)
		balance_receiver = parseInt(await getBalance(receiver))
		check("After withdrawal, receiver has balance 0", balance_receiver === 0)
	}
	
	
	//adding money to wallet
	transac = await addBalance(sender, 10)
	transac = await addBalance(receiver, 15)
	
	//check final balance
	balance_sender = parseInt(await getBalance(sender))
	balance_receiver = parseInt(await getBalance(receiver))
	check("After deposit, sender has balance 10", balance_sender === 10)
	check("After deposit, receiver has balance 15", balance_receiver === 15)

	betid = 1
	team_sender = "TS"
	team_receiver = "TR"
	//adding bet
	transac = await sendBet(betid, receiver, team_sender, balance_sender, team_receiver, balance_receiver)
	
	//confirming bet
	
	transac = await confirmBet(betid)
	
	//setting winner
	transac = await setWinner(betid, team_receiver)

	//printing bet
	var bet = await getBet(betid)
	console.log(bet)

	//settle bet
	transac = await settleBet(betid)

	//printing balances
	balance_sender = parseInt(await getBalance(sender))
	balance_receiver = parseInt(await getBalance(receiver))
	console.log(`Sender has final balance: ${balance_sender}`);
	console.log(`Receiver has final balance: ${balance_receiver}`);
}

// sanityCheck() //Uncomment this line to run the sanity check when you first open index.html

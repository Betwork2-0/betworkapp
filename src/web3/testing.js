// =============================================================================
//                                  Config
// =============================================================================

let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

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
	}
]; // FIXME: fill this in with your contract's ABI //Be sure to only have one array, not two

// ============================================================
abiDecoder.addABI(abi);
// call abiDecoder.decodeMethod to use this - see 'getAllFunctionCalls' for more

var contractAddress = '0xec572eC25FA4637fcb034cde75b854373efA8AF0'; // FIXME: fill this in with your contract's address/hash
var betworkContract = new web3.eth.Contract(abi, contractAddress);

// =============================================================================
//                            Functions To Implement
// =============================================================================

async function createUser(user) {
    return betworkContract.methods.createUser(user).send({from:web3.eth.defaultAccount, gas:1000000});
}
async function addBalance(user, amount) {
    return betworkContract.methods.addMoneyToWallet(user, amount).send({from:web3.eth.defaultAccount, gas:1000000});
}
async function withdrawBalance(user, amount) {
    return betworkContract.methods.withdrawMoneyFromWallet(user, amount).send({from:web3.eth.defaultAccount, gas:1000000});
}
async function sendBet(betid, user, receiver, t_s, a_s, t_r, a_r) {
    return betworkContract.methods.addBet(betid, user, receiver, t_s, a_s, t_r, a_r).send({from:web3.eth.defaultAccount, gas:1000000});
}
async function confirmBet(user, betid) {
    return betworkContract.methods.confirmBet(user, betid).send({from:web3.eth.defaultAccount, gas:1000000});
}
async function setWinner(betid, winner) {
    return betworkContract.methods.setWinner(betid, winner).send({from:web3.eth.defaultAccount, gas:1000000});
}
async function settleBet(user, betid) {
    return betworkContract.methods.settleBet(user, betid).send({from:web3.eth.defaultAccount, gas:1000000});
}

async function getUserList() {
    return betworkContract.methods.getUserList().call({from:web3.eth.defaultAccount})
}

async function getBalance(user) {
    return  betworkContract.methods.getBalance(user).call({from:web3.eth.defaultAccount})
}

async function getBet(betid) {
    return betworkContract.methods.getBet(betid).call({from:web3.eth.defaultAccount});
}

async function getAllBets() {
    return betworkContract.methods.getAllBets().call({from:web3.eth.defaultAccount});
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

async function setUpAndRun() {
	console.log ("Setting Up.. ");

	var accounts = await web3.eth.getAccounts();
	web3.eth.defaultAccount = accounts[0];

	const sender = web3.eth.accounts.create().address;
	const receiver = web3.eth.accounts.create().address;

	console.log(`Sender: ${sender}; Receiver: ${receiver}`)
	
	//get users
	let users = await getUserList();
	console.log(`Initial getUserList() has: ${users}`)
	
	//create users from addresses
	console.log("Creating Users 'sender' and 'receiver'")
	var transac = await createUser(sender)
	transac = await createUser(receiver)
	console.log(".. Done")
	
	users = await getUserList();
	console.log(`Current user list: ${users}`)
	
	//check initial balance
	let sender_balance = await getBalance(sender)
	console.log(`Initial Sender Balance = ${sender_balance}`)
	let receiver_balance = await getBalance(receiver)
	console.log(`Initial Receiver Balance = ${receiver_balance}`)

	//adding money to wallet
	console.log("\nAdding Money To Wallets\n")
	transac = await addBalance(sender, 10)
	transac = await addBalance(receiver, 15)
	sender_balance = await getBalance(sender)
	console.log(`Sender Balance = ${sender_balance}`)
	receiver_balance = await getBalance(receiver)
	console.log(`Receiver Balance = ${receiver_balance}`)

	//setting a bet
	betid = 5020
	team_sender = "Miami"
	team_receiver = "Boston"
	team_winner = team_receiver

	//adding bet
	transac = await sendBet(betid, sender, receiver, team_sender, 3, team_receiver, 3)
	
	//confirming bet
	transac = await confirmBet(receiver, betid)
	
	//setting winner
	console.log(`Setting Winner Team to ${team_winner}`)
	transac = await setWinner(betid, team_winner)

	//settle bet
	transac = await settleBet(sender, betid)

	//printing balances
	console.log("\nPrinting Final Balances:")
	sender_balance = await getBalance(sender)
	console.log(`Sender Balance = ${sender_balance}`)
	receiver_balance = await getBalance(receiver)
	console.log(`Receiver Balance = ${receiver_balance}`)
}

setUpAndRun() //Uncomment this line to run the sanity check when you first open index.html

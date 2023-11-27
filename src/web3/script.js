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

var contractAddress = '0x6Aabe575FafAc639b846291139D9B1C43E7aB5CE'; // FIXME: fill this in with your contract's address/hash
var BlockchainSplitwise = new web3.eth.Contract(abi, contractAddress);

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

async function getBalance(user, amount) {
	return BlockchainSplitwise.methods.getBalance(user).call({from:web3.eth.defaultAccount});
}


// // TODO: Get the last time this user has sent or received an IOU, in seconds since Jan. 1, 1970
// // Return null if you can't find any activity for the user.
// // HINT: Try looking at the way 'getAllFunctionCalls' is written. You can modify it if you'd like.
// async function getLastActive(user) {
// 	var func_calls = await getAllFunctionCalls(contractAddress, 'add_IOU') 
// 	var result = []
// 	for (let i = 0; i < func_calls.length; i++) {
// 		if (func_calls[i].from.toLowerCase() == user.toLowerCase() || func_calls[i].args[0].toLowerCase() == user.toLowerCase()) {
// 			if(func_calls[i].t > result)
// 				result = func_calls[i].t
// 		}
// 	}
// 	return Math.max(result)
// }

// async function getCreditorsForUser(user) {
// 	var result = [];
// 	var users = getUsers();
// 	for (let i = 0; i <= users.length; i++) {
// 		const amt = await BlockchainSplitwise.methods.lookup(user, node).call({from:web3.eth.defaultAccount});
// 		if(parseInt(amt) != 0) {
// 			result.push(users[i]);
// 		}
// 	}
// 	return result;
// }

// // TODO: add an IOU ('I owe you') to the system
// // The person you owe money is passed as 'creditor'
// // The amount you owe them is passed as 'amount'
// async function add_IOU(creditor, amount) {

// 	const debtor = web3.eth.defaultAccount;
// 	const path = await doBFS(creditor, debtor, getCreditorsForUser);
	
// 	amount = parseInt(amount);
// 	var min_on_cycle = 0;

// 	if (path != null) {
// 		min_on_cycle = amount
// 		for (let i = 0; i < path.length - 1; i++) {
// 		  const new_amount = await BlockchainSplitwise.methods.lookup(path[i], path[i+1]).call({from:web3.eth.defaultAccount});
// 	  	  min_on_cycle = Math.min(min_on_cycle, parseInt(new_amount));
// 	  	}
// 		await BlockchainSplitwise.methods.updateCycle(path, min_on_cycle).send({from:web3.eth.defaultAccount, gas:300000000});
// 	}
// 	return BlockchainSplitwise.methods.add_IOU(creditor, amount - min_on_cycle).send({from:web3.eth.defaultAccount, gas:300000000});
// }


function check(name, condition) {
	if (condition) {
		console.log(name + ": SUCCESS");
		return 3;
	} else {
		console.log(name + ": FAILED");
		return 0;
	}
}

async function sanityCheck() {
	console.log ("\nTEST", "Simplest possible test: only runs one add_IOU; uses all client functions: lookup, getTotalOwed, getUsers, getLastActive");

	var accounts = await web3.eth.getAccounts();

	web3.eth.defaultAccount = accounts[0]; //I am the sender
	const sender = accounts[0];
	const receiver = accounts[1];
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
	const balance_sender_i = parseInt(await getBalance(sender))
	console.log(`Sender has initial balance: ${balance_sender_i}`);

	const balance_receiver_i = parseInt(await getBalance(receiver))
	console.log(`Receiver has initial balance: ${balance_receiver_i}`);

	
	//adding money to wallet
	transac = await addBalance(sender, 10)
	transac = await addBalance(receiver, 15)
	
	//check final balance
	const balance_sender_f = parseInt(await getBalance(sender))
	const balance_receiver_f = parseInt(await getBalance(receiver))
	console.log(`Sender has final balance: ${balance_sender_f}`);
	console.log(`Receiver has final balance: ${balance_receiver_f}`);
	check("Sender final and initial differs by 10", balance_sender_f === balance_sender_i + 10)
	check("Receiver final and initial differs by 15", balance_receiver_f === balance_receiver_i + 15)


	// var users = await getUsers();
	// score += check("getUsers() initially empty", users.length === 0);

	// var owed = await getTotalOwed(accounts[0]);
	// score += check("getTotalOwed(0) initially empty", owed === 0);

	// var lookup_0_1 = await BlockchainSplitwise.methods.lookup(accounts[0], accounts[1]).call({from:web3.eth.defaultAccount});
	// score += check("lookup(0,1) initially 0", parseInt(lookup_0_1, 10) === 0);

	// var response = await add_IOU(accounts[1], "10");

	// users = await getUsers();
	// score += check("getUsers() now length 2", users.length === 2);

	// owed = await getTotalOwed(accounts[0]);
	// score += check("getTotalOwed(0) now 10", owed === 10);

	// lookup_0_1 = await BlockchainSplitwise.methods.lookup(accounts[0], accounts[1]).call({from:web3.eth.defaultAccount});
	// score += check("lookup(0,1) now 10", parseInt(lookup_0_1, 10) === 10);

	// var timeLastActive = await getLastActive(accounts[0]);
	// var timeNow = Date.now()/1000;
	// var difference = timeNow - timeLastActive;
	// score += check("getLastActive(0) works", difference <= 60 && difference >= -3); // -3 to 60 seconds

	// console.log("Final Score: " + score +"/21");
}

sanityCheck() //Uncomment this line to run the sanity check when you first open index.html

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BlockchainSplitwise {
    mapping(address=>mapping(address=>uint)) internal net_debts;
    address[] internal users;

    function getUsersWithTransactions() public view returns (address[] memory userlist){
        userlist = new address[](users.length);
        for (uint i = 0; i < users.length; i++)
            userlist[i] = users[i];
    }

    function updateCycle(address[] memory path, uint min_amount) public {
        for (uint i = 0; i < path.length - 1; i++)
            net_debts[path[i]][path[i+1]] -= min_amount;
    } 

    function getNetDebtForUser(address user) public view returns (uint total_debt){
        total_debt = 0;
        for (uint i = 0; i < users.length; i++)
            total_debt += lookup(user, users[i]);
    }

    function lookup(address A, address B) public view returns (uint debt) {
        debt = net_debts[A][B]; 
    }

    function add_IOU(address creditor, uint amount) public {
        if (amount > 0 && msg.sender != creditor)
        {
            net_debts[msg.sender][creditor] += amount;
        }
        addUser(msg.sender);
        addUser(creditor);
    }

    function addUser(address user) public {
        for (uint i = 0; i < users.length; i++)
        {
            if(users[i] == user)
            {
                return;
            }
        }
        users.push(user);
     }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Betwork {
    struct Bet {
        uint id;
        address sender;
        address receiver;
        string team_sender;
        string team_receiver;
        int amount_sender;
        int amount_receiver;
        string team_winner;
        bool confirmed;
        bool is_settled;
    }

    Bet[] internal bets;
    mapping(address=>int) internal balances;
    address[] internal users;

    function createUser(address user) public returns (bool) {
        if(checkUserExists(user))
        {
            return false; //address already exists, so that user cannot zero out thier negative balance
        }
        users.push(user);
        balances[user] = 0;
        return true;
    }

    function checkUserExists(address user) private view returns (bool) {
        for (uint i = 0; i < users.length; i++)
        {
            if(users[i] == user)
            {
                return true; //address already exists, so that user cannot accidentally zero out thier balance
            }
        }
        return false;
    }

    function changeWallet(address user, int change) private returns (bool) {
        if(balances[user] + change >= 0)
        {
            balances[user] = balances[user] + change;
            return true;
        }
        return false;
    }

    function addMoneyToWallet(address user, int amount) public returns (bool) {
        assert(checkUserExists(user));
        assert(amount > 0); 
        return changeWallet(user, amount);
    }

    function withdrawMoneyFromWallet(address user, int amount) public returns (bool) {
        assert(checkUserExists(user));
        assert(amount > 0);
        return changeWallet(user, -amount);
    }

    function addBet(uint id, address receiver, string memory t_s, int a_s, string memory t_r, int a_r) public returns (bool) {
        assert(a_s > 0);
        assert(a_r > 0);
        if(balances[msg.sender] < a_s && balances[receiver] < a_r)
        {
            return false;
        }

        Bet memory new_bet;
        new_bet.id = id;
        new_bet.sender = msg.sender;
        new_bet.receiver = receiver;
        new_bet.team_sender = t_s;
        new_bet.amount_sender = a_s;
        new_bet.team_receiver = t_r; 
        new_bet.amount_receiver = a_r;
        new_bet.confirmed = false;
        new_bet.team_winner = "";
        new_bet.is_settled = false;
        bets.push(new_bet);
        return true;
    }

    function confirmBet(uint id) public returns (bool) {
        for(uint i = 0; i < bets.length; i++)
        {
            if(bets[i].id == id && bets[i].receiver == msg.sender)
            {
                bool withdrawal_sender = withdrawMoneyFromWallet(bets[i].sender, bets[i].amount_sender);
                if(!withdrawal_sender)
                {
                    return false;
                }

                bool withdrawal_receiver = withdrawMoneyFromWallet(bets[i].receiver, bets[i].amount_receiver);
                if(!withdrawal_receiver)
                {
                    //refund sender
                    addMoneyToWallet(bets[i].sender, bets[i].amount_sender);
                    return false;
                }
                bets[i].confirmed = true;
                return true;
            }
        }
        return false;
    }

    function setWinner(uint id, string memory winner) public returns (bool) {
        for(uint i = 0; i < bets.length; i++)
        {
            if(bets[i].id == id)
            {
                bets[i].team_winner = winner;
                return true;
            }
        }
        return false;
    }

    function settleBet(uint id) public returns (bool) {
        for(uint i = 0; i < bets.length; i++)
        {
            if(bets[i].id == id 
                && !bets[i].is_settled 
                && (msg.sender == bets[i].sender || msg.sender == bets[i].receiver)
                && bytes(bets[i].team_winner).length > 0)
            {
                bets[i].is_settled = true;
                if(keccak256(bytes(bets[i].team_sender)) == keccak256(bytes(bets[i].team_winner))) {
                    balances[bets[i].sender] += bets[i].amount_sender + bets[i].amount_receiver;                    
                } else if (keccak256(bytes(bets[i].team_receiver)) == keccak256(bytes(bets[i].team_winner))) {
                    balances[bets[i].receiver] += bets[i].amount_sender + bets[i].amount_receiver;
                } else {
                    balances[bets[i].sender] += bets[i].amount_sender;
                    balances[bets[i].receiver] += bets[i].amount_receiver;
                }
            }
        }
        return false;
    }

    function getAllBets() public view returns (Bet[] memory bet_list) {
        bet_list = new Bet[](bets.length);
        for (uint i = 0; i < users.length; i++)
            bet_list[i] = bets[i];
    }
}
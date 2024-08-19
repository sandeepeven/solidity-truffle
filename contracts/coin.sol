// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.19;

contract Coin {
  // The keyword "public" makes variables
  // accessible from other contracts
  address public minter;
  mapping(address => uint) public balances;

  event Sent(address from, address to, uint amount);

// contructor is created only the
// first time contract is created
  constructor() {
    minter = msg.sender;
  }

  function mint(address receiver, uint amount) public {
    require(msg.sender == minter);
    balances[receiver] += amount;
  }

  function get(address receiver) public view returns(uint) {
    return balances[receiver];
  }

  // Errors allow you to provide information about
  // why an operation failed. They are returned
  // to the caller of the function.
  error InsufficientBalance(uint requested, uint available);

  // Sends an amount of existing coins
  // from any caller to an address
  function send(address receiver, uint amount) public {
    require(amount <= balances[msg.sender], "InsufficientBalance");
    balances[msg.sender] -= amount;
    balances[receiver] += amount;
    emit Sent(msg.sender, receiver, amount);
  }
}
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Counter{
    string public name = "My Name";
    uint public count = 1; //state variable // statically types language 

    constructor(string memory _name, uint _initialCount) { //it only runs once
        name = _name;
        count = _initialCount;
    }

    function increment() public {
        count++;
    }

    function decrement() public {
        count-- ;
    }

    function gerCount() public view returns(uint) {
        return count;
    }

    function getName() public view returns(string memory) {
        return name;
    }

    function setName(string memory _newName) public returns(string memory newName) {
        name = _newName;
        return name;
    } 
}
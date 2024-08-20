const SimpleStorage = artifacts.require("SimpleStorage");
const Coin = artifacts.require("Coin");
const SimpleAuction = artifacts.require("SimpleAuction");
const Ballot = artifacts.require("Ballot");
const Purchase = artifacts.require('Purchase');
const Payment = artifacts.require('SimplePaymentChannel');

module.exports = function (deployer) {

    // deployer.deploy(SimpleStorage);

    // const proposalNames = ["Ramesh", "Pankaj", "Hari", "Kala"].map(name =>
    //     web3.utils.asciiToHex(name)
    // );
    // deployer.deploy(Ballot, proposalNames);

    // const beneficiaryAddress = '0x9b82f656556298E5c4bfacA43Bb412564C0a3F3c'
    // deployer.deploy(SimpleAuction, 1000, beneficiaryAddress);

    // deployer.deploy(Purchase, { from: '0x9e20350C98dB59Bd28B8aDc072eEb3e0930ce7ab', value: 10000000000000000000 });

    deployer.deploy(Payment, '0xBA2a496C726372E66D7b93C8108EC985D9F03794', 5000);
};


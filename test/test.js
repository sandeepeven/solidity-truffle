const Purchase = artifacts.require("Purchase");

const buyer = '0xd5078B549Cce7C5a780be2Fab2C5882a6463E8ae';
const doubleValue = 10000000000000000000;

contract('Purchase', (accounts) => {
    it('confirm purchase state locked', async () => {
        const instance = await Purchase.deployed();
        instance.confirmPurchase({ from: buyer, value: doubleValue });
    });
    it('confirm purchase by buyer', async () => {
        const instance = await Purchase.deployed();
        instance.confirmReceived({ from: buyer });
    })
});

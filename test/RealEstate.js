const { expect } = require('chai');
const { ethers } = require('hardhat');  

describe('RealEstate', () => {
    let realEstate;
    let deployer, seller;
    let nftID = 1;

    beforeEach(async () => {
        // Setup accounts
        accounts = await ethers.getSigners()
        deployer = accounts[0]
        seller = deployer

        // Load contract
        const RealEstate = await ethers.getContractFactory('RealEstate')
        const Escrow = await ethers.getContractFactory('Escrow')

        //deploy contracts
        realEstate = await RealEstate.deploy()
        escrow = await Escrow.deploy()

    })

    describe('Deployment', async() => {
        it('sends an NFT to the seller / deployer', async() => {
            expect(await realEstate.ownerOf(nftID)).to.equal(seller.address)
        })
    })
})
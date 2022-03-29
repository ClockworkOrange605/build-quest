const CRISP = artifacts.require("CRISP");

module.exports = async function (deployer, network, accounts) {
  const instance = await CRISP.deployed()
  await dumpContract(instance)
};

async function dumpContract(instance) {
  // const supply = await instance.totalSupply()
  console.log('Contract Deployed:', await instance.address)
  console.log('==========================================')
  console.log('Name:', await instance.name())
  console.log('Symbol:', await instance.symbol())
  // console.log('Supply:', supply.toNumber())
  console.log('==========================================')
}
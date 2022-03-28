const CRISP = artifacts.require("CRISP")

module.exports = async function (deployer, network, accounts) {
  const instance = await CRISP.deployed()
  await mintToken(instance, accounts[0])
  await dumpTokens(instance)
}

async function mintToken(instance, account) {
  const nextPrice = await instance.getPrice()
  const priceInWei = nextPrice.toString()

  console.log('Token Mint Price', priceInWei)

  await instance.mint(
    `ipfs://hash`, { from: account, value: priceInWei }
  )
}

async function dumpTokens(instance) {
  let block = await web3.eth.getBlock("latest")

  const tokensCount = await instance.curTokenId()
  const nextPrice = await instance.getPrice()

  console.log('==========================================')
  console.log('Current Block', block.number)
  console.log('Tokens Count', tokensCount.toNumber())
  console.log('Next Token Mint Price', nextPrice.toString())
  console.log('==========================================')
}
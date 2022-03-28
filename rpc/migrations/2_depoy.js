const CRISP = artifacts.require("CRISP");

module.exports = async function (deployer) {
  deployer.deploy(CRISP, "CRISP EXAMPLE", "CRISP", 1, 1, 1, 1, 1)
};
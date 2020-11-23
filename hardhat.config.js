require("@nomiclabs/hardhat-waffle");
require("@tenderly/hardhat-tenderly")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    local: {
      url: 'http://127.0.0.1:8545',
    },
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/a_1D5ROSfG45TVsfzCfNt3izuQb4UPTx",
        blockNumber: 11312030
      }
    }
  },
  solidity: "0.7.3",
};


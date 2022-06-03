/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    kovan: {
      url: `https://kovan.infura.io/v3/${API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
}

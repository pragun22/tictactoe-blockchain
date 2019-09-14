var tictactoe = artifacts.require("tictactoe");

module.exports = function(deployer) {
  deployer.deploy(tictactoe);
};
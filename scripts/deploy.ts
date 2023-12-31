// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";


let accountAddrs : SignerWithAddress[];
let ownerAddr : SignerWithAddress;

async function main() {
  accountAddrs = await ethers.getSigners();
  ownerAddr = accountAddrs[0];
  console.log("owner address : %s", ownerAddr.address);


  const USDEBT = await ethers.getContractFactory("USDEBT");
  const vUSDEBT = await USDEBT.deploy();
  await vUSDEBT.deployed();
  console.log(`USDEBT deploy address = ${vUSDEBT.address}`);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
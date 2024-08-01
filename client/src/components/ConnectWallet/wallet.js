import { ethers } from "ethers";

// Directly import the utilities you need from ethers
import { isAddress, formatUnits } from "ethers";

export const wallet = async () => {
  try {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }

    // Request account access if needed
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const selectedAccount = accounts[0];

    // Create an ethers provider
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    // Validate the Ethereum address
    if (!isAddress(selectedAccount)) {
      throw new Error("Invalid Ethereum address");
    }

    // Get the balance of the selected account
    const balance = await provider.getBalance(selectedAccount);
    const balanceInEth = formatUnits(balance, 18);

    console.log("Selected Account:", selectedAccount);
    console.log("Balance:", balanceInEth);

    return {
      provider,
      signer,
      selectedAccount,
      balanceInEth,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

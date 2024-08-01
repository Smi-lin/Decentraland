import React, { useState } from "react";
import { wallet } from "./wallet";

const ConnectWallet = () => {
  const [account, setAccount] = useState(null);

  const handleConnectWallet = async () => {
    try {
      const { selectedAccount, balanceInEth } = await wallet();
      setAccount({ selectedAccount, balanceInEth });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const handleDisconnectWallet = () => {
    setAccount(null);
  };

  return (
    <div>
      {!account ? (
        <button onClick={handleConnectWallet}>Connect Wallet</button>
      ) : (
        <>
          <div className="">
            <p>Connected Account: {account.selectedAccount}</p>
            <p>Balance: {account.balanceInEth} ETH</p>
          </div>
          <button onClick={handleDisconnectWallet}>Disconnect Wallet</button>
        </>
      )}
    </div>
  );
};

export default ConnectWallet;

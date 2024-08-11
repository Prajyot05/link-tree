require('dotenv').config();
const solanaWeb3 = require("@solana/web3.js");

const { PublicKey, Connection } = solanaWeb3;

const connection = new Connection(process.env.QUICKNODE_API);

const getTransactions = async (address, numTx) => {
     const searchAddress = new PublicKey(address);

    let transactionList = await connection.getSignaturesForAddress(searchAddress, { limit: numTx });
    transactionList.forEach((transaction, i) => {
        const date = new Date(transaction.blockTime * 1000);
        console.log(`Transaction No: ${i + 1}`);
        console.log(`Signature: ${transaction.signature}`);
        console.log(`Time: ${date}`);
        console.log(`Status: ${transaction.confirmationStatus}`);
        console.log("-".repeat(20));
    });

    console.log(transactionList);
};

//  getTransactions("FdvRKFEgdqJeKXS8SdffMkbYKg2oKwDXfamciiinWXjN", 10);

module.exports = getTransactions;

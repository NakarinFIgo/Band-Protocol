const axios = require("axios");

// Broadcast Transaction Function
async function broadcastTransaction(symbol, price, timestamp) {
    // POST to http by axios
    try {
    const response = await axios.post(
      `https://mock-node-wgqbnxruha-as.a.run.app/broadcast`,
      {
        symbol: symbol,
        price: price,
        timestamp: timestamp,
      }
    );
    return response.data.tx_hash;
  } catch (error) {
    console.log("Error broadcasting transaction", error);
  }
}

async function checkTransactionStatus(tx_Hash) {
    // GET hash by axios
  try {
    const response = await axios.get(
      `https://mock-node-wgqbnxruha-as.a.run.app/check/${tx_Hash}`
    );
    return response.data.tx_status;
  } catch (error) {
    console.log("Error checking transaction status", error);
  }
}

// Example test case 
async function runTransaction() {
    const symbol = "ETH"
    const price = 4500
    const timestamp = Date.now()

    const tx_Hash = await broadcastTransaction(symbol,price,timestamp)
    console.log("Transaction Hash",tx_Hash);
    
    let interval = setInterval(async () => {
        const status = await checkTransactionStatus(tx_Hash)
        console.log("Transaction Status", status);
        
        if (status === "CONFIRMED" || status === "FAILED") {
            clearInterval(interval)
        }
    },5000)
}

runTransaction() // Run function every 5 second until status "CONFIRMED" or "FAILED".
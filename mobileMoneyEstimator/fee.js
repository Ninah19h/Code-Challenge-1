function estimateTransactionFee(amountToSend) {
    const feeRate = 0.015; // 1.5%
    const minFee = 10;
    const maxFee = 70;

    let fee = amountToSend * feeRate;

    if (fee < minFee) {
        fee = minFee;
    } else if (fee > maxFee) {
        fee = maxFee;
    }

    const totalAmount = amountToSend + fee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
    console.log("\nSend Money Securely!");
}

// Prompt user
const userInput = prompt("Unatuma Ngapi? (KES):");
const amountToSend = parseFloat(userInput);

if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
} else {
    console.log("Tafadhali weka kiasi halali cha kutuma.");
}

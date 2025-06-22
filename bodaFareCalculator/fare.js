function calculateBodaFare(distanceInKm) {
    const baseFare = 50;
    const chargePerKm = 15;

    const distanceCharge = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceCharge;

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceCharge}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki!");
}

// Prompt
const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = parseFloat(userInput);

if (!isNaN(distanceInKm) && distanceInKm > 0) {
    calculateBodaFare(distanceInKm);
} else {
    console.log("Tafadhali weka umbali halali kwa kilomita.");
}

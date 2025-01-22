// Accessing command-line arguments
const args = process.argv.slice(2); // Skips "node" and the script name
if (args.length !== 3) {
    console.error("Usage: node graph-math.js <amountBetween> <start> <end>");
    process.exit(1);
}

const [amountBetween, start, end] = args.map(Number);

// Validate inputs
if (isNaN(amountBetween) || isNaN(start) || isNaN(end)) {
    console.error("All arguments must be valid numbers.");
    process.exit(1);
}

const step = (end - start) / (amountBetween + 1);

console.log(start);
console.log('\n');
for (let i = 1; i < amountBetween + 1; i++) {
    const val = Math.trunc((start + (step * i)) * 10) / 10;
    console.log(val);
}
console.log('\n');
console.log(end);

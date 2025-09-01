// Test case data provided by the user
const data = {
    "keys": {
        "n": 10,
        "k": 7
    },
    "1": {
        "base": "6",
        "value": "13444211440455345511"
    },
    "2": {
        "base": "15",
        "value": "aed7015a346d635"
    },
    "3": {
        "base": "15",
        "value": "6aeeb69631c227c"
    },
    "4": {
        "base": "16",
        "value": "e1b5e05623d881f"
    },
    "5": {
        "base": "8",
        "value": "316034514573652620673"
    },
    "6": {
        "base": "3",
        "value": "2122212201122002221120200210011020220200"
    },
    "7": {
        "base": "3",
        "value": "20120221122211000100210021102001201112121"
    },
    "8": {
        "base": "6",
        "value": "20220554335330240002224253"
    },
    "9": {
        "base": "12",
        "value": "45153788322a1255483"
    },
    "10": {
        "base": "7",
        "value": "1101613130313526312514143"
    }
};

// The number of roots to use is k-1, which is the degree of the polynomial.
const numRootsToUse = data.keys.k - 1;

// Initialize the product of roots using BigInt for large number support.
let productOfRoots = 1n;

// Iterate through the first 6 roots and multiply their base 10 values.
for (let i = 1; i <= numRootsToUse; i++) {
    const rootData = data[i.toString()];
    const base = parseInt(rootData.base, 10);
    const value = rootData.value;
    
    // Convert the value from the specified base to a base 10 BigInt.
    const rootValueBase10 = BigInt("0x" + parseInt(value, base).toString(16));
    
    // Multiply the base 10 root value with the product.
    productOfRoots *= rootValueBase10;
}

// The constant 'c' is the product of the roots.
const constantC = productOfRoots;

// Print the result to the console.
console.log(`The value of the constant c is: ${constantC}`);
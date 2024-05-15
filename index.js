const readline = require('readline');

// Define the price list and parts
const priceList = {
    "A": 10.28,
    "B": 24.07,
    "C": 33.30,
    "D": 25.94,
    "E": 32.39,
    "F": 18.77,
    "G": 15.13,
    "H": 20.00,
    "I": 42.31,
    "J": 45.00,
    "K": 45.00,
    "L": 30.00
};

const partsList = {
    "A": "LED Screen",
    "B": "OLED Screen",
    "C": "AMOLED Screen",
    "D": "Wide-Angle Camera",
    "E": "Ultra-Wide-Angle Camera",
    "F": "USB-C Port",
    "G": "Micro-USB Port",
    "H": "Lightning Port",
    "I": "Android OS",
    "J": "iOS OS",
    "K": "Metallic Body",
    "L": "Plastic Body"
};

function createOrder(components) {
    let total = 0;
    const parts = [];

    // Calculate total price and gather parts
    components.forEach(component => {
        if (priceList[component]) {
            total += priceList[component];
            parts.push(partsList[component]);
        }
    });

    // Generate order ID
    const orderId = generateOrderId();

    // Return order details
    return {
        "order_id": orderId,
        "total": total.toFixed(1), // Correctly round the total
        "parts": parts
    };
}

// Function to generate a random order ID
function generateOrderId() {
    return "order-" + Math.random().toString(36).substr(2, 9);
}

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for input
rl.question('Enter components (comma-separated): ', (input) => {
    // Process input
    const components = input.trim().split(',');

    // Create the order
    const order = createOrder(components);

    // Output the order
    const output = JSON.stringify(order, null, 4);
    console.log(output);

    // Close the readline interface
    rl.close();
});

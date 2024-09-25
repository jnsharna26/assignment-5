let totalAmount = 0;

document.getElementById('addButton').addEventListener('click', function() {
    const amountInput = document.getElementById('amountInput');
    const amount = parseFloat(amountInput.value);

    // Check if the amount is a positive number
    if (!isNaN(amount) && amount > 0) {
        totalAmount += amount;
        document.getElementById('totalAmount').innerText = totalAmount;
        amountInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid positive number');
    }
});

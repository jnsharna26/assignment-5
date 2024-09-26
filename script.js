let totalAmount = 0;

document.getElementById('addDonationButton').addEventListener('click', function() {
    const donationInput = document.getElementById('donationAmount');
    const donationValue = parseFloat(donationInput.value);

    if (donationValue > 0) {
        totalAmount += donationValue;
        document.getElementById('totalAmount').innerText = totalAmount;

        const donationTitle = `Donation of ${donationValue} at ${new Date().toLocaleString()}`;
        addDonationToHistory(donationTitle);
        donationInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a positive number');
    }
});

function addDonationToHistory(title) {
    const historyList = document.getElementById('historyList');
    const donationEntry = document.createElement('div');
    donationEntry.classList.add('donation-entry');
    donationEntry.innerText = title;
    historyList.appendChild(donationEntry);
}

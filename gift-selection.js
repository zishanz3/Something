// gift-selection.js
document.getElementById('giftForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get the selected gift
    const selectedGift = document.querySelector('input[name="gift"]:checked');

    if (selectedGift) {
        const giftValue = selectedGift.value;

        // Log the chosen gift (for testing purposes)
        console.log('Chosen Gift:', giftValue);

        // Display a confirmation message
        document.getElementById('confirmationMessage').style.display = 'block';
        document.getElementById('giftForm').reset(); // Reset form
    } else {
        alert('Please select a gift.');
    }
});

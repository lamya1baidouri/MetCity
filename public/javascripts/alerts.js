document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('severityFilter');
    const alertCards = document.querySelectorAll('.alert-card');

    filterSelect.addEventListener('change', function() {
        const selectedSeverity = this.value.toLowerCase();  // Match the dropdown values with data-severity attributes
        alertCards.forEach(card => {
            if (selectedSeverity === 'all' || card.dataset.severity === selectedSeverity) {
                card.style.display = '';  // Show the card
            } else {
                card.style.display = 'none';  // Hide the card
            }
        });
    });
});

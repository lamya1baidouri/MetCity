document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('weather-alerts');
    const filterSelect = document.getElementById('severityFilter');
    const alertsUrl = '/weather-details/alerts';

    // Function to display alerts on the page
    function displayAlerts(data) {
        container.innerHTML = ''; // Clear existing alerts

        data.features.forEach(feature => {
            const severity = feature.properties.awareness_level.split(';')[1].trim().toLowerCase();
            const event = feature.properties.event.toLowerCase();
            let iconName = `icon-warning-${event}`;

            // Adjust the icon path based on severity
            let iconPath = `/images/alertIcons/${iconName}-${severity}.png`;

            // Create alert card
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert-card';
            alertDiv.setAttribute('data-severity', severity); // Set the severity for filtering
            alertDiv.innerHTML = `
                <img src="${iconPath}" alt="Alert Icon - ${event}" class="weather-icon">
                <div class="alert-info">
                    <h2>${feature.properties.title}</h2>
                    <p><strong>Description:</strong> ${feature.properties.description}</p>
                    <p><strong>Severity:</strong> ${severity}</p>
                </div>
            `;
            container.appendChild(alertDiv);
        });
    }

    // Fetch alert data from the server
    function fetchAlerts() {
        fetch(alertsUrl)
            .then(response => response.json())
            .then(displayAlerts)
            .catch(error => {
                console.error('Error fetching data:', error);
                container.innerHTML = '<p>Error loading alerts.</p>';
            });
    }

    // Initialize alerts display
    fetchAlerts();

    // Filter functionality based on severity
    filterSelect.addEventListener('change', function() {
        const selectedSeverity = filterSelect.value;
        const alertCards = document.getElementsByClassName('alert-card');

        Array.from(alertCards).forEach(card => {
            if (selectedSeverity === 'all' || card.getAttribute('data-severity') === selectedSeverity) {
                card.style.display = 'inline-block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


    document.getElementById('villeForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    var isValid = true;

    // Collect form data
    var nom = document.getElementById('nom').value.trim();
    var latitude = document.getElementById('latitude').value.trim();
    var longitude = document.getElementById('longitude').value.trim();

    // Check if any field is empty
    if (!nom || !latitude || !longitude) {
    isValid = false;
    alert('Tous les champs sont requis.');
}

    // Regular expressions for latitude and longitude
    var latPattern = /^(\+|-)?(?:90(?:\.0{1,6})?|(?:[0-9]|[1-8][0-9])\.[0-9]{1,6})$/;
    var longPattern = /^(\+|-)?(?:180(?:\.0{1,6})?|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])\.[0-9]{1,6})$/;

    if (!latPattern.test(latitude)) {
    isValid = false;
    alert('Veuillez entrer une latitude valide.');
}

    if (!longPattern.test(longitude)) {
    isValid = false;
    alert('Veuillez entrer une longitude valide.');
}

    // If the data is valid, send it to the server
    if (isValid) {
    const formData = { nom, latitude, longitude };
    try {
    const response = await fetch('/villes/add', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
},
    body: JSON.stringify(formData)
});

    const result = await response.json();

    if (response.status === 400) {
    alert(result.error);
} else {
        window.location.href = '/villes?'
    alert('Ville ajoutée avec succès!');
}
} catch (error) {
    console.error('Fetch error:', error);
    alert('Une erreur est survenue lors de l’ajout de la ville.');
}
}
});


document.getElementById('villeForm').addEventListener('submit', function(event) {
    var isValid = true;

    // Validation logic here
    var nom = document.getElementById('nom').value;
    var latitude = document.getElementById('latitude').value;
    var longitude = document.getElementById('longitude').value;

    if (nom.length === 0 || latitude.length === 0 || longitude.length === 0) {
        isValid = false;
        alert('Tous les champs sont requis.');
    }

    // Additional checks for latitude and longitude formats
    var latPattern = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])?\.[0-9]{1,6})$/;
    var longPattern = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])?\.[0-9]{1,6})$/;

    if (!latPattern.test(latitude)) {
        isValid = false;
        alert('Veuillez entrer une latitude valide.');
    }

    if (!longPattern.test(longitude)) {
        isValid = false;
        alert('Veuillez entrer une longitude valide.');
    }

    if (!isValid) {
        event.preventDefault();
    }
});
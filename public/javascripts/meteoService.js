$(document).ready(function() {
    $('#searchInput').on('keyup', function() {
        var query = $(this).val();
        $.ajax({
            url: '/villes/search?search=' + query,
            method: 'GET',
            success: function(data) {
                $('#villesList').empty();
                data.forEach(function(ville) {
                    $('#villesList').append(`<li>${ville.nom} (${ville.latitude}, ${ville.longitude}) <button class="voir-meteo-btn" data-lat="${ville.latitude}" data-lon="${ville.longitude}">Voir Météo</button></li>`);
                });
            }
        });
    });

    $(document).on('click', '.voir-meteo-btn', function() {
        var lat = $(this).data('lat');
        var lon = $(this).data('lon');
        window.location.href = `/weather-details?lat=${lat}&lon=${lon}`; // Redirect to a new route
    });

});

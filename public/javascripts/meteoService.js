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
        window.location.href = `/weather-details?lat=${lat}&lon=${lon}`;
    });

});
$(document).ready(function() {
    $('#searchInput').on('keyup', function() {
        var query = $(this).val();
        $.ajax({
            url: '/villes/search?search=' + query,
            method: 'GET',
            success: function(data) {
                $('#villesList').empty();
                data.forEach(function(ville) {
                    $('#villesList').append(`<li class="ville-item"><div class="ville-info"><span class="ville-nom">${ville.nom}</span><span class="ville-coords">Lat: ${ville.latitude.toFixed(2)}, Lon: ${ville.longitude.toFixed(2)}</span></div><button class="voir-meteo-btn" data-lat="${ville.latitude}" data-lon="${ville.longitude}">Voir Météo</button><button class="delete-ville-btn" data-id="${ville.id}">Supprimer</button></li>`);
                });
            }
        });
    });
    $(document).on('click', '.voir-meteo-btn', function() {
        var lat = $(this).data('lat');
        var lon = $(this).data('lon');
        window.location.href = `/weather-details?lat=${lat}&lon=${lon}`;
    });
    $(document).on('click', '.delete-ville-btn', function() {
        var id = $(this).data('id');
        $.ajax({
            url: '/villes/delete/' + id,
            method: 'POST',
            success: function() {
                alert('Ville supprimée avec succès');
                window.location.reload();
            },
            error: function() {
                alert('Erreur lors de la suppression de la ville');
            }
        });
    });
});

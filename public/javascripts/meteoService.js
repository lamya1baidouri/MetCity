const axios = require('axios');

async function getMeteoVille(latitude, longitude) {
    try {
        const response = await axios.get('URL_DE_LAPI_METEO', {
            params: { lat: latitude, lon: longitude }
        });
        return response.data; // Traitez les données comme requis
    } catch (error) {
        console.error('Erreur lors de la récupération des données météo', error);
        throw error;
    }
}

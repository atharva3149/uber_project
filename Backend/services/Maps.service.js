const axios = require('axios');
const captainModel = require('../models/captain.model')

const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degrees) => degrees * (Math.PI / 180);
    const R = 6371e3; // Earth's radius in meters

    const φ1 = toRadians(lat1);
    const φ2 = toRadians(lat2);
    const Δφ = toRadians(lat2 - lat1);
    const Δλ = toRadians(lon2 - lon1);

    const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
};
// Get address coordinates using LocationIQ API
module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.LOCATION_MAPS_API; // LocationIQ API key
    const url = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${encodeURIComponent(address)}&format=json`;

    try {
        const response = await axios.get(url);

        if (response.data && response.data.length > 0) {
            const location = response.data[0]; // First result
            return {
                lat: location.lat, // Latitude
                lng: location.lon  // Longitude
            };
        } else {
            throw new Error('No results found for the given address');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw error;
    }
};

// Get distance and estimated time using LocationIQ
module.exports.getDistanceAndTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination addresses are required');
    }

    const apiKey = process.env.LOCATION_MAPS_API;

    try {
        // Get coordinates for origin
        const originUrl = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${encodeURIComponent(origin)}&format=json`;
        const originResponse = await axios.get(originUrl);
        if (originResponse.data.length === 0) {
            throw new Error('No results found for the origin address');
        }
        const originLocation = originResponse.data[0];

        // Get coordinates for destination
        const destinationUrl = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${encodeURIComponent(destination)}&format=json`;
        const destinationResponse = await axios.get(destinationUrl);
        if (destinationResponse.data.length === 0) {
            throw new Error('No results found for the destination address');
        }
        const destinationLocation = destinationResponse.data[0];

        // Calculate straight-line distance using haversine formula
        const distance = haversineDistance(
            parseFloat(originLocation.lat),
            parseFloat(originLocation.lon),
            parseFloat(destinationLocation.lat),
            parseFloat(destinationLocation.lon)
        );

        // Assume an average driving speed (e.g., 60 km/h = 16.67 m/s)
        const averageSpeedMetersPerSecond = 16.67; // Driving speed
        const durationSeconds = Math.round(distance / averageSpeedMetersPerSecond); // Duration in seconds

        return {
            distance: { value: Math.round(distance) }, // Distance in meters
            duration: { value: durationSeconds }       // Duration in seconds
        };
    } catch (error) {
        console.error('Error fetching distance and time:', error.message);
        throw error;
    }
};
    

// Get autocomplete suggestions using LocationIQ API
module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('Query is required');
    }

    const apiKey = process.env.LOCATION_MAPS_API;
    const url = `https://us1.locationiq.com/v1/autocomplete.php?key=${apiKey}&q=${encodeURIComponent(input)}&limit=5`;

    try {
        console.log('Fetching suggestions for:', input);
        const response = await axios.get(url);

        // Log the full response to see what you're getting
        console.log('API Response:', response.data);

        if (response.data && response.data.length > 0) {
            return response.data.map(result => ({
                formatted: result.display_name,
                geometry: {
                    lat: result.lat,
                    lng: result.lon,
                },
            }));
        } else {
            return [{ formatted: 'No suggestions available', geometry: null }];
        }
    } catch (err) {
        console.error('Error fetching autocomplete suggestions:', err.message);
        throw err;
    }
};
// Haversine distance calculation function

module.exports.getCaptainsInTheRadius = async (lat , lng , radius)=>{

    const captains = await captainModel.find({
        location:{
            $geoWithin:{
                $centerSphere:[[lat,lng], radius/6371] // Earth's radius 
            }
        }
    });
    return captains;

}


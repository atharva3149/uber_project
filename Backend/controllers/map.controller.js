const mapService = require('../services/Maps.service');
const { validationResult } = require('express-validator');


module.exports.getCoordinates = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const { address } = req.query;

    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(404).json({ message: 'Coordinates not found' });
    }
}

module.exports.getDistanceAndTime = async ( req , res , next) =>{
   try{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {origin , destination} = req.query;
    const distanceTime = await mapService.getDistanceAndTime(origin,destination);

    res.status(200).json(distanceTime);

   }catch(err){
    console.error(err);
    res.status(500).json({message: 'Internal Server Error'});
   } 
}

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Extract input from query parameters
        const { input } = req.query;
        
        // Check if input is provided
        if (!input) {
            return res.status(400).json({ message: 'Query input is required' });
        }

        // Fetch suggestions using the map service
        const suggestions = await mapService.getAutoCompleteSuggestions(input);
        
        // Return the suggestions to the client
        return res.status(200).json(suggestions);

    } catch (err) {
        console.error('Error fetching autocomplete suggestions:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
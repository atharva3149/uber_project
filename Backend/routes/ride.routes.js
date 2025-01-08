const express = require('express');
const router = express.Router();
const {body, query } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid Destination address'),
    body('vehicleType').isString().isIn(['auto','car','moto']).withMessage('Invalid Vehicle Type'),
    rideController.createRide
 
)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup address'),
    query('destination').isString().isLength({min:3}).withMessage('Invalid Destination address'),
    
    rideController.getFare
)

module.exports = router;
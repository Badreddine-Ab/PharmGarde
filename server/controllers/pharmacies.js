const geolib = require('geolib');
const Pharmacy = require('../models/pharmacy');
const apiError = require("../utils/apiError")

const getNearbyPharmacies = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.query;
    if (!latitude || !longitude) {
      return next(new apiError('Missing latitude or longitude', 400))
    }
    const pharmacies = await Pharmacy.findAll();
    const nearbyPharmacies = pharmacies.filter((pharmacy) => {
      const distance = geolib.getDistance(
        { latitude, longitude },
        { latitude: pharmacy.latitude, longitude: pharmacy.longitude }
      );
      return distance <= 5000; // 5km
    });
    res.send(nearbyPharmacies);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching pharmacies' });
  }
};

const addPharmacy = async (req, res, next) => {
    try {
        const { name, address, latitude, longitude, opening_hours, services } = req.body;
        if (!name || !address || !latitude || !longitude) {
            return next(new apiError('Missing required fields',400))
        }

        const newPharmacy = await Pharmacy.create({
            name,
            address,
            latitude,
            longitude,
            opening_hours,
            services
        });

        res.status(201).send(newPharmacy);
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Error adding new pharmacy' });
    }
};




module.exports = {
  getNearbyPharmacies,
  addPharmacy
}
